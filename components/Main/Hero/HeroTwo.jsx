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
        <div className="hero-two ">
            <div className="flex justify-center">
                <div className="grid relative">
                    <div className="justify-self-center flex items-end">
                        <div className="relative z-30 ml-16">
                            <Image
                                src={heroImage}
                                width={358}
                                height={580}
                                alt="ellipse-2"
                            />
                        </div>
                        <div className="absolute z-20">
                            <Image
                                className="ml-3"
                                src={bgImage}
                                width={427}
                                height={323}
                                alt="ellipse-1"
                            />
                        </div>
                        <div
                            style={{ marginLeft: '-5px' }}
                            className="absolute z-10 mb-10"
                        >
                            <Image
                                src={heroEllipseTwo}
                                width={393}
                                height={453}
                                alt="ellipse-2"
                            />
                        </div>
                        <div className="absolute z-0">
                            <Image
                                className="mt-32"
                                src={heroEllipse}
                                width={434}
                                height={434}
                                alt="ellipse-1"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute z-50 mt-20">
                    <div className="grid grid-cols-2 items-center">
                        <div className="part-one mr-20">
                            <div className="bg-white flex items-center rounded-lg h-20 w-52 float-left">
                                <div className="icon-round flex items-center py-3 px-6 gap-5">
                                    <div
                                        style={{
                                            background:
                                                'linear-gradient(45deg, #F8A422 13.75%, #FEDEAC 92.08%)',
                                        }}
                                        className={`${styles.iconRound} py-3 px-5`}
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
                        <div className="part-two ml-48">
                            <div
                                style={{
                                    background:
                                        'linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)',
                                }}
                                className={`${styles.iconRound} p-3`}
                            >
                                <Image
                                    src={icon1}
                                    width={50}
                                    height={50}
                                    alt="icon1"
                                />
                            </div>
                        </div>
                        <div className="part-three ml-10 mt-64">
                            <div
                                style={{
                                    background:
                                        'linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)',
                                }}
                                className={`${styles.iconRound} p-3`}
                            >
                                <Image
                                    src={icon1}
                                    width={50}
                                    height={50}
                                    alt="icon1"
                                />
                            </div>
                        </div>
                        <div className="part-four mt-64 ml-28">
                            <div className="bg-white rounded-lg w-52">
                                <div className="py-3 px-6 gap-5 text-center">
                                    <div className="bg-violet-700 h-16 w-16 rounded-full mx-auto" />
                                    <div className="mt-3">
                                        <h2 className="text-base font-bold font-poppins">
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
