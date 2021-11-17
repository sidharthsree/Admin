import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
   apiKey: "AIzaSyA-4HHVuPHukbJ7AsLCCiITyX_zLy0nBcA",
  authDomain: "foodstore-ffdf9.firebaseapp.com",
  projectId: "foodstore-ffdf9",
  storageBucket: "foodstore-ffdf9.appspot.com",
  messagingSenderId: "44192915194",
  appId: "1:44192915194:web:d7b01afb68e3faf3387343",
  measurementId: "G-BC5TF4FGX2"
};
 
export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   
   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      const userRoles = ['user']

      try {
         
         await userRef.set({
            displayName,
            email,
            createdAt,
            userRoles,
            ...additionalData
         })
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }

   return userRef;
    
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;