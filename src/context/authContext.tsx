"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface authScreen {
  title: string;
  desc: string;
  btnText: string;
  handle:string;
}

type AuthContextType = {
  screen: 0 | 1;
  setScreen: (value: 0 | 1) => void;
  value: string;
  _authScreen: authScreen[];
  setvalue: (value: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const _authScreen: authScreen[] = [
    {
      title: "Welcome to Farm Drive!",
      desc: "Sign up to find transport for your crops with ease.",
      btnText: "login",
      handle:'sign up'
    },
    {
      title: "Join Farm Drive Today!",
      desc: "Create your account to access affordable and reliable farm transport.",
      btnText: "Get Started",
      handle:'sign in'
    },
  ];
  const [value, setvalue] = useState<string>("defaultValue");
  const [screen, setScreen] = useState<0 | 1>(0);

  return (
    <AuthContext.Provider
      value={{ value, setvalue, screen, setScreen, _authScreen }}
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
