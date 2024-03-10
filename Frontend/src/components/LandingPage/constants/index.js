import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Challenges" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];



export const products = [
    {
        imgURL: '/src/assets/images/refugee.png',
        name: "Refugee Crisis",
        price: "Provide essential supplies, shelter, and education for displaced populations",
    },
    {
        imgURL: '/src/assets/images/natural (1).jpeg',
        name: "Natural Disasters",
        price: "Support emergency response efforts, rebuilding communities, and disaster preparedness programs.",
    },
    {
        imgURL: '/src/assets/images/health.png',
        name: "Health Crisis",
        price: "Fund medical supplies, healthcare services, and public health education to combat diseases and pandemics",
    },
    {
        imgURL: '/src/assets/images/env (1).jpeg',
        name: "Environmental Crisis",
        price: "Contribute to conservation projects, sustainable practices, and advocacy for environmental protection.",
    },
];

export const services = [
    {
        imgURL: shieldTick,
        label: "AI-Guided Matching:",
        subtext: "Utilize AI algorithms to match donors with NGOs based on shared interests and causes, enhancing the impact of contributions.Donors input their preferences and values, and AI suggests NGOs and projects that align, facilitating meaningful connections."
    },
    {
        imgURL: shieldTick,
        label: "NGO Fundraising and Enrollment",
        subtext: "NGOs can leverage AI tools to streamline fundraising efforts, craft persuasive proposals, and maximize their fundraising potential.NGOs create profiles highlighting their mission and needs, and AI analyzes donor data to recommend potential matches, aiding in fundraising success."
    },
    {
        imgURL: shieldTick,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Harry Potter',
        
        feedback: "I was unsure how to make a meaningful impact with my donations until I found NGOConnect. Their AI-guided platform matched me with NGOs aligned with my values, making my contributions more impactful than ever before."
    },
    {
        imgURL: customer2,
        customerName: 'Emma Watson',
        
        feedback: "As an NGO, funding and proposal writing were always challenging. NGOConnect changed the game for us. Their AI tools simplified our fundraising efforts and helped us write compelling proposals, allowing us to focus more on our mission and less on administrative tasks"
    }
];


export const footerLinks = [
   
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@ngoconnect.com", link: "mailto:customer@ngoconnect.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];