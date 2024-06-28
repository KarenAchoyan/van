import React from 'react';
import styles from "@/styles/Food.module.css";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
            <img
                src="https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg"
                alt=""/>
        </div>
    );
};

export default Item;