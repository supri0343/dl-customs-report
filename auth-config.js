export default {
    endpoint: "auth",
    configureEndpoints: ["auth","customs-report"],

    loginUrl: "authenticate",
    profileUrl: "/me",

    authTokenType: "Bearer",
    accessTokenProp: "data",

    storageChangedReload: true
};