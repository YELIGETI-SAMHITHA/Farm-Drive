// Firebase core & modules
import { initializeApp } from "firebase/app";
import * as Auth from "firebase/auth";
import * as Firestore from "firebase/firestore";

// Utility & Types
import { getCurrentLocation } from "../src/utils/location";
import type { User as FarmUser, Location } from "../src/types/roles";

// Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// Initialize Firebase App & Services
const app = initializeApp(firebaseConfig);
const auth = Auth.getAuth(app);
const db = Firestore.getFirestore(app);

// -----------------------------
// ✅ SIGN UP FUNCTION
// -----------------------------
export const signupWithEmailPassword = async (
  email: string,
  password: string
): Promise<Auth.User> => {
  try {
    const userCredential = await Auth.createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userData: FarmUser = {
      uid: user.uid,
      name: "",
      email,
      phone: "",
      role: "farmer",
      createdAt: Date.now(),
      password,
    };

    let locationData: Location | null = null;

    // Try getting location, fallback if blocked/denied
    try {
      const position = await getCurrentLocation();
      locationData = {
        id: `loc-${Date.now()}`,
        name: "Current Location",
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        description: "Captured from browser",
      };
    } catch (err) {
      console.warn("Location not available or permission denied:", err);
    }

    const docData = locationData
      ? { ...userData, location: locationData }
      : { ...userData };

    await Firestore.setDoc(Firestore.doc(db, "users", user.uid), docData);

    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Unknown signup error");
    }
    console.error("Unknown signup error");
    throw error;
  }
};

// -----------------------------
// ✅ SIGN IN FUNCTION
// -----------------------------
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
      throw new Error(error?.message || "Unknown signup error");

    }
    console.error("Unknown signup error");
    throw error
  }
};

// -----------------------------
// ✅ SIGN OUT FUNCTION
// -----------------------------
export const logout = async (): Promise<void> => {
  try {
    await Auth.signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
  }
};

// -----------------------------
// ✅ AUTH STATE LISTENER
// -----------------------------
export const listenToAuthChanges = (callback: (user: Auth.User | null) => void) => {
  return Auth.onAuthStateChanged(auth, callback);
};

// -----------------------------
// ✅ Export Firebase Utility Object
// -----------------------------
const firebase = {
  app,
  auth,
  db,
  signInWithEmailPassword,
  signupWithEmailPassword,
  logout,
  listenToAuthChanges,
};

export default firebase;
