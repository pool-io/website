import style from './button.module.css'
import Link from 'next/link'

export default function Button(props) {
    return (
        <div className={style.button} style={{background: props.color}}>
            <Link href={props.link}>
                <a>{props.title}</a>
            </Link>
        </div>
    )
}