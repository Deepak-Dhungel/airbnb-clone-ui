import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase.config";

export type ContextProviderType = {
  children: React.ReactNode;
};

type AuthenticationContextType = {
  openLoginModal: boolean;
  setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  loggedInUser: User | undefined;
  setLoggedInUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  loginWithGoogle: () => void;
};

export const AuthenticationContext = createContext<AuthenticationContextType>(
  {} as AuthenticationContextType
);

export const AuthenticationContextProvider = ({
  children,
}: ContextProviderType) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User | undefined>();
  // onAuthStateChanged

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        setOpenLoginModal(false);
        console.log("res", result);
      })
      .catch((error) => {
        console.log("sign in error", error);
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedInUser(user);
    } else {
      console.log("user is signed out");
    }
  });

  return (
    <AuthenticationContext.Provider
      value={{
        openLoginModal,
        setOpenLoginModal,
        loginWithGoogle,
        // userLoggedIn,
        // setUserLoggedIn,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
