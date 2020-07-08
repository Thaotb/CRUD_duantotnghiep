import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import RouterAuth from "./router/router";

function Auth() {
    return (
        <div>
            <div className="m-grid m-grid--hor m-grid--root m-page">
                <div
                    className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin"
                    id="m_login"
                >
                    <div className="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside">
                        <div className="m-stack m-stack--hor m-stack--desktop">
                            <div className="m-stack__item m-stack__item--fluid">
                                <div className="m-login__wrapper">
                                    <div className="m-login__logo">
                                        <a href="#">
                                            <img src="assets/app/media/img/logos/logo-2.png" />
                                        </a>
                                    </div>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <RouterAuth />
                                    </Suspense>
                                    <div className="m-stack__item m-stack__item--center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1	m-login__content m-grid-item--center"
                        style={{
                            backgroundImage:
                                "url(../../../assets/app/media/img//bg/bg-4.jpg)"
                        }}
                    >
                        <div className="m-grid__item">
                            <h3 className="m-login__welcome">
                                Join Our Community
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;

if (document.getElementById("auth")) {
    ReactDOM.render(<Auth />, document.getElementById("auth"));
}
