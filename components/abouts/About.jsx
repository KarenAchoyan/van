import React from 'react';
import styles from '../../styles/About.module.css'
const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.logos}>
                <img src="logo-main.png" alt=""/>
            </div>
            <div className={styles.biography}>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. !</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur culpa impedit minus molestiae nam quae repellat ut! Consectetur eveniet incidunt non quam reiciendis vero voluptatibus. At mollitia optio quo?</p>
            </div>
        </div>
    );
};

export default About;