import React from 'react';
import BestFullBodyOne from './BestFullBodyOne';
import BestFullBodyTwo from './BestFullBodyTwo';

const BestFullBody = () => {
    return (
        <div className="my-20">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                    <div className="flex justify-center">
                        <BestFullBodyOne />
                    </div>
                    <div className="">
                        <BestFullBodyTwo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestFullBody;
