import React, { useEffect, useState, useContext, useRef, memo } from "react";

// Libraries
import * as Yup from "yup";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import {useScroll} from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Accordion, Container, Navbar } from "react-bootstrap";
import useOnClickOutside from "../../Functions/useOnClickOutside";

// Components
import { Input } from '../Form/Form'
import Buttons from '../../Button/Buttons';
import ReactCustomScrollbar from "../ReactCustomScrollbar";

// Context
import GlobalContext from "../../Context/Context";

// Data
import HeaderData from "./HeaderData";

// css
import "../Assets/scss/layouts/_header.scss"

/* Header Component Start */
export const Header = memo((props) => {
    // Add Global Header Data
    const { setHeaderHeight } = useContext(GlobalContext);
    const { scrollY } = useScroll();
    const [scrollPos, setScrollPos] = useState({
        y: 0,
        prevY: -1,
        directiondown: true,
    });
    const location = useLocation()

    useEffect(() => {
        let headerEl = document.querySelector("header");

        // Calculate header height
        function setTopSpace() {
            let windowWidth = window.innerWidth,
            headerheight = (props.topSpace.desktop && props.topSpace.desktop === true) ? headerEl.offsetHeight : 0;

            if (windowWidth <= 1199 && props.topSpace.lg) {
                headerheight = props.topSpace.lg === true ? headerEl.offsetHeight : 0;
            }

            if (windowWidth <= 991 && props.topSpace.md) {
                headerheight = props.topSpace.md === true ? headerEl.offsetHeight : 0;
            }

            if (windowWidth <= 767 && props.topSpace.sm) {
                headerheight = props.topSpace.sm === true ? headerEl.offsetHeight : 0;
            }

            if (windowWidth <= 575 && props.topSpace.xs) {
                headerheight = props.topSpace.xs === true ? headerEl.offsetHeight : 0;
            }

            setHeaderHeight(headerheight);
        }

        setTopSpace();

        window.addEventListener("load", setTopSpace);
        window.addEventListener("resize", setTopSpace);

        if (document.body.classList.contains("mobile-menu")) {
            document.body.classList.remove("navbar-collapse-show")
            document.body.classList.remove("menu-modern")
            document.body.classList.remove("menu-full")
            document.body.style.removeProperty("overflow");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    useEffect(() => {
        let lastScrollTop = 0;
        scrollY.onChange((pos) => {
            if (pos > lastScrollTop) {
                setScrollPos({
                    ...scrollPos,
                    y: pos,
                    prevY: pos - 1,
                    directionDown: true,
                });
        } else {
            setScrollPos({
                ...scrollPos, 
                y: pos,
                prevY: pos -1,
                directionDown: false,
            });
        }

        if (pos === 0) {
            setScrollPos({ ...scrollPos, directiondown: true});
        }
        lastScrollTop = pos;
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <header 
        className={`${props.className ? props.className: ""}${scrollPos.y > 5 ? " sticky-header" : ""}${scrollPos.directionDown === false ? " header-appear" : ""}${props.type ? ` ${props.type}` : ""
    }`}
    >
        {props.children}
    </header>
    );
});
/* Header Component  End */

/* Headernav Component Start */
export const HeaderNav = (props) => {
    const HandleMenuToggle = () => {
        let header = document.querySelector("header"),
        menu = header.querySelector(".navbar-nav"),
        menu_item = menu.querySelectorAll(".nav-item");

        if (!document.body.classList.contains("navbar-collapse-show")) {
            document.body.classList.add("navbar-collapse-show");
        } else {
            document.body.classList.remove("navbar-collapse-show");
        }

        menu_item.forEach(function (item) {
            if (item.classList.contains("open")) {
                setTimeout(() => {
                    item.classList.remove("open");
                }, 200);
            }
        });
    };

    return (
        <navbar 
            collapseOnSelect
            id="headerbar"
            expand={props.expand}
            bg={props.bg ? props.bg : "transparent"}
            variant={props.theme}
            className={`${props.menu && `menu-${props.menu}`}${props.className ? ` ${props.className}` : ""
               }${props.bg || props.bg === "transparent" ? "" : " header -transparent"}`}
            onToggle={HandleMenuToggle}
        >
            <Container
                fluid={props.fluid}
                className={props.containerClass ? props.containerClass: ""}
                >
                {props.children}
            </Container>
        </navbar>
    );
};
/* Headernav Component End */

/* HamburgerMenu Component Start */
export const HamburgerMenu = memo((props) => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    useOnClickOutside(ref, (e) => setShow(false));

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setShow(false);
            }
        };

        if (show === true) {
            document.querySelector("body").classList.add("overflow-hidden");
            document.querySelector(".push-button").classList.remove("collapsed");
        } else {
            document.querySelector("body").classList.remove("overflow-hidden");
            document.querySelector(".push-button").classList.add("collapsed");
        }

        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    },[show]);

    return(
        <>
            {[false].map((expand) => (
                <navbar 
                    key={expand}
                    expand={expand}
                    className={`header-push-button bg-transparent inline-block ${props.theme}`}
                >
                    <Navbar.Toggle className={`push-button`} onClick={() => setShow(true)}>
                        <div className="nav-icon">
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>

                        </div>
                    </Navbar.Toggle>
                    <div className={`${show ? "block h-[100vh] left-0 overflow-hidden fixed top-0 w-full z-[999]" : ""}`}>
                        <div 
                            ref={ref} className={`hamburger-menu-wrapper pos-${props.position}${show ? " show" : "" 
                                }${props.className ? `${props.className}` : "" }`}
                        >
                            {props.closeBtn && (
                                <button aria-label="hamburger menu close button" className="close-btn" onClick={() => setShow(false)}>
                                    <i className="fas fa-times"></i>
                                </button>
                            )}
                            {show && props.childrem}
                        </div>
                    </div>
                </navbar>    
            ))}
        </>
    );
});
/* HamburgerMenu Components End */

/* Collapsible Menu Components start */
export const Collapsiblemenu = (props) => {
    const collapsibleMenu = useRef(null)
    let location = useLocation()

    useEffect(() => {
        let mainSelector = collapsibleMenu.current,
            mainlink = mainSelector.querySelectorAll("a");
        
        function getPerentsElements(elem) {
            var parants = [];
            while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() != 'body') {
                elem = elem.parentNode;
                parants.push(elem);
            }
            return parants
        }

        mainlink.forEach(item => {
            let attr = item.getAttribute("href");
            item.closest(".menu-list-item") && item.closest(".menu-list-item").classList.remove("active")

            if(attr === location.pathname) {
                item.closest(".menu-list-item") && item.closest(".menu-list-item").classList.add("active")
                if (item.closest(".megamenu")) {
                    item.closest(".menu-list-item") && item.closest(".menu-list-item").classList.add("active");
                }

                item.closest(".accordion") && item.closest(".accordion").querySelectorAll(".accordion-item").forEach(item => item.classList.remove("active"))
                let filter_dropdown = getPerentsElements(item).filter(item => item.classList.contains('accordion-item'))
                filter_dropdown.forEach(item => item.classlist.add("active"))
            }
        })
    },[location])

    return (
        <Accordion 
            ref={collapsibleMenu}
            className={`collapsible-menu${props.theme ? `${props.theme}` : ""}${props.className ? ` ${props.className}` : ""
            }`} 
        >
            {HeaderData &&
                HeaderData.map((item, i) => {
                    return (
                        <Accordion.Item key={i} eventKey={i}>
                            <Accordion.Header>
                                {
                                    item.link ? (<Link aria-label="link" className="menu-link"
                                        to={item.link} > {item.title} </Link>)
                                        :  (<span className="menu-link"> {item.title} </span>)
                                }
                                {(item.dropdown || item.megamenu) && (
                                    <span className="icon"></span>
                                )}
                            </Accordion.Header>
                            {(item.dropdown || item.megamenu) && (
                                <Accordion.Body>
                                    {item.dropdown && (
                                        <div className="single-dropdown">
                                            <Accordion>
                                                {item.dropdown.map((item, i) => {
                                                    return (
                                                        <Accordion.Item key={i} eventKey={i}>
                                                            <Accordion.Header>
                                                                {
                                                                    item.link ? (<Link aria-label="link" className="menu-link"
                                                                        to={item.link} > {item.title}</Link>)
                                                                        : (<span className="menu-item"> {item.title}</span>)
                                                                }
                                                                {item.dropdown && (
                                                                    <span className="icon"></span>
                                                                )}
                                                            </Accordion.Header>
                                                            {item.dropdown && (
                                                                <Accordion.Body>
                                                                    <Accordion>
                                                                        {item.dropdown.map((item, i) => {
                                                                            return (
                                                                                <Accordion.Item key={i} eventKey={i}>
                                                                                    <Accordion.Header>
                                                                                        {
                                                                                            item.link ? (<Link aria-label="link" className="menu-link"
                                                                                                to={item.link} > {item.title} </Link>)
                                                                                                : (<span className="menu-link"> {item.title} </span>)
                                                                                        }
                                                                                        {item.dropdown && (
                                                                                            <span className="icon"></span>
                                                                                        )}
                                                                                    </Accordion.Header>
                                                                                    {item.dropdown && (
                                                                                        <Accordion.Body>
                                                                                            <ul className="menu-link">
                                                                                                {item.dropdown.map(
                                                                                                    (item, i) => {
                                                                                                        return (
                                                                                                            <li 
                                                                                                                className="menu-list-item"
                                                                                                                key={i}
                                                                                                            >
                                                                                                                {
                                                                                                                    item.link ? (<Link aria-label="link" className="menu-link"
                                                                                                                        to={item.link} > {item.title} </Link>)
                                                                                                                        : (<span className="menu-link"> {item.title}</span>)
                                                                                                                }
                                                                                                            </li>
                                                                                                        );
                                                                                                    }
                                                                                                )}
                                                                                            </ul>
                                                                                        </Accordion.Body>
                                                                                    )}
                                                                                </Accordion.Item>
                                                                            );
                                                                        })}
                                                                    </Accordion>
                                                                </Accordion.Body>
                                                            )}
                                                        </Accordion.Item>
                                                    );
                                                })}
                                            </Accordion>
                                        </div>
                                    )}
                                    {item.megamenu && (
                                        <div className="megamenu">
                                            <Accordion>
                                                {item.megamenu.map((item, i) => {
                                                    return (
                                                       <Accordion.Item key={i} eventKey={i} className={`${(item.dropdown.filter(item => item.img).length > 0) ? "img-wrapper" : ""}`}>
                                                        <Accordion.Header>
                                                            <span className="menu-link">{item.title}</span>
                                                            {item.dropdown && (
                                                                <span className="icon"></span>
                                                            )}
                                                        </Accordion.Header>
                                                        {item.dropdown && (
                                                            <Accordion.Body>
                                                                <ul className="menu-list">
                                                                    {item.dropdown.map((item, i) => {
                                                                        return (
                                                                            <li key={i} className="menu-list-item">
                                                                                <Link aria-label="link" className="menu-link"
                                                                                    to={item.link}
                                                                                >
                                                                                    {item.icon && (
                                                                                        <i 
                                                                                            className={`${item.icon} mr-[10px]`}
                                                                                            ></i>
                                                                                    )}
                                                                                    {item.title}
                                                                                </Link>
                                                                            </li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </Accordion.Body>
                                                        )}
                                                       </Accordion.Item>
                                                    )
                                                })}
                                            </Accordion>
                                        </div>
                                    )}
                                </Accordion.Body>
                            )}
                        </Accordion.Item>
                    );
                })}
        </Accordion>
    );
};
/* Collapsiable menu Component End */

Header.defaultProps = {
    topSpace: {
        desktop: false,
    },
};

Header.PropTypes = {
    type:PropTypes.string,
    topSpace: PropTypes.object,
};

HeaderNav.defaultProps = {
    fluid: "lg",
    theme: "dark",
    menu: "light",
    expand: "lg",
};

HeaderNav.propTypes = {
    fluid: PropTypes.string,
    theme: PropTypes.string,
    bg: PropTypes.string,
    className: PropTypes.string,
}

HamburgerMenu.defaultProps = {
    theme: "light",
    position: "right",
    closeBtn: true,
};

HamburgerMenu.propsTypes = {
    theme: PropTypes.string,
    position: PropTypes.string,
    closeBtn: PropTypes.bool,
};

export default Header;