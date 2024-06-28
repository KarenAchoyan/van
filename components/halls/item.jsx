import React from 'react';
import styles from "@/styles/Halls.module.css";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
            <img src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
                 alt=""/>
            <p>սրահ` 300-350</p>
        </div>
    );
};

export default Item;