import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Gym Baran</title>
                <meta
                    name="description"
                    content="A gym is a place where people go to exercise and improve their physical fitness."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <h1>Gym Baran</h1>
            </header>
            <main>
                <h2>
                    A gym is a place where people go to exercise and improve
                    their physical fitness.
                </h2>
            </main>
        </div>
    );
}
