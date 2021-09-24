const ENV = "dev";

const AWS_REGION = "ap-southeast-1";
const AWS_USER_POOL_ID = "ap-southeast-1_Zkd6BsDWT";
const AWS_USER_POOL_WEB_CLIENT = "43srg6f0qj7qqeteot07n65ml2";

const AUTH_DOMAIN = "auth.dev.hopblox.com";

const COOKIE_STORAGE = "localhost";
const REDIRECT_SIGNIN_URL = "http://localhost:" + 3000 + "/dashboard";
const REDIRECT_SIGNOUT_URL = "http://localhost:" + 3000 + "/logout";

// const COOKIE_STORAGE = "health.dev.hopblox.com";
// const REDIRECT_SIGNIN_URL = "https://health.dev.hopblox.com/dashboard";
// const REDIRECT_SIGNOUT_URL = "https://health.dev.hopblox.com/logout";

export { ENV, AWS_REGION, AWS_USER_POOL_ID, AWS_USER_POOL_WEB_CLIENT, AUTH_DOMAIN, COOKIE_STORAGE, REDIRECT_SIGNIN_URL, REDIRECT_SIGNOUT_URL };
