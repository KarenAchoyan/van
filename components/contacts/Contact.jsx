import React from 'react';
import styles from '../../styles/Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.parentiframe}>
            <iframe className={styles.iframs}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7040.497655953678!2d44.488487166349955!3d40.21119739292075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1719065235136!5m2!1sru!2sam"
                />
            <div className={styles.footers}>
                <div className={styles.continer}>
                    <div className={styles.item}>
                        <h2>Հեռախոս</h2>
                        <p>T. +374 77 00-00-00 </p>
                        <p>m. vanrestoran@mail.com</p>
                    </div>
                    <div className={styles.item}>
                        <h2>ՀԱՍՑԵ</h2>
                        <p>ԷՋՄԻԱԾԻՆ 24/24</p>
                        <p>21562. VAN GARDEN. ԷՋՄԻԱԾԻՆ</p>
                    </div>
                    <div className={styles.item}>
                        <h2>ԱՇԽԱՏԱՆՔԱԻՆ ԺԱՄԵՐ</h2>
                        <p>Աշղատանքաին ժամեր 9:00 00:00</p>
                        <p>Խոհանոցը Կփակվի 23:00</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;