"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import firebase, { listenToAuthChanges, logout } from "../../firebase/firebase";
import { useRouter } from "next/navigation"; 
import { useTranslations } from "next-intl";

export interface authDetails {
  email: string;
  password: string;
}

export interface authScreen {
  title: string;
  desc: string;
  btnText: string;
  handle: string;
}

type AuthContextType = {
  screen: 0 | 1;
  setScreen: (value: 0 | 1) => void;
  value: string;
  _authScreen: authScreen[];
  setvalue: (value: string) => void;
  authCredientials: authDetails;
  setAuthCredientials: (authCredientials: authDetails) => void;
  login: () => Promise<void>;
  SignUp: () => Promise<void>;
  Logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const t = useTranslations();
  const _authScreen: authScreen[] = [t.raw("auth.1"),t.raw("auth.2")];

  const [value, setvalue] = useState<string>("defaultValue");
  const [screen, setScreen] = useState<0 | 1>(0);
  const [authCredientials, setAuthCredientials] = useState<authDetails>({
    email: "",
    password: "",
  });
  const login = async () => {
    try {
      if (!authCredientials.email || !authCredientials.password) {
        throw new Error("Email or password is missing.");
      }

      const user = await firebase.signInWithEmailPassword(
        authCredientials.email,
        authCredientials.password
      );

      console.log("Login successful:", user.uid);
    } catch (error) {
      console.error("Login error:", error);
      if (error instanceof Error) {
        alert(error.message || "Login failed. Check your credentials.");
      }
    }
  };
  const Logout = async () => {
    await logout();
  };
  const SignUp = async () => {
    try {
      if (!authCredientials.email || !authCredientials.password) {
        throw new Error("Email or password is missing.");
      }

      const user = await firebase.signupWithEmailPassword(
        authCredientials.email,
        authCredientials.password
      );

      console.log("Login successful:", user.uid);
    } catch (error) {
      console.error("Login error:", error);
      if (error instanceof Error) {
        alert(error.message || "Login failed. Check your credentials.");
      }
    }
  };

  useEffect(() => {
    const unsubscribe = listenToAuthChanges((user) => {
      console.log(user ? "Signed in: " + user.uid : "Signed out");

      if (user) {
        router.replace(`/user?v=${user.uid}`);
      }
    });

    return () => unsubscribe(); // Clean up on unmount
  }, [router]);
  return (
    <AuthContext.Provider
      value={{
        value,
        setvalue,
        screen,
        setScreen,
        _authScreen,
        authCredientials,
        setAuthCredientials,
        login,
        SignUp,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  return context;
};
