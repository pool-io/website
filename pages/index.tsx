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

const SECTION2_STYLE = {
    width: '100%',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const particleParams = {
    fullScreen: {
        enable: true,
        zIndex: 0
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 137,
            density: {
                enable: false
            }
        },
        size: {
            value: 0,
            random: true,
            anim: {
                speed: 10,
                size_min: 1
            }
        },
        line_linked: {
            enable: true,
            color: '#ffffff'
        },
        move: {
            directions: 'bottom',
            enable: true,
            speed: 3,
            //direction: 'top',
            out_mode: 'out',
            straight: true
        },
        color: {
            value: '#ffffff'
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

    const isMoblie = useIsMobile();

    return (
        <>
            <Head>
                <script src="https://unpkg.com/extra.css/superUnderline.js"></script>
            </Head>
            <Layout isHideSidebar={true}>
                <div>
                    <section id="Login" style={SECTION_STYLE}>
                        <div
                            className={styles.landing_page_container_1}
                            style={{
                                flexDirection: isMoblie ? 'column' : 'row'
                            }}
                        >
                            {isMoblie ? null : (
                                <div className={styles.login_container}>
                                    <Login />
                                </div>
                            )}
                            <div className={styles.info_container}>
                                <span>
                                    <span
                                        className={styles.underlined_span}
                                        style={{
                                            color: 'white'
                                        }}
                                    >
                                        Consolidating and Personalizing
                                        Financial Services
                                    </span>{' '}
                                    {/* It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. */}
                                </span>
                            </div>
                        </div>
                        <div>
                            <Particles
                                params={particleParams}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    top: '0',
                                    left: 0,
                                    width: '100%',
                                    height: 'calc(100vh - 80px)'
                                }}
                                init={customInit}
                                loaded={particlesLoaded}
                            />
                        </div>
                    </section>
                    <section
                        id="Consolidate Financial Features"
                        style={SECTION2_STYLE}
                    >
                        <div className={styles.landing_page_container_2}>
                            <div className={styles.description_container}>
                                <p> Calculate Net Worth </p>
                            </div>
                            <div className={styles.description_container}>
                                <p> 2+ Banks 1 Card </p>
                            </div>
                            <div className={styles.description_container}>
                                <p> Pool Network Configurations</p>
                            </div>
                            <div className={styles.description_container}>
                                <p> Group Pools </p>
                            </div>
                        </div>
                    </section>
                    <section
                        id="Consolidate Financial Features"
                        style={SECTION2_STYLE}
                    >
                        <div className={styles.landing_page_container_2}>
                            <div className={styles.description_container}>
                                <p> Calculate Net Worth </p>
                            </div>
                            <div className={styles.description_container}>
                                <p> 2+ Banks 1 Card </p>
                            </div>
                            <div className={styles.description_container}>
                                <p> Pool Network Configurations</p>
                            </div>
                            <div className={styles.description_container}>
                                <p> Group Pools </p>
                            </div>
                        </div>
                    </section>
                    {/* <section
                        id="Personalize Financial Features"
                        style={SECTION2_STYLE}
                    >
                        <div className={styles.info_container}>
                            <span>Pool Architecture</span>
                        </div>
                    </section> */}
                </div>
            </Layout>
        </>
    );
}
