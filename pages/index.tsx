import Link from 'next/link';
import Layout from '@components/Layout';
import Card from '@components/Card';
import useIsMobile from '@hooks/useIsMobile';
import * as CSS from 'csstype';
import React, { ReactNode, useEffect, useState } from 'react';

export default function Home() {
    useEffect(() => {
        // NOTE: phones for some reason pushes it up on load
        window.scrollTo(-10, 0);
    }, []);

    return (
        <Layout isHideSidebar={true}>
            <div
                style={{
                    // height: '100vh'
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'white',
                        padding: 100,
                        borderRadius: 25
                    }}
                >
                    <h1>POOL</h1>
                    <p>SIGN IN TO FIND OUT</p>
                </div>
            </div>
        </Layout>
    );
}
