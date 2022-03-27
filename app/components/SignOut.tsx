import { updateCurrentUser } from 'firebase/auth';
import { MouseEventHandler } from 'react';
import { Firebase } from '@app/Firebase';

export default function SignOutButton() {
    const handleSignOut: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        updateCurrentUser(Firebase.auth, null);
    };

    return <button onClick={handleSignOut}>Sign Out</button>;
}
