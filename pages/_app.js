import Header from '../components/Header/Header';
import Background from '../components/Main/Background/Background';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="relative flex justify-center">
                <Background />
                <div className="absolute z-50">
                    <Header />
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    );
}

export default MyApp;
