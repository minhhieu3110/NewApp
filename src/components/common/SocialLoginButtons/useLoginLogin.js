import appleAuth from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect, useState} from 'react';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

const facebookLogin = async () => {
  const data = await AccessToken.getCurrentAccessToken();
  if (data) {
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    return auth().signInWithCredential(facebookCredential);
  } else {
    return new Promise((resolve, reject) => {
      LoginManager.logInWithPermissions(['public_profile', 'email']).then(
        async result => {
          if (result.isCancelled) {
            reject('USER CANCEL');
          } else {
            const token = await AccessToken.getCurrentAccessToken();
            const facebookCredential = auth.FacebookAuthProvider.credential(
              token.accessToken,
            );
            resolve(auth().signInWithCredential(facebookCredential));
          }
        },
        function (err) {
          reject(err);
        },
      );
    });
  }
};

const googleLogin = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  if (currentUser) {
    const googleCredential = auth.GoogleAuthProvider.credential(
      currentUser.idToken,
    );
    return auth().signInWithCredential(googleCredential);
  }
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};

const appleLogin = async () => {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  if (!appleAuthRequestResponse.identityToken) {
    throw new Error('Apple Sign-In failed - no identify token returned');
  }

  const {identityToken, nonce} = appleAuthRequestResponse;
  return auth.AppleAuthProvider.credential(identityToken, nonce);
};

export default function useSocialLogin() {
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(_user => {
      if (_user) {
        setUser(_user.providerData[0]);
      } else {
        setUser(null);
      }
    });
    return subscriber;
  }, []);

  useEffect(() => {
    return () => {
      auth().signOut();
    };
  }, []);

  return {user, facebookLogin, googleLogin, appleLogin};
}
