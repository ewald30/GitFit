// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 




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
const db = getFirestore(app);
const auth = getAuth(app)
// ​​const db = getFirestore(app);


const registerWithEmailAndPassword = async (username, email, password) => {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      // console.log("user: " + JSON.stringify(user, null, 2));
      // console.log("email: " + user.email)

      const usersRef = collection(db, "users");

      await setDoc(doc(usersRef, user.uid), {
        uid: user.uid,
        username,
        authProvider: "local",
        email,
      });

      return user.uid;
  };


const handleSignIn = async (email, password) => {
  console.log("EMAIL: " + email)
  console.log("PASSWORD: " + password)
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log("LOgged in with" , user)

  } catch (err) {
    alert(err.message)
  }
}

const handleSignOut = async () => {
  try {
    const res = await signOut(auth);
    // const user = res.user;
    // console.log("LOgged in with" , user)

  } catch (err) {
    alert(err.message);
  }
}


const  logWorkout = async (uid, username, date) => { 
  try{

    await addDoc(collection(db, "workouts"), {
      uid: uid,
      username,
      date
    });

  } catch (err) {
    alert(err.message);
  }
}


const getUserData = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      alert("No such document!");
  }
}

const getWorkoutsForUser = async (uid) => {
  const q = query(collection(db, "workouts"), where("uid", "==", uid));
  
  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot.data())

  // querySnapshot.map(doc => doc.data());
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data())
  })

  return data;
}



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


export {auth, registerWithEmailAndPassword, handleSignIn, handleSignOut, getUserData, signInWithGoogle, logWorkout, getWorkoutsForUser}