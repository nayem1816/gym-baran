import React from 'react';
import Image from 'next/image';
import heroEllipse from '/public/others/hero-ellips.png';
import fullEllipseTwo from '/public/others/full-body-ellipes-2.png';
import vector35 from '/public/others/Vector35.png';
import fullBody from '/public/best-full-body-img.png';
import icon1 from '/public/icons/dancer-motion.png';
import styles from './BestFillBody.module.css';

const BestFullBodyOne = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="grid relative">
                    <div className="justify-self-center flex items-end">
                        <div className="relative z-30">
                            <Image
                                className={styles.fullBody}
                                src={fullBody}
                                alt="ellipse-2"
                            />
                        </div>
                        <div className="absolute z-20">
                            <Image
                                className={styles.vector35}
                                src={vector35}
                                alt="ellipse-1"
                            />
                        </div>
                        <div
                            style={{ marginLeft: '25px' }}
                            className="absolute z-10"
                        >
                            <Image
                                className={styles.fullEllipseTwo}
                                src={fullEllipseTwo}
                                alt="ellipse-2"
                            />
                        </div>
                        <div className="absolute z-0">
                            <Image
                                className={styles.heroEllipse}
                                // className="mb-8 ml-8"
                                src={heroEllipse}
                                alt="ellipse-1"
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.bodyTop} absolute z-50 mt-14`}>
                    <div className="grid grid-cols-2">
                        <div className={`${styles.partOne} ml-36`}>
                            <div
                                style={{
                                    background:
                                        'linear-gradient(35.49deg, #DD69C7 15.2%, #FFC0F3 87.25%)',
                                }}
                                className={`p-3 iconRound`}
                            >
                                <Image
                                    src={icon1}
                                    width={50}
                                    height={50}
                                    alt="icon1"
                                />
                            </div>
                        </div>
                        <div
                            className={`${styles.partTwo} flex justify-end mt-40`}
                        >
                            <div
                                style={{
                                    background:
                                        'linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)',
                                }}
                                className={`p-3 iconRound`}
                            >
                                <Image
                                    src={icon1}
                                    width={50}
                                    height={50}
                                    alt="icon1"
                                />
                            </div>
                        </div>
                        <div className={`${styles.partThree} mt-14 mr-20`}>
                            <div className="bg-white flex items-center rounded-lg h-20 w-44 md:w-52 float-left">
                                <div className="icon-round flex items-center py-3 px-3 md:px-6 gap-5">
                                    <div
                                        style={{
                                            background:
                                                'linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)',
                                        }}
                                        className={`py-3 px-3 md:px-5 iconRound`}
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
                                            800 kall
                                        </h2>
                                        <p className="text-xs heroText">
                                            Burn fat
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

export default BestFullBodyOne;
