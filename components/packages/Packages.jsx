import React from 'react';
import Package from '@/components/ packages/Package'
import styles from '../../styles/Packages.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const Packages = () => {

    const arr = [
        {name: "ՓԱԹԵԹ-1", value: "8500AMD"},
        {name: "ՓԱԹԵԹ-2", value: "12000AMD"},
        {name: "ՓԱԹԵԹ-3", value: "15000AMD"},
        {name: "ՓԱԹԵԹ-4", value: "18000AMD"},
        {name: "ՓԱԹԵԹ-5", value: "20000AMD"},
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className={styles.container}>
            <h1>Փաթեթներ</h1>
            <p>Բոլոր փաթեթները հնարավորություն ունեն փոփոխման</p>
            <div className={styles.row}>
                <Slider {...settings}>
                    {
                        arr.map((item, index) => <Package key={index} item={item}/>)
                    }
                </Slider>
            </div>
        </div>

    );
};

export default Packages;