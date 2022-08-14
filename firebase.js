// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5mNEyjCAYf7lR4wt3cQ8wLfwSehfyR4E",
  authDomain: "gitfit-62b9c.firebaseapp.com",
  projectId: "gitfit-62b9c",
  storageBucket: "gitfit-62b9c.appspot.com",
  messagingSenderId: "719533327711",
  appId: "1:719533327711:web:5204a90112a6c289cca2ea",
  measurementId: "G-P4GYKM24PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// ​​const db = getFirestore(app);


const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      console.log("user: " + JSON.stringify(user, null, 2));
      console.log("email: " + user.email)
    //   await addDoc(collection(db, "users"), {
    //     uid: user.uid,
    //     name,
    //     authProvider: "local",
    //     email,
    //   });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithRedirect(auth, googleProvider);
      const user = res.user;
      console.log("user: " + JSON.stringify(user, null, 2));

    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


export {auth, registerWithEmailAndPassword, signInWithGoogle}