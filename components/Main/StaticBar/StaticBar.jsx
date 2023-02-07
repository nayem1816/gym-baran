import Image from 'next/image';
import React from 'react';
import image1 from '/public/icons/Group.png';
import image2 from '/public/icons/dancer-balance-posture-on-one-leg.png';
import image3 from '/public/icons/dancer-motion.png';
import { BsArrowRightShort } from 'react-icons/bs';

const StaticBar = () => {
    return (
        <div className="mt-20">
            <div
                style={{
                    background:
                        'linear-gradient(87.05deg, #6462F0 0%, #9190E9 95.5%)',
                }}
                className="container mx-auto rounded-xl"
            >
                <div className="grid lg:grid-cols-3 grid-cols-1">
                    <div className="part-one flex gap-5 items-center py-10 px-14">
                        <div className="icon flex items-center justify-center w-24 h-24">
                            <div
                                style={{
                                    background: '#FFFFFF',
                                    opacity: '.2',
                                    backdropFilter: 'blur(32px)',
                                }}
                                className="relative rounded-lg w-24 h-24"
                            ></div>
                            <Image
                                className="absolute flex items-center justify-center"
                                src={image1}
                                width={50}
                                height={50}
                                alt="healthy"
                            />
                        </div>
                        <div className="text">
                            <h2 className="text-white font-bold font-poppins leading-7 tracking-wide text-xl">
                                Get that 11 line <br />
                                in 30 days
                            </h2>
                            <div className="flex items-center gap-5 mt-3">
                                <p className="text-white opacity-50	">
                                    Learn more
                                </p>
                                <BsArrowRightShort className="text-white opacity-50	" />
                            </div>
                        </div>
                    </div>
                    <div className="part-one flex gap-5 items-center py-10 px-14">
                        <div className="icon flex items-center justify-center w-24 h-24">
                            <div
                                style={{
                                    background: '#FFFFFF',
                                    opacity: '.2',
                                    backdropFilter: 'blur(32px)',
                                }}
                                className="relative rounded-lg w-24 h-24"
                            ></div>
                            <Image
                                className="absolute flex items-center justify-center"
                                src={image2}
                                width={50}
                                height={50}
                                alt="healthy"
                            />
                        </div>
                        <div className="text">
                            <h2 className="text-white font-bold font-poppins leading-7 tracking-wide text-xl">
                                14 Days
                                <br />
                                sherd challenge
                            </h2>
                            <div className="flex items-center gap-5 mt-3">
                                <p className="text-white opacity-50	">
                                    Learn more
                                </p>
                                <BsArrowRightShort className="text-white opacity-50	" />
                            </div>
                        </div>
                    </div>
                    <div className="part-one flex gap-5 items-center py-10 px-14">
                        <div className="icon flex items-center justify-center w-24 h-24">
                            <div
                                style={{
                                    background: '#FFFFFF',
                                    opacity: '.2',
                                    backdropFilter: 'blur(32px)',
                                }}
                                className="relative rounded-lg w-24 h-24"
                            ></div>
                            <Image
                                className="absolute flex items-center justify-center"
                                src={image3}
                                width={50}
                                height={50}
                                alt="healthy"
                            />
                        </div>
                        <div className="text">
                            <h2 className="text-white font-bold font-poppins leading-7 tracking-wide text-xl">
                                Get flat belly <br />
                                in 30 days
                            </h2>
                            <div className="flex items-center gap-5 mt-3">
                                <p className="text-white opacity-50	">
                                    Learn more
                                </p>
                                <BsArrowRightShort className="text-white opacity-50	" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticBar;
