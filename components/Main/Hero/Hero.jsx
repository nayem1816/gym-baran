import React from 'react';
import HeroOne from './HeroOne';
import HeroTwo from './HeroTwo';

const Hero = () => {
    return (
        <div className="container mx-auto px-4 mt-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-stretch">
                <div className="flex">
                    <HeroOne />
                </div>
                <div className="">
                    <HeroTwo />
                </div>
            </div>
        </div>
    );
};

export default Hero;
