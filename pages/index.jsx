import Head from 'next/head';
import BestFullBody from '../components/Main/BestFullBody/BestFullBody';
import HealthyInSide from '../components/Main/HealthyInSide/HealthyInSide';
import Hero from '../components/Main/Hero/Hero';
import StaticBar from '../components/Main/StaticBar/StaticBar';

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
            <main className="">
                <Hero />
                <HealthyInSide />
                <StaticBar />
                <BestFullBody />
            </main>
        </div>
    );
}
