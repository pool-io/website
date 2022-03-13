import styles from './email.module.css';
import { FormEvent, FormEventHandler } from 'react';

export default function EmailInput() {
    const onSubmit: FormEventHandler = (e: FormEvent) => {
        console.log('submitted');
        e.preventDefault(); // default reloads
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input type="text" name="email" placeholder="email" />
            <input type="submit" name="email" value="submit" />
        </form>
    );
}
