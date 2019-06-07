import * as firebase from "firebase/app";
// @ts-ignore
import firebaseConfig from "./../../firebase-config.json";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import { log } from "./log";
import { userLoggedIn } from "../redux/actions";

export const initFirebase = () => {
  return new Promise((resolve, reject) => {
    try {
      // init the firebase app
      firebase.initializeApp(firebaseConfig);
      setTimeout(() => {
        resolve();
        // onAuthStateChanged
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            console.log("onAuthStateChanged");
            userLoggedIn(user);

            setTimeout(() => {
              fetch("/api/foo")
                .then(r => r.text())
                .then(r => console.log(r));
            }, 0);
          } else {
            //do sth
          }
        });
      }, 0);
    } catch (err) {
      reject(log(err));
    }
  });
};

export const logout = () => {
  return firebase.auth().signOut();
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    let $email = email || "foo@bar.com";
    let $password = password || "foofoo";

    log(`Trying to log in for user: ${email}`);

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        firebase
          .auth()
          .signInWithEmailAndPassword($email, $password)
          .then(r => {
            resolve(r.user);
          })
          .catch(function(error) {
            reject(log(error));
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  });
};

const initializeUser = async user => {
  let o = {
    createdOn: new Date().toISOString()
  };

  console.log(user.uid);

  let ref = firebase.database().ref(user.uid);
  try {
    let user = await ref.set(o);
    return user;
  } catch (error) {
    debugger;
  }
};

export const createUserWithEmailAndPassword = (email, password) => {
  log(email);
  log(password);
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(r => {
            let user = initializeUser(r.user);
            resolve(user);
          })
          .catch(function(error) {
            reject(log(error));
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  });
};
