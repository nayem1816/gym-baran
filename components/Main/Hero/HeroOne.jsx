import Image from 'next/image';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import styles from './Hero.module.css';

const HeroOne = () => {
    return (
        <div className="hero-one self-end">
            <h2 className={styles.heroHeading}>
                Healthy in side <br />{' '}
                <span style={{ color: '#8382EB' }}>fresh</span> out side
            </h2>
            <p className={`${styles.heroText} lg:mr-32 mr-14 mt-6`}>
                Exercise is a very important need for our body. Health and
                fitness will be obtained if you can do regular exercise and run
                a healthy routine.
            </p>
            <div className="hero-btn flex items-center gap-5 mt-5">
                <button className="btn flex py-2 px-5 gap-3 md:gap-8 items-center text-white bg-secondary">
                    <span className="text-xs md:text-base">Get started</span>
                    <span className="">
                        <BsFillArrowRightCircleFill className="text-xs md:text-xl" />
                    </span>
                </button>
                <button className="btn flex py-2 px-5 gap-3 md:gap-8 items-center bg-white text-secondary">
                    <span className="">
                        <IoMdArrowDroprightCircle className="text-xs md:text-xl" />
                    </span>
                    <span className="text-xs md:text-base">Learn More</span>
                </button>
            </div>
            <div className="brands mt-10">
                <p className="font-poppins">Brands: </p>
                <div className="brand flex items-center gap-4 md:gap-8 mt-5">
                    <Image
                        className={`${styles.brandLogo1}`}
                        src="/logos/nike.png"
                        width={50}
                        height={30}
                        alt=""
                    />
                    <Image
                        className={`${styles.brandLogo2}`}
                        src="/logos/adidas.png"
                        width={50}
                        height={40}
                        alt=""
                    />
                    <Image
                        className={`${styles.brandLogo3}`}
                        src="/logos/puma.png"
                        width={60}
                        height={45}
                        alt=""
                    />
                    <Image
                        className={`${styles.brandLogo4}`}
                        src="/logos/reebok.png"
                        width={100}
                        height={70}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroOne;
