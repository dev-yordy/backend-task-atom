import firebaseAdmin from 'firebase-admin';
import * as serviceAccount from '../../firebaseadmin.json';

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount as firebaseAdmin.ServiceAccount),
});

export const db = firebaseAdmin.firestore();
