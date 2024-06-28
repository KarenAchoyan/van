import React, {useEffect, useState} from 'react';
import styles from '../../styles/Header.module.css';
import {MenuOutlined} from "@ant-design/icons";

const Header = ({show = true}) => {

    return (
        <div className={`${styles.header}`} style={{top: show ? '0%' : '-20%'}}>
            <div className={styles.container}>
                <div className={styles.menus}>
                    <ul>
                        <li>ԳԼՂԱՎՈՐ</li>
                        <li>ՄԵՆՅՈՒ</li>
                        <li>ԷՋԵՐ</li>
                        <li>SHOP</li>
                        <li>LANDING</li>
                    </ul>
                </div>

                <div className={styles.mobileMenu}>
                    <MenuOutlined/>
                </div>
                <div className={styles.logos}>
                    <img src="logo-main.png" alt=""/>
                </div>
                <div className={styles.section}>
                    <button>Զանգահարել</button>
                </div>
            </div>
        </div>
    );
};

export default Header;