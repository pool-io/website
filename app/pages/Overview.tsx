import { useEffect, useState } from 'react';
import { SignOutButton } from '@app/Auth';
import { User } from 'firebase/auth';

export type OverviewProps = {
    user: User;
};

export default function Overview(props: OverviewProps) {
    return (
        <div style={{}}>
            <h1>Welcome to your portal</h1>
        </div>
    );
}
