import style from './card.module.css';
import Link from 'next/link';
import React from 'react';

export type CardProps = {
    children: React.ReactNode;
};

export default function Card(props: CardProps) {
    return <div className={style.card}>{props.children}</div>;
}
