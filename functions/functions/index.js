import admin from 'firebase-admin';

// functions list
// import {httpVerificationServices} from "./http/verification/services.mjs";
import {httpIpfsServices} from "./http/ipfs/services.mjs";
import {httpSecuringServices} from "./http/securing/services.mjs";
import {httpChallengesServices} from "./http/challenges/services.mjs";

import {readFile} from 'fs/promises';
const serviceAccount = JSON.parse(
  await readFile(
    new URL("./keyppi-firebase-adminsdk-lns40-5664e362ea.json", import.meta.url)
  )
);

const settings = {timestampsInSnapshots: true};
const config = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://keyppi.firebaseio.com",
};

admin.initializeApp(config);
admin.firestore().settings(settings);

// export {httpVerificationServices};
export {httpIpfsServices};
export {httpSecuringServices};
export {httpChallengesServices};


