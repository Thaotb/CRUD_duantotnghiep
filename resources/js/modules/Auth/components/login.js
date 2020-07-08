import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Login() {
    return (
        <div>
            <div className="m-login__signin">
                <div className="m-login__head">
                    <h3 className="m-login__title">Sign In To Admin</h3>
                </div>
                <form className="m-login__form m-form" action="">
                    <div className="form-group m-form__group">
                        <input
                            className="form-control m-input"
                            type="text"
                            placeholder="Email"
                            name="email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group m-form__group">
                        <input
                            className="form-control m-input m-login__form-input--last"
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                    </div>
                    <div className="row m-login__form-sub">
                        <div className="col m--align-left">
                            <label className="m-checkbox m-checkbox--focus">
                                <input type="checkbox" name="remember" />{" "}
                                Remember me
                                <span></span>
                            </label>
                        </div>
                        <div className="col m--align-right">
                            <Link to="/forgotpassword">Forgot password ?</Link>
                        </div>
                    </div>
                    <div className="m-login__form-action">
                        <button
                            id="m_login_signin_submit"
                            className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;
