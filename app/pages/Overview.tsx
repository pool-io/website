import { useEffect, useState } from 'react';
import { SignOutButton } from '@app/Auth';
import { User } from 'firebase/auth';

export type OverviewProps = {
    user: User;
};

export default function Overview(props: OverviewProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                marginLeft: 50
            }}
        >
            <div style={{ marginTop: 100 }}>
                <h1>Welcome to your portal</h1>
            </div>
        </div>
    );
}
