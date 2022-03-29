import styles from './index.module.css';
import Image from 'next/image';
import Card from '@components/card';
import Layout from '@components/layout';
import React, { ReactNode, useEffect, useState } from 'react';

export default function About() {
    return (
        <Layout route="/about">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    background: 'white',
                    width: '100%',
                    height: '100%'
                }}
            >
                <div style={{ height: 100 }} />
                <h1>About</h1>
                <Image
                    src="/images/logo.png"
                    alt="by Daniel Lim"
                    width={400}
                    height={200}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                        background: 'white',
                        width: '75%',
                        height: '100vh'
                    }}
                >
                    <p> Our Design/Concept</p>

                    <p> What Makes it All Possible</p>
                </div>
            </div>
        </Layout>
    );
}
