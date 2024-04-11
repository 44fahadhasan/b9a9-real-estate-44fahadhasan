import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("auth provider", user);

  // create an new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // set or update user name & profile picture
  const updateUserProfile = (displayName, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  // user login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user logout
  const userLogOut = () => {
    return signOut(auth);
  };

  // state observer
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
        console.log("login user on observer");
      } else {
        // User is signed out
        console.log("logout user on observer");
        setUser(null);
      }
    });
  }, []);

  const authInfo = {
    user,
    loading,
    createNewUser,
    updateUserProfile,
    userLogin,
    userLogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
