import { init } from 'next-firebase-auth';

const initAuth = () => {
    init({
        // debug: true,
        authPageURL: '/signin',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        onLoginRequestError: (err) => {
            console.error('[onLoginRequestError] ', err);
        },
        onLogoutRequestError: (err) => {
            console.error('[onLogoutRequestError] ', err);
        },
        // firebaseAuthEmulatorHost: 'localhost:9099',
        firebaseAdminInitConfig: {
            credential: {
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                // The private key must not be accessible on the client side.
                privateKey: process.env.FIREBASE_PRIVATE_KEY
            },
            databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
        },
        // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
        // useFirebaseAdminDefaultCredential: true,
        firebaseClientInitConfig: {
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY, // required
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
        },
        cookies: {
            name: 'ExampleApp', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === 'true', // set this to false in local (non-HTTPS) development
            signed: false
        },
        onVerifyTokenError: (err) => {
            console.error('[onVerifyTokenError] ', err);
        },
        onTokenRefreshError: (err) => {
            console.error('[onTokenRefreshError] ', err);
        }
    });
};

export default initAuth;
