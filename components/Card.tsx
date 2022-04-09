import React from 'react';

export type CardProps = {
    color?: string;
    children: React.ReactNode;
};

export default function Card(props: CardProps) {
    return (
        <div
            style={{
                flex: 1,

                display: 'flext',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: props.color ? props.color : 'beige'
            }}
        >
            {props.children}
        </div>
    );
}
