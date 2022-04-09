import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Firebase } from '@consts/Firebase';

export default function useAuthUser() {
    const [authUser, setAuthUser] = useState<User>(undefined);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Firebase.auth, (user: User) => {
            console.log('App:firebase user:', { user });
            setAuthUser(user);
        });
        return unsubscribe;
    }, []);

    return authUser;
}
