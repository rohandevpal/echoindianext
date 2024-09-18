import React, { useEffect } from 'react';
import next from 'next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import homedata from '@/app/data/homedata';
import { SeperatorHeading } from '..';

const Cards = (props: { animation: any; }) => {
    //get cards Data
    const cardData = homedata.cardData.homecards;    
    const SeperatorTitle = homedata.headingsections
    
    return (
        <section className="key-focus-area bg-" >
            <SeperatorHeading title={SeperatorTitle[0].title} />
            <div className="container mx-auto p-4">
                <div className="row flex flex-wrap justify-center">
                    <div className="col-12">
                        <ul className="key-focus-area-list flex flex-wrap justify-center">
                            {cardData.map((el, index) => (
                                <li key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                                    <ul className="main-key-box bg-white rounded-lg shadow-md p-4">
                                        <li>
                                            <img src={el.imageUrl} alt={el.heading} className="w-full" />
                                        </li>
                                        <li>
                                            <h3 className="text-2xl font-bold px-0">{el.heading}</h3>
                                        </li>
                                        <li>
                                            <p className="text-lg px-0 py-3 h-52">{el.paragraph}</p>
                                        </li>
                                        <li>
                                            <a href={el.buttonLink} className="custom-button-main">{el.buttontxt}</a>
                                        </li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;