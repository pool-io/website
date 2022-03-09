import style from './random.module.css'
import Link from 'next/link'
import Button from '../components/button'

export default function Random() {
    return (
        <div className={style.container}>
            <div className={style.button}>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
            <Button
                title="hello"
                link="/"
                color="orange"
            />
           <Button
                title="yellow"
                link="/about"
                color="yellow"
           />
        </div>
    )
}