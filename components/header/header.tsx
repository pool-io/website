import styles from './header.module.css';
import Link from 'next/link';

type TabProps = {
    title: string;
    url: string;
};

function Tab(props: TabProps) {
    return (
        <Link href={props.url}>
            <div className={styles.tab}>
                <a>{props.title}</a>
            </div>
        </Link>
    );
}

export default function Header() {
    return (
        <div className={styles.header}>
            <Tab title="Home" url="/" />
            <Tab title="Learn" url="/learn" />
            <Tab title="Blog" url="/blog" />
            <Tab title="About" url="/about" />
            <Tab title="Sign In" url="/signin" />
        </div>
    );
}
