import React from 'react';

//Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper";
import { m } from "framer-motion";

//Components
import Header, { CollapsibleMenu, HamburgerMenu, HeaderNav } from '../../Components/Header/Header';
// import Buttons from '../../Components/Button/Buttons';
import SideButtons from "../../Components/SideButtons";
import ReactCustomScrollbar from '../../Components/ReactCustomScrollbar';

const iconData = [
    {
        color: "cc754c",
        link: "https://www.facebook.com/",
        icon: "fab fa-facebook-f"
    },
    {
        color: "#cc754c",
        link: "https://www.instagram.com/",
        icon: "fab fa-instagram"
    },
    {
        color: "#cc754c",
        link: "https://www.twitter.com/",
        icon: "fab fa-twitter"
    },
    {
        color: "#cc754c",
        link: "https://www.dribbble.com/",
        icon: "fab fa-dribbble"
    }
]

const swiperData = [
    {
        img: "https://via.placeholder.com/1920×1160",
        firsttitle: "Browne",
        secondtitle: "coffee",
        link: "/portfolio/single-project-page-01"
    },
    {
        img: "https://via.placeholder.com/1920×1160",
        firsttitle: "Nature",
        secondtitle: "travel",
        link: "/portfolio/single-project-page-02"
    },
    {
        img: "https://via.placeholer.com/1920×1160",
        firsttitle: "Black",
        secondtitle: "shade",
        link: "/portfolio/single-project-page-03"
    }
]

const portfoliocolorfulData = [
    {
        title: "Mongolish",
        img: "https://via.placeholder.com/1000×817",
        category: [""],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-01",
        double_col: true
    },
    {
        title: "Masscoating",
        img: "https://via.placeholder.com/800×653",
        category: [""],
        subtitle: "Photography",
        link: "/portfolio/single-project-page-02"
    },
    {
        title: "Cortifiel",
        img: "https://via.placeholder.com/800×653",
        category: [""],
        subtitle: "Brochure",
        link: "/portfolio/single-project-page-03"
    },
    {
        title: "Everyday",
        img: "https://via.placeholder.com/1000×817",
        category: [""],
        subtitle: "Brochure",
        link: "/portfolio/single-project-page-04",
        double_col: true
    },
    {
        title: "Scandinavian",
        img: "https://via.placeholder.com/800×653",
        category: [""],
        subtitle: "Branding",
        link: "/portfolio/single-project-page-05"
    },
    {
        title: "The Simplest",
        img: "https://via.portfolio.com/800×653",
        category: [""],
        subtitle: "website",
        link: "/portfolio/single-project-page-01"
    }
]

const TestimonialsCarouselData = [
    {
        constent: "Absolute amazing theme, flexible and awesome design with possibilities. it's so easy to use and to customize. Simply the great design and best theme for wooCommerce",
        firstname: "Lindsay",
        lastname: "swanson",
        post: "creative director"
    },
    {
        content: "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy. I wanted to hire the best and after looking at several other companies.",
        firstname: "Jeremy",
        lastname: "dunont",
        post: "creative director"
    },
    {
        content: "This theme has a wide variety of options and a really good customer support. Some of the customization are limited but even so the theme still gives a lot of features while prioritizing web.",
        firstname: "Alexander",
        lastname: "harvard",
        post: "creative director"
    },
    {
        content: "I wanted to hire the best and after looking at several other companies, I knew jacob was the perfect guy. I wanted to hire the best and after looking at several other companies.",
        firstname: "Herman",
        lastname: "miller",
        post: "creative director"
    }
]

const CreativeAgencyPage = (props) => {
    return (
        <div className="pl-[290px] md:pl-0 bg-[#101010] overflow-hidden" style={props.style}>
            <SideButtons />
            {/* Header Start */}
           
            {/* Header End */}
        </div>
    )
}

export default CreativeAgencyPage;