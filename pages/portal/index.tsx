import App from '@components/App';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Duplex } from 'stream';

export default function Portal() {
    return (
        <App>
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
        </App>
    );
}
