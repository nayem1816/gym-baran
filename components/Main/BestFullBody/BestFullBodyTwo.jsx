import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import styles from './BestFillBody.module.css';

const BestFullBodyTwo = () => {
    return (
        <div>
            <h2
                style={{ color: '#262524' }}
                className={`${styles.heroHeading} leading-normal lg:leading-loose`}
            >
                Best full body <br /> workout to lose fat
            </h2>
            <p className="mt-5 heroText">
                Exercise is a very important need for our body. Health and
                fitness will be obtained if you can do regular exercise and run
                a healthy routine. Even at home we still have to be diligent in
                exercising, either alone or with your friends at home.
            </p>
            <button className="btn flex py-3 px-8 gap-8 items-center text-white bg-secondary mt-5">
                <span>Get started</span>
                <span className="">
                    <BsArrowRight className="" />
                </span>
            </button>
        </div>
    );
};

export default BestFullBodyTwo;
