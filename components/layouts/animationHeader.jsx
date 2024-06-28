import React from 'react';
import Header from "@/components/layouts/Header";
import styles from '../../styles/Header.module.css';

const AnimationHeader = ({show}) => {
    return (
        <div className={`${styles.animationHeader}`}>
            <Header show={show}/>
        </div>
    );
};

export default AnimationHeader;