import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Gym Baran</title>
                <meta
                    name="description"
                    content="A gym is a place where people go to exercise and improve their physical fitness."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main></main>
        </div>
    );
}
