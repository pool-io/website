import style from './card.module.css';
import Link from 'next/link';
import React from 'react';

export type CardProps = {
    color?: string;
    children: React.ReactNode;
};

export default function Card(props: CardProps) {
    return (
        <div
            className={style.card}
            style={props.color ? { background: props.color } : null}
        >
            {props.children}
        </div>
    );
}
