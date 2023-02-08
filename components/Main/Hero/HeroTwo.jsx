import Image from 'next/image';
import React from 'react';
import heroEllipse from '/public/others/hero-ellips.png';
import heroEllipseTwo from '/public/others/hero-ellips-2.png';
import bgImage from '/public/others/hero-ellips-bg.png';
import heroImage from '/public/hero-image.png';
import styles from './Hero.module.css';
import icon1 from '/public/icons/dancer-motion.png';

const HeroTwo = () => {
    return (
        <div className="hero-two mt-10 lg:mt-0">
            <div className="flex justify-center">
                <div className="grid relative px-5 md:px-0">
                    <div className="justify-self-center flex items-end">
                        <div className="relative z-30 lg:ml-16 ml-10">
                            <Image
                                className={`${styles.heroImage}`}
                                src={heroImage}
                                alt="ellipse-2"
                            />
                        </div>
                        <div className="absolute z-20">
                            <Image
                                className={`${styles.bgImage}`}
                                src={bgImage}
                                alt="ellipse-1"
                            />
                        </div>
                        <div
                            style={{ marginLeft: '-5px' }}
                            className="absolute z-10 mb-10"
                        >
                            <Image
                                className={`${styles.heroEllipseTwo}`}
                                src={heroEllipseTwo}
                                alt="ellipse-2"
                            />
                        </div>
                        <div className="absolute z-0">
                            <Image
                                className={`${styles.heroEllipse}`}
                                src={heroEllipse}
                                alt="ellipse-1"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute z-50">
                    <div
                        className={`${styles.allPart} grid grid-cols-2 place-content-between items-center`}
                    >
                        <div className={`${styles.partOne}`}>
                            <div className="bg-white flex items-center rounded-lg h-20 w-32 sm:w-44 md:w-52 float-left">
                                <div className="icon-round flex items-center py-3 px-2 sm:px-3 md:px-6 gap-2 md:gap-5">
                                    <div
                                        style={{
                                            background:
                                                'linear-gradient(45deg, #F8A422 13.75%, #FEDEAC 92.08%)',
                                        }}
                                        className={`${styles.iconRound} p-2 md:p-3`}
                                    >
                                        <Image
                                            src={icon1}
                                            width={50}
                                            height={50}
                                            alt="icon1"
                                        />
                                    </div>
                                    <div className="">
                                        <h2 className="text-base font-bold font-poppins">
                                            150+
                                        </h2>
                                        <p className={styles.iconText}>
                                            Members
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.partTwo}`}>
                            <div
                                style={{
                                    background:
                                        'linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)',
                                }}
                                className={`${styles.iconRound} p-2 md:p-3 float-right`}
                            >
                                <Image
                                    src={icon1}
                                    width={50}
                                    height={50}
                                    alt="icon1"
                                />
                            </div>
                        </div>
                        <div className={`${styles.partThree}`}>
                            <div
                                style={{
                                    background:
                                        'linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)',
                                }}
                                className={`${styles.iconRound} p-2 md:p-3`}
                            >
                                <Image
                                    src={icon1}
                                    width={50}
                                    height={50}
                                    alt="icon1"
                                />
                            </div>
                        </div>
                        <div className={`${styles.partFour}`}>
                            <div className="bg-white rounded-lg w-36 sm:w-48 md:w-44 lg:w-44 xl:w-52 ">
                                <div className="py-3 px-0 md:px-6 gap-5 text-center">
                                    <div className="bg-violet-700 h-10 w-10 sm:h-16 sm:w-16 rounded-full mx-auto" />
                                    <div className="mt-3">
                                        <h2 className="text-sm sm:text-base font-bold font-poppins">
                                            Zaqky Simorang
                                        </h2>
                                        <p className={styles.iconText}>
                                            Trainer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroTwo;
