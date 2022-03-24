import styles from './index.module.css';
import Link from 'next/link';
import Layout from '@components/layout';
import Card from '@components/card';
import Drop from '@components/svg/drop';
import EmailInput from '@components/input/email';
import useIsMobile from '@components/utils/useIsMobile';
import * as CSS from 'csstype';
import React, { ReactNode, useEffect, useState } from 'react';

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

function MainCard() {
    const isMobile = useIsMobile();

    type Elastic = {
        fontSize: number;
        subtitle: ReactNode;
    };
    const ELASTIC_DESKTOP: Elastic = {
        fontSize: 100,
        subtitle: (
            <h1 style={{ color: '#f0f0f0' }}>
                THE <a style={{ color: 'orange' }}>ONE</a> PLACE TO MANAGE ALL
                YOUR FINANCES
            </h1>
        )
    };
    const ELASTIC_MOBILE: Elastic = {
        fontSize: 70,
        subtitle: (
            <>
                <h1 style={{ color: '#f0f0f0' }}>
                    THE <a style={{ color: 'orange' }}>ONE</a> PLACE{' '}
                </h1>
                <h1 style={{ color: '#f0f0f0' }}>TO MANAGE</h1>
                <h1 style={{ color: '#f0f0f0' }}> ALL YOUR FINANCES</h1>
            </>
        )
    };
    const [elastic, setElastic] = useState<Elastic>(ELASTIC_DESKTOP);
    useEffect(() => {
        if (isMobile) {
            setElastic(ELASTIC_MOBILE);
        } else {
            setElastic(ELASTIC_DESKTOP);
        }
    }, [isMobile]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundImage: 'linear-gradient(#f0f0f0,#1975d3)'
            }}
        >
            <h1 style={{ fontSize: elastic.fontSize }}>
                <a style={{ color: '#50a8c5' }}>POOL</a>
                FOLIO
            </h1>
            {elastic.subtitle}
            <div style={{ height: 10 }} />
            <h2 style={{ color: '#f0f0f0' }}>Track. Automate. Optimize.</h2>
            <div style={{ height: 30 }} />
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
                <MainCard />
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
