const cardImages = [
    "/images/Keyfocusarea1.png",
    "/images/keyfocusarea2.png",
    "/images/livelihood.png"
];
const desktopBanners = [
    "/images/slider1.png",
    "/images/slider3.png",
    "/images/slider4.png",
    "/images/tagline.png",
];

const mobileBanners = [
    "/images/slider1-res.png",
    "/images/slider3-res.png",
    "/images/slider4-res.png",
];


//headings data 
const headingsections = [

    { title: "Key Focus Area" },
    { title: "Our Reach" },
    { title: "Supporting SDG's" },
    { title: "Serving the understand" },
    { title: "Insights and stories" },
    { title: "Engagement With Changemaker" },
    { title: "Key Implementing Partners" },
    { title: "Funding Partner" },

];

// slider data 

const sliderData = [
    {
        mainHeading: "Enhancing Well Being of Communities",
        subHeading: "Through Mentoring and Capacity Building in",
        sliderText: {
            first: "Healthcare",
            second: "Education",
            third: "Livelihood"
        },
        paragraph: "Our comprehensive approach encompasses healthcare, education, livelihood, and support for the achievement of the Sustainable Development Goals (SDGs)."


    }
]


export const cardData = {
    homecards: [
        {
            heading: "Healthcare",
            paragraph: "Every year, millions of people across India die of preventable and curable diseases. This happens because healthcare providers in their communities lack the knowledge and expertise needed to address these conditions.",
            buttonLink: "/healthcare",
            imageUrl: cardImages[0],
            buttontxt: "Know More"
        },
        {
            heading: "Education",
            paragraph: "ECHO India's interventions in education focus on upskilling, motivation and mentorship of teachers and school leaders for better learning outcomes and enhancing culture in educational institutions.",
            buttonLink: "/education",
            imageUrl: cardImages[1],
            buttontxt: "Know More"
        },
        {
            heading: "Livelihood",
            paragraph: "In sync with its roots in healthcare, ECHO India's alignment with Livelihood and other SDGs underscores a holistic approach towards addressing social determinants of health (SDHs).",
            buttonLink: "/404",
            imageUrl: cardImages[2],
            buttontxt: "Know More"
        }
    ]
};


export default {
    desktopBanners,
    mobileBanners,
    headingsections,
    sliderData,
    cardData,
    cardImages
}



