import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/learn">
        <a>Learn</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/signin">
        <a>Sign In</a>
      </Link>
    </div>
  );
}
