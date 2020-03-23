import {UserAgentApplication} from 'msal';

export const LOGIN_SCOPES = ["openid","profile","user.read"];
export const API_SCOPES = ["api://c6aeddf3-e9c3-466e-b262-f79ea95a2f3d/access_user_data"];

export const acquireToken = () => {
    var userRequest = {
        scopes: API_SCOPES
    };

    try{
        return msalApp.acquireTokenSilent(userRequest);
    } catch(error){
        console.log("Error = ", error);
    }
}

export const fetchAPI = (url, accessToken) => {
    const response = fetch(url, {
        responseType:'text',
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    });

    return response;
}

export const msalApp = new UserAgentApplication({
    auth:{
        clientId:"7b77a949-ce8d-4690-b5f2-b7358b1356fa",
        authority:"https://login.microsoftonline.com/c87b3ee5-2509-4069-a3f6-ccaca5b30158",
        validateAuthority: true,
        postLogoutRedirectUri:"http://localhost:3000",
        navigateToLoginRequestUrl:true
    },
    cache:{
        cacheLocation:"sessionStorage",
        storeAuthStateInCookie: false 
    }
})