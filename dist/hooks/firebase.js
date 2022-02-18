import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import { getDatabase, ref, set, child, get, update, remove } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

class firebase {
  constructor(array) {
    this.array = array;
    this.db = getDatabase(initializeApp(array));
    this.auth = getAuth(initializeApp(array));
  }
  db() {
    return {
      set: function (path, array, callback) {
        set(ref(db, path), array).then((snapshot) => {
            if (!!callback) {
              callback();
            }
          }).catch((error) => {
            console.error(error);
        });
      },
      get: function (path, callback, notexists) {
        const dbRef = ref(this.db);
        get(child(dbRef, path)).then((snapshot) => {
          if (snapshot.exists()) {
            if (!!callback) {
              callback(snapshot);
            } else {
              return snapshot;
            }
          } else {
            if (!!notexists) {
              notexists();
            }
          }
          }).catch((error) => {
            console.error(error);
        });
      },
      update: function (path, array, callback) {
        update(ref(db, path), array).then((snapshot) => {
            if (!!callback) {
              callback();
            }
          }).catch((error) => {
            console.error(error);
        });
      }, 
      remove: function (path) {
        const dbRef = ref(this.db);
        remove(child(dbRef, path));
      }
    };
  }
  auth() {
    return {
      signUp: function (email, password, onSuccess, onError) {
        const authS = this.auth;
        createUserWithEmailAndPassword(authS, email, password)
        .then((userCredential) => {
            if (!!onSuccess) {
              onSuccess();
            }
          })
         .catch((error) => {
            if (!!onError) {
              onError();
            }
         });
      },
      signIn: function (email, password, onSuccess, onError) {
        const authS = this.auth;
        signInWithEmailAndPassword(authS, email, password)
         .then((userCredential) => {
            if (!!onSuccess) {
              onSuccess();
            }
          })
         .catch((error) => {
            if (!!onError) {
              onError();
            }
         });
      },
      signOut: function (onSuccess, onError) {
        signOut(this.auth).then((userCredential) => {
            if (!!onSuccess) {
              onSuccess();
            }
          })
         .catch((error) => {
            if (!!onError) {
              onError();
            }
         });
      },
      isSignedIn: function(callback, error) {
        const auth = this.auth;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            callback(user);
          } else {
            error();
          }
        });
      }
    };
  }
}

export { firebase };