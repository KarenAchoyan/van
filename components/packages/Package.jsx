import React from 'react';
import styles from "../../styles/Packages.module.css"

const Package = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.header}>
               <h3> Փաթեթ 1</h3>
            </div>
            <div className={styles.body}>
                <ul>
                    <li>
                        <p>Grilled octopus</p>
                        <p>Rocotta, Macota, Salama, salata</p>
                    </li>
                    <li>
                        <p>Grilled octopus</p>
                        <p>Rocotta, Macota, Salama, salata</p>
                    </li>
                    <li>
                        <p>Grilled octopus</p>
                        <p>Rocotta, Macota, Salama, salata</p>
                    </li>
                    <li>
                        <p>Grilled octopus</p>
                        <p>Rocotta, Macota, Salama, salata</p>
                    </li>
                    <li>
                        <p>Grilled octopus</p>
                        <p>Rocotta, Macota, Salama, salata</p>
                    </li>
                </ul>
            </div>
            <div className={styles.footer}>
               <h3> 8500 դրամ</h3>
            </div>
        </div>
    );
};

export default Package;