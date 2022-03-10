import style from './card.module.css';
import Link from 'next/link';

export type CardProps = {
    title: string;
    color: string;
};

export default function Card(props: CardProps) {
    return (
        <div className={style.card} style={{ background: props.color }}>
            <Link href={props.link}>
                <a>{props.title}</a>
            </Link>
        </div>
    );
}
