import admin from 'firebase-admin';

// functions list
import {httpVerificationServices} from "./http/verification/services.mjs";
import {httpIpfsServices} from "./http/ipfs/services.mjs";

import {readFile} from 'fs/promises';
const serviceAccount = JSON.parse(
  await readFile(
    new URL("./keyppi-firebase-adminsdk-lns40-f9cafa746c.json", import.meta.url)
  )
);

const settings = {timestampsInSnapshots: true};
const config = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://keyppi.firebaseio.com",
};

admin.initializeApp(config);
admin.firestore().settings(settings);

export {httpVerificationServices};
export {httpIpfsServices};


