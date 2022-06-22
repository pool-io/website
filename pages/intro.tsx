import React, { useEffect } from 'react';
import Layout from '@components/Layout';
import { DropBottom, LogoTop } from '@components/Drop';

function useScrollPosition(): number {
    const [scrollPostion, setScrollPosition] = React.useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPostion;
}

function Drop() {
    return (
        <svg
            height={100}
            width={100}
            viewBox="0 0 1000 1000"
            // style={{ background: 'wheat' }}
        >
            <path
                // d="M50 10 L70 50 L50 90 L30 50 Z"
                // d="M50 10 L70 50 Q82 75 50 90 Q18 75 30 50 Z"
                d="M500 100 L700 450   Q900 820  500 845   Q100 820    300 450 Z"
                fill="#5FCCE4"
                stroke="white"
                strokeWidth="40"
            />
        </svg>
    );
}

type TextProps = {
    start: number;
    limit: number;
    children: React.ReactNode;
};

function Text(props: TextProps) {
    const y = useScrollPosition();

    if (y > props.limit) {
        return (
            <div
                style={{
                    opacity: 0
                }}
            >
                {props.children}
            </div>
        );
    }
    if (y < props.start) {
        return <div>{props.children}</div>;
    }

    return (
        <div
            style={{
                opacity: 1 - (y - props.start) / (props.limit - props.start)
            }}
        >
            {props.children}
        </div>
    );
}

type SignInDropProps = {
    start: number;
    end: number;
    margin: number;
};

function SignInDrop(props: SignInDropProps) {
    const y = useScrollPosition();

    function calcPoolHeight(): string {
        return `${
            y < props.start
                ? 100
                : y > props.end
                ? props.margin
                : 100 * (1 - (y - props.start) / (props.end - props.start)) +
                  props.margin
        }%`;
    }

    console.log(`[SignInDrop] height: ${calcPoolHeight()}`);

    return (
        <CenterCard>
            <div style={{ background: 'black' }}>
                <svg
                    height="100vh"
                    width="100vw"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMin"
                >
                    <svg
                        x="25%"
                        y={calcPoolHeight()}
                        height="50%"
                        width="50%"
                        viewBox="0 0 1000 1000"
                        preserveAspectRatio="xMidYMin"
                    >
                        <DropBottom />
                    </svg>
                    <svg
                        x="45%"
                        y="0"
                        height="30%"
                        width="10%"
                        viewBox="0 0 10000 10000"
                        preserveAspectRatio="xMidYMin"
                    >
                        <LogoTop color="blue" />
                    </svg>
                </svg>
            </div>
        </CenterCard>
    );
}

type CenterCardProps = {
    children: React.ReactNode;
};

function CenterCard(props: CenterCardProps) {
    return (
        <div
            style={{
                position: 'sticky',
                top: '40vh'
            }}
        >
            {props.children}
        </div>
    );
}

export default function Intro() {
    return (
        <div
            style={{
                background: 'black',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    height: '300vh',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        marginTop: '30vh',
                        padding: 100,
                        color: 'white'
                    }}
                >
                    <Text start={100} limit={300}>
                        <h1>oh hey</h1>
                    </Text>
                </div>
                <CenterCard>
                    <SignInDrop start={200} end={500} margin={30} />
                </CenterCard>
            </div>
            <div
                style={{
                    background: 'white',
                    height: '30vh',
                    width: '100vw',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h1 style={{ margin: 100, color: 'black' }}>footer</h1>
                {/* <CenterCard>
                    <Drop />
                </CenterCard> */}
            </div>
        </div>
    );
}
