import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function ForgotPassword() {
    return (
        <div>
            <div className="m-login">
                <div className="m-login__head">
                    <h3 className="m-login__title">Forgotten Password ?</h3>
                    <div className="m-login__desc">
                        Enter your email to reset your password:
                    </div>
                </div>
                <form className="m-login__form m-form" action="">
                    <div className="form-group m-form__group">
                        <input
                            className="form-control m-input"
                            type="text"
                            placeholder="Email"
                            name="email"
                            id="m_email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="m-login__form-action">
                        <Link to="/resetpassword">
                            {" "}
                            <button className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">
                                Request
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ForgotPassword;
