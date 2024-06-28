import React from 'react';
import styles from '../../styles/contact2.module.css'
import {HomeOutlined, MinusOutlined} from "@ant-design/icons";
import Information from "@/components/contact/Information";
import Register from "@/components/contact/Registreishn";

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <img className={styles.imgMain} src="12.png" alt=""/>
                <div className={styles.overline}>
                    <div>
                        <h1>Contact</h1>
                            <ul>
                                <li className={styles.home}><HomeOutlined/> Tourigo</li>
                                <li><MinusOutlined/> </li>
                                   <li> Contact</li>
                            </ul>
                    </div>
                </div>
            </div>
            <Information/>
            <Register/>
        </div>
    );
};

export default Contact;