import React from 'react';
import styles from '../../styles/Information.module.css'
import {EnvironmentOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
const Information = () => {
    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <div className={styles.item}>
                    <div className={styles.call}>
                        <PhoneOutlined/>
                    </div>
                    <div className={styles.callText}>
                        <ul>
                            <li>Հեռախոս</li>
                            <li>+374 (98)-77-11-12</li>
                            <li>+374 (77)-77-11-12</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.call}>
                        <MailOutlined/>
                    </div>
                    <div className={styles.callText}>
                        <ul>
                            <li>Էլեկտրոնային հասցե</li>
                            <li>support@tourigo.com</li>
                            <li>support@tourigo.com</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.call}>
                        <EnvironmentOutlined/>
                    </div>
                    <div className={styles.callText}>
                        <ul>
                            <li>Մեր հասցեն</li>
                            <li>1426 Կենտրոն </li>
                            <li>97702, Քաղաք Էջմիացին</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;