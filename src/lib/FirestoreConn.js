import * as admin from "firebase-admin";

const secretKey = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
const databaseURLSecretKey = process.env.DATABASEURL_SRECRETKEY;

const firebaseApp = admin.apps.length
  ? admin.app()
  : admin.initializeApp({
      credential: admin.credential.cert(secretKey),
      databaseURL: databaseURLSecretKey,
    });

const firestoreDB = admin.firestore();
const realtimeDB = admin.database();

export { firestoreDB, realtimeDB };
