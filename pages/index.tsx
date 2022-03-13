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

export default function Home() {
    return (
        <Layout route="/">
            <div className={styles.container}>
                <CardContainer>
                    <Card color="darkblue">
                        <div style={{ width: '50%' }}>
                            <Drop color="white" />
                        </div>
                    </Card>
                    <Card>
                        <h1>
                            Welcome to <a style={{ color: 'blue' }}>POOL</a>!
                        </h1>
                        <div style={{ height: '10%' }} />
                        <p>We're currently working on bringing you</p>
                        <h2>
                            the <a style={{ color: 'orange' }}>only</a> finance
                            app
                        </h2>
                        <p>you'll ever need</p>
                        <div style={{ height: '10%' }} />
                        <h2>
                            Interested in our{' '}
                            <a style={{ color: 'green' }}>progress</a>?
                        </h2>
                        <p>Join our email list!</p>
                        <EmailInput />
                    </Card>
                </CardContainer>
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
