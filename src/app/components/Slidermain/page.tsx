"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useMediaQuery } from "@material-ui/core";
import AOS from "aos";
import homed from "@/app/data/homedata";

const sliderData = homed.sliderData[0];

const Slidermain = () => {
//   useEffect(() => AOS.init({ offset: 200, delay: 0, duration: 3000, easing: "ease-in-out", once: true }), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % 3), 3000);
    return () => clearInterval(interval);
  }, []);

  const colors = useMemo(() => ["#9D1D2B", "#E88A00", "Green"], []);

  // Define valid keys explicitly
  const textKeys: Array<keyof typeof sliderData.sliderText> = ["first", "second", "third"];

  return (
    <section className="mainBanner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <ul className="main-slider">
              <li>
                <div className="banner-content">
                  <h2>{sliderData.mainHeading}</h2>
                  <h4>{sliderData.subHeading}</h4>
                  <div className="slider-container-text-banner">
                    <div className="slider-value" style={{ top: `-${currentIndex * 80}px` }}>
                      {textKeys.map((key) => (
                        <h1 key={key} className="header-animated-text" style={{ color: colors[currentIndex] }}>
                          {sliderData.sliderText[key]}
                        </h1>
                      ))}
                    </div>
                  </div>
                  <p>{sliderData.paragraph}</p>
                  <img src={homed.desktopBanners[3]} alt="Moving knowledge not people" />
                </div>
              </li>
              <li>
                <div className="slider-main">
                  <img src={isMobile ? homed.mobileBanners[currentIndex] : homed.desktopBanners[currentIndex]} alt="Banner" />
                  <div className="dots-container">
                    {[0, 1, 2].map((index) => (
                      <span key={index} className={`dot ${currentIndex === index ? "active" : ""}`} onClick={() => setCurrentIndex(index)}></span>
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
};

export default Slidermain;
