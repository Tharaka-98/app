import React from 'react';

//Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper";
import { m } from "framer-motion";

//Components
import Header, { CollapsibleMenu, HamburgerMenu, HeaderNav } from '../../Components/Header';
import Buttons from '../../Components/Button/Buttons';
import SideButtons from "../../Components/SideButtons";
import ReactCustomScrollbar from '../../Components/ReactCustomScrollbar';

const CreativeAgencyPage = (props) => {
    return (
        <div className="pl-[290px] md:pl-0 bg-[#101010] overflow-hidden" style={props.style}>
            <SideButtons />
            {/* Header Start */}
            <Header topSpace={{ md: true}} type="pos-left" className="w-[290px] h-[100vh] z-10 md;w-full md:h-auto">
                <div className="flex justify-between flex-col h-full bg-[#101010] border-r border-[#ffffff1a] pt-20 px-8 overflow-hidden mt:pt-40 md:hidden">
                    <Col xs="auto" className="text-center leading-none">
                        <Link aria-label="header logo" to="/" className="inline-block leading-none">
                            <Navbar.Brand className="inline-block p-0-m-0">
                                <img className="default-logo" width="111" height="36" loading="lazy" src='/assests/img/webp/logo-copper-red-white.webp' data-rjs='/assests/img/webp/logo-copper-red-white.webp' alt='logo' />
                                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assests/img/webp/logo-copper-red-black.webp' data-rjs='/assests/img/webp/logo-copper-red-black.webp' alt='logo' />
                            </Navbar.Brand>
                        </Link>
                    </Col>
                    <Col xs="auto" className="p1-[15px] max-h-[calc(100%-160px)]">
                        <ReactCustomScrollbar className="!items-start" autoHide theme="light">
                            <div>
                                <CollapsibleMenu className="left-sidebar-menu w-full" theme="light" />
                            </div>
                        </ReactCustomScrollbar>
                    </Col>
                    <Col xs="auto" className="mb-20">
                        <div className="my-8">
                            <SocialIcons theme="social-icon-style-01" className="justify-center" size="sm" iconColor="light" data={iconData} />
                        </div>
                        <span className="block text-center text-xs text-spanishgray">&copy; {new Date().getFullYear()} Litho</span>
                    </Col>
                </div>

                {/* Mobile menu start */}
                <HeaderNav className="hiddem md:flex justify-between px-[30px] sm:pl-[15px]" bg="white" theme="light" containerClass="px-0">
                    <Link className="flex items-center justify-center" to="/">
                        <Navbar.Brand className="inline-block p-0 m-0">
                            <img src="/assets/img/webp/logo-copper-red-bloack@2x.webp" className="max-h-[36px]" alt="logo" />
                        </Navbar.Brand>
                    </Link>
                    <HamburgerMenu theme="dark" position="left" className="2-[290px] flex-col justify-end !top-[var(--header-height)]" closeBtn={false}>
                        <div className="bg-[#101010] px-8 pb-20" style={{ height: `calc(100vh - var(--header-height))` }}>
                            <ReactCustomScrollbar autoHide className="p1-[15px] mt-[50px] !items-start">
                                <div>
                                    <CollapsibleMenu className="w-full left-sidebar-menu" theme="light" />
                                    <div className="mt-[60px]">
                                        <SocialIcons theme="social-icon-style-01" className="justify-center mb-8 text-center" size="sm" iconColor="light" data={iconData} />
                                        <span className="block text-center text-xs mb-[165px] text-spanishgray">&copy; {new Date().getFullYear()} LITHO</span>
                                    </div>
                                </div>
                            </ReactCustomScrollbar>
                        </div>
                    </HamburgerMenu>
                </HeaderNav>
                {/* Mobile menu end */}
            </Header>
            {/* Header End */}
        </div>
    )
}

export default CreativeAgencyPage;