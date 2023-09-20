import React from 'react';

//Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper";
import { m } from "framer-motion";

//Components
// import Header, { CollapsibleMenu, hamburgerMenu, headerNav } from '../../Components/Header';
import SideButtons from "../../Components/SideButtons";

const CreativeAgencyPage = (props) => {
    return (
        <div className="pl-[290px] md:pl-0 bg-[#101010] overflow-hidden" style={props.style}>
            <SideButtons />
        </div>
    )
}

export default CreativeAgencyPage;