import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Duplex } from 'stream';

export default function Overview() {
    return (
        <div>
            <h1>Welcome to your portal</h1>
            <h2>Announcements</h2>
        </div>
    );
}
