// Firebase Functions SDK
import functions from "firebase-functions";
// Firebase Admin SDK
import admin from "firebase-admin";
import bcrypt from "bcrypt";
// Twilio Helper Library
import twilio from twilio;
// Two-factor authentication for Node.js.
import speakeasy from speakeasy;
// Base32 encoder.
import base32 from "hi-base32";

// Initialize firestore db
const db = admin.firestore();

let httpChallengesServices = functions.https.onCall(async (data, context) => {
  console.log("incoming: ", data);
  // console.log("context: ", context);
  
  try {
      switch (data.method) {
        case "smsChallenge":
            let smsChallengeResponse = await smsChallenge(data.phone);
            return smsChallengeResponse;
        case "verifySmsChallenge":
            let verification = await verifySmsChallenge(data.phone, data.token);
            return verification;
        default:
            return ({data:{message: "No valid method provided"}});
      }
  } catch (error) {
      return error;
  }
});

/**
 * @param {string} phone - A phone number to validate challenge
 * @returns {json} a json object with the response from Twilio
 */
const smsChallenge = (phone) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Static seed to generate tokens
        const seed = functions.config().seed;
        let secret = seed.private_key_id;

        // Retrieve Twilio credentials
        const accountSid = await functions.config().twilio.accountsid; // Your Account SID from www.twilio.com/console
        const authToken = await functions.config().twilio.token; // Your Auth Token from www.twilio.com/console

        const client = new twilio(accountSid, authToken);
        const message = "Your Keyppi verification code is: ${token}";

        const key = phone;
        if (!key) {
            reject({data:{
                message: 'A key is required to generate OTP'
            }});
        } else {
          let phone = key;
          key = key.padEnd(32, secret);
          key = base32.encode(key);

          // Generate OTP
          let token = speakeasy.totp({
              secret: key,
              encoding: 'base32'
          });

          // Include OTP in SMS
          message = eval("`" + message + "`");

          try {
            // Send SMS
            const fromPhone = await functions.config().twilio.phone;
            const messageResponse = await client.messages.create({
              body: message,
              to: `${phone}`, // Destination number
              from: fromPhone // Twilio number
            });
            db.collection("challengeLogs").add({
              "channel": "phone",
              "response": messageResponse
            })
            .catch( (error) => {
              console.log("Error while logging challenge...:", error);
            });
            console.log("messageResponse...:", messageResponse);
            resolve(messageResponse);
          } catch (error) {
            console.log("Error sending SMS message...:", error);
            reject(error);
          }
        }
      } catch (error) {
        console.log("Error while attempting to generate SMS OTP...:", error);
        reject(error);
      }
    });
};

/**
 * @param {string} phone - A phone number to validate challenge
 * @param {string} token - A token to validate challenge
 * @returns {json} a json object with the response from speakeasy
 */
const verifySmsChallenge = (phone, token) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Static seed to generate tokens
        const seed = functions.config().seed;
        let secret = seed.private_key_id;

        let key = phone;
        let validation = false;
        let validationType = null;
        // let phone = null;
        // Reading key & token from request body query parameter
        if (!key) {
          reject({data:{
            message: "A key is required to verify OTP"
          }});
        }
        if (!token) {
          reject({data:{
            message: "A token is required to verify OTP"
          }});
        }

        console.log(`Validating OTP for Phone ${key}`);
        validationType = 'token';
        phone = key;
        key = key.padEnd(32, secret);
        key = base32.encode(key);

        // Validate OTP
        validation = speakeasy.totp.verify({
            secret: key,
            encoding: 'base32',
            token: token,
            window: window
        });
        console.log("OTP validation response", validation);
        resolve(validation);
      } catch (error) {
        console.log("Error while attempting to verify SMS OTP...:", error);
        reject(error);
      }
    });
};

export {httpChallengesServices};

