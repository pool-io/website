import styles from './index.module.css';
import Link from 'next/link';
import Layout from '@components/layout';
import Card from '@components/card';
import Drop from '@components/svg/drop';
import EmailInput from '@components/input/email';
import useIsMobile from '@components/utils/useIsMobile';
import * as CSS from 'csstype';
import React, { useEffect, useState } from 'react';

type CardContainerProps = {
    children?: React.ReactNode;
};

function CardContainer(props: CardContainerProps) {
    const isMobile = useIsMobile();
    const [flexDirection, setFlexDirection] =
        useState<CSS.Property.FlexDirection>('row');
    const [height, setHeight] = useState<CSS.Property.Height>('100vh');

    useEffect(() => {
        setFlexDirection(isMobile ? 'column' : 'row');
        setHeight(isMobile ? '200vh' : '100vh');
    }, [isMobile]);

    return (
        <div
            className={styles.hero}
            style={{ flexDirection: flexDirection, height: height }}
        >
            {props.children}
        </div>
    );
}

function LogoCard() {
    type RGB = { red: number; green: number; blue: number };

    const [color, setColor] = useState<RGB>({
        red: 0,
        green: 0,
        blue: 0
    });

    const negative = (color: RGB): RGB => {
        const flip = (value: number) => {
            return (value + 10) % 0xff;
        };

        return {
            red: flip(color.red),
            blue: flip(color.blue),
            green: flip(color.green)
        };
    };

    // useEffect(() => {
    //     const colorInterval = setInterval(() => {
    //         setColor((color) => negative(color));
    //     }, 1000);
    //     // setColor(negative());
    //     return () => clearInterval(colorInterval);
    // }, []);

    console.log(
        `linear-gradient(#${
            color.red.toString(16) +
            color.green.toString(16) +
            color.blue.toString(16)
        }, #${
            negative(color).red.toString(16) +
            negative(color).blue.toString(16) +
            negative(color).green.toString(16)
        })`
    );

    return (
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `linear-gradient(#${
                    color.red.toString(16) +
                    color.green.toString(16) +
                    color.blue.toString(16)
                }, #${
                    negative(color).red.toString(16) +
                    negative(color).blue.toString(16) +
                    negative(color).green.toString(16)
                })`,
                color: 'black'
            }}
        >
            <h1>Take control of your money</h1>
            <div style={{ width: '50%' }}>
                <Drop color="white" />
            </div>
            <h1>Automate & Optimize</h1>
            <h1>your finances</h1>
            <h1>poolfolio</h1>
        </div>
    );
}

export default function Home() {
    return (
        <Layout route="/">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        width: '100vw',
                        background: '#f0f0f0'
                    }}
                >
                    <h1 style={{ fontSize: 100 }}>
                        <a style={{ color: '#50a8c5' }}>POOL</a>
                        FOLIO
                    </h1>
                    <h1>A SINGLE PLACE TO MANAGE ALL YOUR FINANCES</h1>
                    <div style={{ height: 10 }} />
                    <h2>Track, Automate, Optimtize</h2>
                </div>
                <CardContainer>
                    <Card color="white">
                        <h1>pool</h1>
                        <p>One place to manage all your finances</p>
                        <Link href="/about">
                            <a>learn more</a>
                        </Link>
                    </Card>
                    <Card color="orange">
                        <h1>Do everything with POOL!</h1>
                        <ul>
                            <li>Track your spending</li>
                            <li>Create saving goals</li>
                            <li>Invest your money</li>
                        </ul>
                    </Card>
                </CardContainer>
            </div>
        </Layout>
    );
}
