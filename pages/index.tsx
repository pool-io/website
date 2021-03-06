import Link from 'next/link';
import Layout from '@components/Layout';
import Card from '@components/Card';
import useIsMobile from '@hooks/useIsMobile';
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
            style={{
                display: 'flex',
                flexDirection: flexDirection,
                height: height,
                width: '100%'
            }}
        >
            {props.children}
        </div>
    );
}

function MainCard() {
    function Subtitles() {
        return (
            <>
                <h1 style={{ color: '#f0f0f0' }}>
                    <a style={{ color: 'BLACK' }}>YOUR</a> PERSONAL FINANCE APP{' '}
                </h1>
                <h2 style={{ color: '#f0f0f0' }}>
                    Experience Financial Freedom
                </h2>
                <h2 style={{ color: '#f0f0f0' }}>
                    {' '}
                    With POOL, you'll be able to
                </h2>
            </>
        );
    }

    const isMobile = useIsMobile();

    type Elastic = {
        fontSize: number;
    };
    const ELASTIC_DESKTOP: Elastic = {
        fontSize: 100
    };
    const ELASTIC_MOBILE: Elastic = {
        fontSize: 70
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
                backgroundImage: 'linear-gradient(#f0f0f0,#1975d3)'
            }}
        >
            <h1 style={{ fontSize: elastic.fontSize }}>
                <a style={{ color: '#50a8c5' }}>POOL</a>
                FOLIO
            </h1>
            <Subtitles />
            <div style={{ height: 10 }} />
            <h2 style={{ color: '#f0f0f0' }}>Track. Automate. Optimize.</h2>
            <div style={{ height: 30 }} />
        </div>
    );
}

export default function Home() {
    useEffect(() => {
        // NOTE: phones for some reason pushes it up on load
        window.scrollTo(-10, 0);
    }, []);

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
                        <h1>Unify Your Finances</h1>
                        <p>
                            The money management solution that gives you the
                            tools to move your capital like never before
                        </p>
                        <Link href="/about">
                            <a>learn more</a>
                        </Link>
                    </Card>
                </CardContainer>
                <CardContainer>
                    <Card color="black">
                        <h1>Money Management Guide to the Future</h1>
                        <ul>
                            <li>Track your spending</li>
                            <li>Create saving goals</li>
                            <li>Invest your money</li>
                        </ul>
                    </Card>
                </CardContainer>
                <CardContainer>
                    <Card color="white">
                        <h1>Where Security matters as much as Privacy</h1>
                    </Card>
                </CardContainer>
            </div>
        </Layout>
    );
}
