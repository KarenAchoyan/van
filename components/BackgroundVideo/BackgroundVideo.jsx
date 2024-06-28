import React from 'react';
import styles from '../../styles/Background.module.css'

const BackgroundVideo = () => {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.body_image} src="https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg" alt=""/>
            <div className={styles.overline}>
                <h1>ԼԱՎ ԺԱՄԱՆՑ VAN GAREN ՌԵՍՏՈՐԱՆՈՒՄ</h1>
            </div>
        </div>
    );
};

export default BackgroundVideo;