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
                id="container"
                style={{
                    height: '100vh',
                    width: '100%',
                    flex: 1,
                    display: 'flex',
                    // flexDirection: 'column',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    float: 'left',
                    background: 'white'
                }}
            >
                {/* login component */}

                <div
                    id="login"
                    style={{
                        background: 'gainsboro',
                        float: 'left',
                        width: '500%',
                        height: '77%'
                    }}
                ></div>

                {/* primary call to action */}
                <div
                    id="login"
                    style={{
                        background: 'aliceblue',
                        float: 'left',
                        width: '500%',
                        height: '77%'
                    }}
                ></div>
            </div>
        </Layout>
    );
}
