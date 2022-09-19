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
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const SECTION3_STYLE = {
    width: '100%',
    height: '10vh',
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
                        <div
                            className={
                                isMoblie
                                    ? styles.list
                                    : styles.landing_page_container_2
                            }
                            style={{
                                color: 'white',
                                display: 'flex',
                                marginTop: '150px'
                            }}
                        >
                            <div
                                className={
                                    isMoblie
                                        ? styles.item
                                        : styles.description_container
                                }
                                // style={{
                                //     display: 'flex',
                                //     flex: 1,
                                //     paddingLeft: '1vw',
                                //     flexDirection: 'column',
                                //     justifyContent: 'center',
                                //     textAlign: 'center'
                                // }}
                            >
                                <img
                                    style={{
                                        height: '10vh',
                                        width: '10vw'
                                    }}
                                    src="/images/net-worth-icon.svg"
                                    alt="net worth icon"
                                ></img>
                                <h1> Calculate Net Worth </h1>
                                <p>
                                    {' '}
                                    Easily connect your financial accounts to
                                    track your real-time net worth.{' '}
                                </p>
                            </div>
                            <div
                                className={
                                    isMoblie
                                        ? styles.item
                                        : styles.description_container
                                }
                                // style={{
                                //     display: 'flex',
                                //     flex: 1,
                                //     paddingLeft: '1vw',
                                //     justifyContent: 'center',
                                //     flexDirection: 'column',
                                //     textAlign: 'center'
                                // }}
                            >
                                <img
                                    style={{
                                        height: '10vh',
                                        width: '10vw'
                                    }}
                                    src="/images/3-banks.svg"
                                    alt="3 banks icon"
                                ></img>
                                <h1> 2+ Banks 1 Card </h1>
                                <p>
                                    {' '}
                                    Get on-demand debit cards that split shared
                                    payments your way, everytime.{' '}
                                </p>
                            </div>
                            <div
                                className={
                                    isMoblie
                                        ? styles.item
                                        : styles.description_container
                                }
                                // style={{
                                //     display: 'flex',
                                //     flex: 1,
                                //     paddingLeft: '1vw',
                                //     justifyContent: 'center',
                                //     flexDirection: 'column',
                                //     textAlign: 'center'
                                // }}
                            >
                                <img
                                    style={{
                                        height: '10vh'
                                    }}
                                    src="/images/library-icon.svg"
                                    alt="library icon"
                                ></img>
                                <h1> Learn. Create. Earn.</h1>
                                <p>
                                    {' '}
                                    Configure your own personalized pool network
                                    and you decide who gets to see it.
                                </p>
                            </div>
                            <div
                                className={
                                    isMoblie
                                        ? styles.item
                                        : styles.description_container
                                }
                            >
                                <h1> Group Pools </h1>
                                <p>
                                    {' '}
                                    Choose who can join and access your pool.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
