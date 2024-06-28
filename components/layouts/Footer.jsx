import React from 'react';
import styles from '../../styles/Footer.module.css';
import {FacebookFilled, InstagramFilled, LinkedinFilled} from "@ant-design/icons";
import About from "@/components/abouts/About";
const Footer = () => {
    return (
        <div>
            <div className={styles.footerContainer}>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <div className={styles.logos}>
                            <img src="logo-main.png" alt=""/>
                        </div>
                        <div className={styles.text}>
                            <p>hhhfiouw qujwqomief crjiwpiowp fufiosdjhvkj cjosa90iq wekjqioasui9w hyoi</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <ul>
                            <li>Մեր մասին</li>
                            <li>Գլխավոր</li>
                            <li>Մեր մասին</li>
                            <li>Մենյու</li>
                            <li>Կոնտաքտաին տվյալներ</li>

                        </ul>
                    </div>
                    <div className={styles.item}>
                        <ul>
                            <li>ՄԵՆՅՈՒ</li>
                            <li>Ֆիրմաին ուտեստներ</li>
                            <li>Ճաշատեսակներ</li>
                            <li>Ախցաններ</li>
                            <li>Խմորեղեններ</li>
                        </ul>
                    </div>
                    <div className={styles.item}>
                        <ul>
                            <li>FOLLOW</li>
                        </ul>
                        <div className={styles.icons}>
                            <FacebookFilled/>
                            <InstagramFilled/>
                            <LinkedinFilled/>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.footer}>
                <div className={styles.data}>
                    <p>2024-QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
                    <p><img src="gee.jpg" alt=""/></p>
                    <p> ԿԱՅՔԸ ՍՏԵՂԾՎԵԼԵ GeekLab ԸՆԿԵՐՈՒԹՅԱՆ ԿՈՂՄԻՑ</p>
                    <p>PRIVICE VAN GARDEN HALL</p>
                </div>
            </div>
        </div>
    )
        ;
};

export default Footer;