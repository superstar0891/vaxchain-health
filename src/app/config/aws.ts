import config from "./";

const awsConfig = {
    Auth: {
        "region": config.AWS_REGION,
        "userPoolId": config.AWS_USER_POOL_ID,
        "userPoolWebClientId": config.AWS_USER_POOL_WEB_CLIENT,
        "mandatorySignIn": false,
        "cookieStorage": {
            "domain": config.COOKIE_STORAGE,
            "path": "/",
            "expires": 365,
            "secure": true
        },
        "redirectSignIn": config.REDIRECT_SIGNIN_URL,
        "redirectSignOut": config.REDIRECT_SIGNOUT_URL
    },
    "API": {
        "endpoints": [
            {
                "name": "hopblox-api",
                "endpoint": "https://api.dev.hopblox.com"
            }
        ]
    }
};

const awsAuth = {
    "domain": config.AUTH_DOMAIN,
    "scope": [
      "email",
      "profile",
      "openid",
      // "aws.cognito.signin.user.admin"
    ],
    "redirectSignIn": config.REDIRECT_SIGNIN_URL,
    "redirectSignOut": config.REDIRECT_SIGNOUT_URL,
    "responseType": "code"
}

export { awsConfig, awsAuth };
