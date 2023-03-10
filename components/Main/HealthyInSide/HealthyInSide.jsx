import React from 'react';
import styles from './HealthyInSide.module.css';

const HealthyInSide = () => {
    return (
        <div className="container mx-auto mt-20 px-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                <div className="title-section">
                    <h2
                        style={{ color: '#262524' }}
                        className={`${styles.heroHeading}`}
                    >
                        Healthy in side <br />
                        fresh out side
                    </h2>
                </div>
                <div className="text-body-section mt-5 lg:mt-0">
                    <p className="heroText">
                        Exercise is a very important need for our body. Health
                        and fitness will be obtained if you can do regular
                        exercise and run a healthy routine. Even at home we
                        still have to be diligent in exercising, either alone or
                        with your friends at home. Healthy life makes you more
                        excited to live the day
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HealthyInSide;
