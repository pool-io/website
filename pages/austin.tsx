import { useState } from 'react';
import Layout from '@components/layout';

export default function SoungBaeKim() {
    return (
        <Layout route="/learn">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 100,
                    width: '100vw',
                    height: '100vh'
                }}
            >
                <h1>Austin Im</h1>
                <p>austinim99@gmail.com</p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '50vw'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <h2>fwaygo</h2>
                    </div>
                    <div>
                        <h2>projectulterior</h2>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

