"use client"

import React, { useState, useEffect } from "react";
import { useMediaQuery } from '@material-ui/core';
import AOS from 'aos';
import homed from "@/app/data/homedata";

const Slidermain = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            delay: 0,
            duration: 3000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery("(max-width: 768px)");


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const textElements = [
            document.getElementById('textMe'),
            document.getElementById('textMy'),
            document.getElementById('textOur')
        ];
    
        function updateTextColor() {
            textElements.forEach(el => {
                if (el) {  // Null check here
                    switch (currentIndex) {
                        case 0:
                            el.style.color = "#9D1D2B";
                            break;
                        case 1:
                            el.style.color = "#E88A00";
                            break;
                        case 2:
                            el.style.color = "Green";
                            break;
                        default:
                            break;
                    }
                }
            });
        }
    
        updateTextColor();
    }, [currentIndex]);
    
    const handleDotClick = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    return (
        <section className="mainBanner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <ul className="main-slider">
                            <li>
                                <div className="banner-content">
                                    <h2 id="banner-text-animated">Enhancing Well Being of Communities</h2>
                                    <h4>Through Mentoring and Capacity Building in</h4>
                                    <div className="slider-container-text-banner">
                                        <div className="slider-value" style={{ top: `-${currentIndex * 80}px` }}>
                                            <h1 className="header-animated-text" id="textMe">Healthcare</h1>
                                            <h1 className="header-animated-text" id="textMy">Education</h1>
                                            <h1 className="header-animated-text" id="textOur">Livelihood</h1>
                                        </div>
                                    </div>
                                    <p>Our comprehensive approach encompasses healthcare, education, livelihood, and support for the achievement of the Sustainable Development Goals (SDGs).</p>
                                    <img src={homed.desktopBanners[3]} alt="Moving knowledge not people" />
                                </div>
                            </li>
                            <li>
                                <div className="slider-main">
                                    <div className="slide active">
                                        <img src={isMobile ? homed.mobileBanners[currentIndex] : homed.desktopBanners[currentIndex]} alt="Banner" />
                                    </div>
                                    <div className="dots-container">
                                        {[0, 1, 2].map((index) => (
                                            <span
                                                key={index}
                                                className={`dot ${currentIndex === index ? 'active' : ''}`}
                                                onClick={() => handleDotClick(index)}
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slidermain;
