import Link from 'next/link';
import Layout from '@components/Layout';
import Card from '@components/Card';
import useIsMobile from '@hooks/useIsMobile';
import * as CSS from 'csstype';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import Login from '@components/Login';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions, Container } from 'tsparticles-engine';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';

const SECTION_STYLE = {
    width: '100%',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const particleParams = {
    fullScreen: {
        enable: true,
        zIndex: 0
    },
    fpsLimit: 120,
    particles: {
        number: {
            value: 160,
            density: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                speed: 10,
                size_min: 0.3
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            directions: 'none',
            enable: true,
            speed: 3,
            //direction: 'top',
            out_mode: 'out',
            straight: false
        },
        color: {
            value: '#7CB9E8'
        }
    }
} as ISourceOptions;

export default function Home() {
    useEffect(() => {
        // NOTE: phones for some reason pushes it up on load
        window.scrollTo(-10, 0);
    }, []);

    const customInit = useCallback(async (engine: Engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        []
    );

    return (
        <>
            <Head>
                <script src="https://unpkg.com/extra.css/superUnderline.js"></script>
            </Head>
            <Layout isHideSidebar={true}>
                <div>
                    <section id="section" style={SECTION_STYLE}>
                        <div className={styles.landing_page_container}>
                            <div className={styles.login_container}>
                                <Login />
                            </div>
                            <div className={styles.info_container}>
                                <span>
                                    <span className={styles.underlined_span}>
                                        Finance Simplified.
                                    </span>{' '}
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.
                                </span>
                            </div>
                        </div>
                        <div>
                            <Particles
                                params={particleParams}
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: 0,
                                    width: '100%',
                                    height: 'calc(100vh - 80px)',
                                    background: 'black'
                                }}
                                init={customInit}
                                loaded={particlesLoaded}
                            />
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
