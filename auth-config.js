export default {
    endpoint: "auth",
    configureEndpoints: ["auth","customs-report","purchasing","garment-production"],

    loginUrl: "authenticate",
    profileUrl: "/me",

    authTokenType: "Bearer",
    accessTokenProp: "data",

    storageChangedReload: true
};