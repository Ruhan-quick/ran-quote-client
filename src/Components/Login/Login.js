import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../Navs/NavBar";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // const {displayName, email} = result.user;
        // const signedInUser = {name: displayName,email}
        const user = result.user;
        setLoggedInUser(user);
        console.log(user.email);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
  return (
    <div className="container">
      <NavBar></NavBar>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <Button onClick={handleGoogleSignIn} variant="secondary" size="large">
          GOOGLE SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default Login;
