import React from 'react';
import BestFullBodyOne from './BestFullBodyOne';
import BestFullBodyTwo from './BestFullBodyTwo';

const BestFullBody = () => {
    return (
        <div className="my-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                    <div className="flex justify-center order-last lg:order-1 mt-10 lg:mt-0">
                        <BestFullBodyOne />
                    </div>
                    <div className="order-1 lg:order-last">
                        <BestFullBodyTwo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestFullBody;
