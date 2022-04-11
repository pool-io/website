import { ENDPOINTS } from '@consts/Endpoints';
import useAuthUser from '@hooks/useAuthUser';
import { useEffect, useState } from 'react';

export type Birthday = {
    year: number;
    month: number;
    day: number;
};

export type User = {
    userID: string;
    username: string;
    firstName: string;
    lastName: string;
    brthday: Birthday;
};

type BirthdayData = {
    year: number;
    month: number;
    day: number;
};

type UserData = {
    user_id: string;
    username: string;
    first_name: string;
    last_name: string;
    birthday: BirthdayData;
};

export default function useMyUser(): User {
    const authUser = useAuthUser();
    const [user, setUser] = useState<User>(null);

    useEffect(() => {
        if (authUser) {
            authUser
                .getIdToken()
                .then((idToken: string) => {
                    const url = `${ENDPOINTS.SERVICE}/user/create`;
                    console.log('useMyUser', { idToken, url });
                    return fetch(`${ENDPOINTS.SERVICE}/user/create`, {
                        method: 'POST',
                        headers: {
                            // 'Access-Control-Allow-Origin':
                            //     'http://localhost:3000',
                            // 'Access-Control-Allow-Methods': 'POST',
                            // ' Access-Control-Allow-Headers':
                            //     'Content-Type, Authorization',
                            // Authorization: `Bearer ${idToken}`
                            Authorization: idToken
                            // 'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({})
                    });
                })
                .then((resp: Response) => {
                    return resp.json();
                })
                .then((data: UserData) => {
                    console.log('useMyUser', { data });
                    setUser({
                        userID: data.user_id,
                        username: data.username,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        brthday: {
                            year: data.birthday.year,
                            month: data.birthday.month,
                            day: data.birthday.day
                        }
                    });
                })
                .catch((err) => {
                    console.log('[useMyUser] failed', { err });
                });
        }
    }, [authUser]);

    return user;
}
