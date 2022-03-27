import App from '@app/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Portal() {
    const router = useRouter();
    // const [isSignUp, setIsSignUp] = useState<boolean>(false);

    // useEffect(() => {
    console.log('router:', router.query['signup']);
    //     setIsSignUp(Boolean(router.query['signup']));
    // }, []);
    return <App isSignUp={router.query['signup'] !== undefined} />;
}
