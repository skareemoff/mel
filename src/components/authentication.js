import { appleAuth } from '@invertase/react-native-apple-authentication';
import { decode } from 'base-64';
import { jwtDecode } from 'jwt-decode';
import { localStorage } from "./storage";
import { ACTION_URL } from './Utils';

// polyfill for "atob" so that jwt.decode will work
global.atob = decode;

const KEY_USER_ID_TOKEN = 'UserIDToken';
const KEY_USER_ID = 'UserID';
const KEY_USER_EMAIL = 'UserEmail';
const KEY_USER_FNAME = 'UserFirstName';
const KEY_USER_LNAME = 'UserLastName';
const VAL_UNKNOWN = 'unknown';

export const login = async ({updateLoggedInState}) => {
    if (verifyLogin()) {
        updateLoggedInState();
        return true;
    }

    try {

        // performs login request
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            // Note: it appears putting FULL_NAME first is important, see issue #293
            requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
        });

        let userID = VAL_UNKNOWN;
        let userEmail = VAL_UNKNOWN;
        let userFName = VAL_UNKNOWN;
        let userLName = VAL_UNKNOWN;

        const {
            user: newUser,
            email,
            fullName,
            identityToken,
            nonce,
            realUserStatus,
        } = appleAuthRequestResponse;

        userID = newUser;
        if( email )
            userEmail = email;

        if (fullName && fullName.givenName && fullName.familyName) {
            userFName = fullName.givenName;
            userLName = fullName.familyName;
        }

        // The email and fullName are only provided on the first sign in to an app.
        // But, we can get the email from the JWT every time if we decode it.
        if (userEmail === VAL_UNKNOWN) {
            const decodedToken = jwtDecode(identityToken);
            if (decodedToken.email)
                userEmail = decodedToken.email;
        }

        // get current authentication state for user
        // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED) {
            storeUserData(identityToken, userID, userEmail, userFName, userLName);
            registerUserData(userID);
            updateLoggedInState();
        }
    }
    catch(err) {
        setError(true);
        console.log(err);
    }
}

export const getUserID = () => {
    return localStorage.getString(KEY_USER_ID);
}

const registerUserData = ({userID}) => {
    try {
        const url = ACTION_URL+'loggedIn';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                userID: userID
            }),
        });
    }
    catch(err) {
        setError(true);
    }
}

const verifyLogin = () => {
    const userID = localStorage.getString(KEY_USER_ID);
    if(userID) {
        // TODO: verify token
        return true;
    }

    return false;
}

const storeUserData = ({userIDToken, userID, userEmail, userFName, userLName}) => {
    storeVal(KEY_USER_ID_TOKEN, userIDToken);
    storeVal(KEY_USER_ID, userID);
    storeVal(KEY_USER_EMAIL, userEmail);
    storeVal(KEY_USER_FNAME, userFName);
    storeVal(KEY_USER_LNAME, userLName);
}

const storeVal = ({key, val}) => {
    if(val && val !== VAL_UNKNOWN)
        localStorage.set(key, val);
}