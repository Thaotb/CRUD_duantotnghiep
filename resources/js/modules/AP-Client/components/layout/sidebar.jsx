import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Sidebar() {
    return (
        <Router>
            <div>
                <button
                    className="m-aside-left-close  m-aside-left-close--skin-dark "
                    id="m_aside_left_close_btn"
                >
                    <i className="la la-close"></i>
                </button>
                <div
                    id="m_aside_left"
                    className="m-grid__item	m-aside-left  m-aside-left--skin-dark "
                >
                    <div
                        id="m_ver_menu"
                        className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark "
                        m-menu-vertical="1"
                        m-menu-scrollable="1"
                        m-menu-dropdown-timeout="500"
                        style={{ position: "relative" }}
                    >
                        <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                            <li
                                className="m-menu__item  m-menu__item--active"
                                aria-haspopup="true"
                            >
                                <Link to="/admin">
                                    <a className="m-menu__link ">
                                        <i className="m-menu__link-icon flaticon-line-graph"></i>
                                        <span className="m-menu__link-title">
                                            {" "}
                                            <span className="m-menu__link-wrap">
                                                {" "}
                                                <span className="m-menu__link-text">
                                                    Dashboard
                                                </span>
                                                <span className="m-menu__link-badge">
                                                    <span className="m-badge m-badge--danger">
                                                        2
                                                    </span>
                                                </span>{" "}
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className="m-menu__section ">
                                <h4 className="m-menu__section-text">
                                    Components
                                </h4>
                                <i className="m-menu__section-icon flaticon-more-v2"></i>
                            </li>
                            <li
                                className="m-menu__item  m-menu__item--submenu"
                                aria-haspopup="true"
                                m-menu-submenu-toggle="hover">
                                <a
                                    href=""
                                    className="m-menu__link m-menu__toggle" >
                                    <i className="m-menu__link-icon flaticon-layers"></i>
                                    <span className="m-menu__link-text">
                                        Base
                                    </span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </a>
                                <div className="m-menu__submenu ">
                                    <span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li
                                            className="m-menu__item  m-menu__item--parent"
                                            aria-haspopup="true" >
                                            <span className="m-menu__link">
                                                <span className="m-menu__link-text">
                                                    Base
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            className="m-menu__item "
                                            aria-haspopup="true" >
                                            <a
                                                href="components/base/state.html"
                                                className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">
                                                    State Colors
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Router>
    );
}
export default Sidebar;
