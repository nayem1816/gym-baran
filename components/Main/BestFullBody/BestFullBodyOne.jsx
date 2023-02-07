import React from 'react';
import Image from 'next/image';
import heroEllipse from '/public/others/hero-ellips.png';
import fullEllipseTwo from '/public/others/full-body-ellipes-2.png';
import vector35 from '/public/others/Vector35.png';
import fullBody from '/public/best-full-body-img.png';
import icon1 from '/public/icons/dancer-motion.png';

const BestFullBodyOne = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="grid relative">
                    <div className="justify-self-center flex items-end">
                        <div className="relative z-30">
                            <Image
                                src={fullBody}
                                width={416}
                                height={496}
                                alt="ellipse-2"
                            />
                        </div>
                        <div className="absolute z-20">
                            <Image
                                style={{ marginLeft: '-15px' }}
                                src={vector35}
                                width={427}
                                height={323}
                                alt="ellipse-1"
                            />
                        </div>
                        <div
                            style={{ marginLeft: '25px' }}
                            className="absolute z-10"
                        >
                            <Image
                                className="ml-8 mb-2"
                                src={fullEllipseTwo}
                                width={393}
                                height={453}
                                alt="ellipse-2"
                            />
                        </div>
                        <div className="absolute z-0">
                            <Image
                                className="mb-8 ml-8"
                                src={heroEllipse}
                                width={434}
                                height={434}
                                alt="ellipse-1"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute z-50 mt-14">
                    <div className="grid grid-cols-2">
                        <div className="part-two ml-36">
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
                        <div className="part-two flex justify-end mt-40">
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
                        <div className="part-one mt-14 mr-20">
                            <div className="bg-white flex items-center rounded-lg h-20 w-52 float-left">
                                <div className="icon-round flex items-center py-3 px-6 gap-5">
                                    <div
                                        style={{
                                            background:
                                                'linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)',
                                        }}
                                        className={`py-3 px-5 iconRound`}
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
