import Layout from '@components/Layout';
import React, { useEffect } from 'react';
import Link from 'next/link';
import useWindowDimensions from '@hooks/useWindowDimensions';

type BubbleProps = {
    name?: string;
    x: number;
    y: number;
    children: React.ReactNode;
};

function Bubble(props: BubbleProps) {
    console.log(
        `[Bubble] props: { name: ${props.name}, x: ${props.x}, y: ${props.y} }`
    );

    const [position, setPosition] = React.useState({ x: props.x, y: props.y });
    const initial = React.useRef(null);

    useEffect(() => {
        console.log(`[Bubble] name: ${props.name} -- useEffect`);
        setPosition({ x: props.x, y: props.y });
    }, [props.x, props.y]);

    function handleOnDragStart(e: React.DragEvent<HTMLDivElement>) {
        // e.preventDefault();

        initial.current = {
            x: e.pageX,
            y: e.pageY
        };
    }
    function handleOnDragEnd(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();

        console.log(`clicked: ${e.type}`);

        // setPosition({ x: e.pageX, y: e.pageY });
        setPosition({
            x: position.x + (e.pageX - initial.current.x),
            y: position.y + (e.pageY - initial.current.y)
        });
    }

    console.log(
        `[Bubble] name: ${props.name} -- position: { x: ${position.x}, y: ${position.y} }`
    );

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: 'medium dashed black',
                borderRadius: 30,

                position: 'absolute',
                left: position.x,
                top: position.y,

                userSelect: 'none'
            }}
            onDragStart={(e) => handleOnDragStart(e)}
            onDragEnd={(e) => handleOnDragEnd(e)}
            draggable={true}
        >
            {props.children}
        </div>
    );
}

export default function Main() {
    const window = useWindowDimensions();

    const [windowWidth, setWindowWidth] = React.useState(window.width);
    const [windowHeight, setWindowHeight] = React.useState(window.height);

    useEffect(() => {
        setWindowWidth(window.width);
        setWindowHeight(window.height);
    }, [window]);

    function widthByPercent(percent: number) {
        return windowWidth * percent;
    }
    function heightByPercent(percent: number) {
        return windowHeight * percent;
    }

    console.log(
        `main window -- width: ${window.width} -- height: ${window.height}`
    );

    return (
        <Layout>
            <div
                style={{
                    height: '200vh',
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                    paddingTop: 100
                }}
            >
                <Bubble
                    name="sign-up"
                    x={window.width / 2}
                    y={windowHeight / 2}
                >
                    <Link href="/signup">
                        <h1>Sign Up</h1>
                    </Link>
                </Bubble>
                <Bubble x={NaN} y={200}>
                    <h1
                        style={{
                            margin: 30,
                            fontSize: 100
                        }}
                    >
                        POOL
                    </h1>
                </Bubble>
                <Bubble x={800} y={500}>
                    <ul
                        style={{
                            margin: 20,
                            fontSize: 30
                        }}
                    >
                        <li>Track all your money in one place</li>
                        <li>Automate the way your money moves</li>
                        <li>Better manage your money using predictions</li>
                    </ul>
                </Bubble>
            </div>
        </Layout>
    );
}
