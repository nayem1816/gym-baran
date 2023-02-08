import React from 'react';
import styles from './Background.module.css';

const Background = () => {
    return (
        <>
            <div className={`${styles.backgroundOne} absolute z-10`}></div>
            <div className={`${styles.backgroundTwo} absolute z-20`}></div>
            <div className={`${styles.backgroundThree} absolute z-30`}></div>
        </>
    );
};

export default Background;
