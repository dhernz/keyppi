// Firebase Functions SDK
import functions from "firebase-functions";
import _ from "underscore";
// import * as url from "url";

// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let httpIpfsServices = functions.https.onCall(async (data, context) => {
  console.log("incoming: ", data);
  // console.log("context: ", context);
  
  try {
      switch (data.method) {
        case "storeData":
            let storedData = await storeData(data.shards);
            return storedData;
        case "getInfo":
            let info = await getInfo(data.cid);
            return info;
        default:
            return ({data:{message: "No valid method provided"}});
      }
  } catch (error) {
      return error;
  }
});

/**
 * @param {string} shards - An array with shards to store
 * @returns {json} a json object with the response from IPFS
 */
const storeData = (shardsArray) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Initialize client
        const nft_storage_key = await(functions.config().ipfs.nft_storage_key);
        const client = new NFTStorage({ token: nft_storage_key });
        let blob = new Blob(shardsArray);
        try {
          // Store in IPFS
          const cid = await client.storeBlob(blob);
          resolve(cid);
        } catch (error) {
          console.log("Error storing shards in IPFS...:", error);
          reject(error);
        }
      } catch (error) {
        console.log("Error while attempting to initialize IPFS client...:", error);
        reject(error);
      }
    });
};

/**
 * @param {string} cid - Array with identifier addresses for stored shards
 * @returns {json} a json object with the response from IPFS
 */
const getInfo = (cid) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Prepare iPFS url
        const url = cid.replace("ipfs://", "https://api.nft.storage/");
        try {
          const nft_storage_key = await functions.config().ipfs.nft_storage_key;
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${nft_storage_key}`,
            },
          });
          resolve(response.json);
        } catch (error) {
          console.log("Error retrieving shards from IPFS...:", error);
          reject(error);
        }
      } catch (error) {
        console.log("Error while attempting to retrieve shards from IPFS...:", error);
        reject(error);
      }
    });
};

export {httpIpfsServices};

