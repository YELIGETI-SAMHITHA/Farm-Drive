// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import * as Auth from "firebase/auth";
import * as Firestore from "firebase/firestore";
import { getCurrentLocation } from "../src/utils/location";
import { User as FarmUser, Location } from "../src/types/roles"; // Import actual types, not default object

// Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = Auth.getAuth(app);
const db = Firestore.getFirestore(app);

// SIGNUP FUNCTION
export const signupWithEmailPassword = async (
  email: string,
  password: string
): Promise<Auth.User> => {
  try {
    const userCredential = await Auth.createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;



    const position = await getCurrentLocation();

    const userData: FarmUser = {
      uid: user.uid,
      name: "",
      email,
      phone: "",
      role: "farmer",
      createdAt: Date.now(),
      password: password
    };

    const locationData: Location = {
      id: `loc-${Date.now()}`,
      name: "Current Location",
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      description: "Captured from browser",
    };

    await Firestore.setDoc(Firestore.doc(db, "users", user.uid), {
      ...userData,
      location: locationData,
    });


    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown signup error");
    }
  }
};

// SIGN-IN FUNCTION
export const signInWithEmailPassword = async (
  email: string,
  password: string
): Promise<Auth.User> => {
  try {
    const userCredential = await Auth.signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown sign-in error");
    }
  }
};

export const logout = async () => {
  try {
    Auth.signOut(auth);
  } catch (error) {
    console.log(error)
  }
}

//  AUTH STATE LISTENER
export const listenToAuthChanges = (callback: (user: Auth.User | null) => void) => {
  return Auth.onAuthStateChanged(auth, callback);
};


//  Firebase Utility Object
const firebase = {
  app,
  auth,
  db,
  signInWithEmailPassword,
  signupWithEmailPassword,
  listenToAuthChanges,
};

export default firebase;
