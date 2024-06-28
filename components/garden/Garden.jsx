import React from 'react';
import styles from '../../styles/Garden.module.css'
import {Image} from "antd";

const Garden = () => {
    return (
        <div className={styles.container}>
            <div className={` ${styles.headerForMobile} ${styles.images}`}>
                <h1>VAN GARDEN</h1>
                <p>ԲԱՐԻ ԳԱԼՈՒՍՏ ՄԵՐ ԱՅԳԻ</p>
            </div>
            <div className={styles.items}>

                <div className={styles.images}>
                    <Image
                        preview={true}
                        src="https://w0.peakpx.com/wallpaper/796/535/HD-wallpaper-garden-restaurant-parasols-restaurant-grass-garden-lake.jpg"
                        alt=""/>
                </div>
                <div className={styles.images}>
                    <Image
                        preview={true}
                        src="https://thumbs.dreamstime.com/b/outdoor-restaurant-over-tuscan-landscape-san-gimignano-81872006.jpg"
                        alt=""/>
                </div>
                <div className={styles.images}>
                    <Image
                        preview={true}
                        src="https://www.shutterstock.com/shutterstock/photos/477436030/display_1500/stock-photo-exterior-of-restaurant-with-relax-natural-green-garden-477436030.jpg"
                        alt=""/>
                </div>
                <div className={styles.images}>
                    <Image
                        preview={true}
                        src="https://jacoblund.com/cdn/shop/products/photo-id-2002712854597-aerial-view-of-garden-restaurant-table.jpg?v=1563839918"
                        alt=""/>
                </div>
                <div className={` ${styles.info} ${styles.images}`}>
                    <h1>VAN GARDEN</h1>
                    <p>ԲԱՐԻ ԳԱԼՈՒՍՏ ՄԵՐ ԱՅԳԻ</p>
                </div>
                <div className={styles.images}>
                    <Image src="https://img.freepik.com/premium-photo/dining-table-setting-food-concept_53876-70586.jpg"
                           preview={true}
                           alt=""/>
                </div>
                <div className={styles.images}>
                    <Image src="https://i.imgur.com/0szdgHb.jpg"
                           preview={true}
                           alt=""/>
                </div>
                <div className={styles.images}>
                    <Image
                        src="https://en.idei.club/uploads/posts/2023-05/thumbs/1685456321_en-idei-club-p-outside-garden-restaurant-dizain-pinterest-32.jpg"
                        preview={true}
                        alt=""/>
                </div>
                <div className={styles.images}>
                    <Image
                        preview={true}
                        src="https://c8.alamy.com/compfr/rydwnw/le-restaurant-italien-typique-en-toscane-avec-des-tables-en-bois-couverte-pergola-toit-couvert-de-vigne-avec-des-sieges-vides-chaises-et-personne-de-romant-rustique-rydwnw.jpg"
                        alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Garden;