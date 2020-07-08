import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function ResetPassword() {
    return (
        <div>
            <div className="m-login">
                <div className="m-login__head">
                    <h3 className="m-login__title">Reset Password </h3>
                </div>
                <form className="m-login__form m-form" action="">
                    <div className="form-group m-form__group">
                        <input
                            className="form-control m-input"
                            type="text"
                            placeholder="New password"
                            name="password"
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group m-form__group">
                        <input
                            className="form-control m-input"
                            type="text"
                            placeholder="Confirm password"
                            name="confirm_password"
                            autoComplete="off"
                        />
                    </div>
                    <div className="m-login__form-action">
                        <Link>
                            {" "}
                            <button className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">
                                Change
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
export default ResetPassword;
