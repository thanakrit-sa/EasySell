import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../route_dashboard'

export default class login extends Component {
    render() {
        return (
            <>


                <div className="d-flex flex-center mb-15">
                    <a href="#">
                        <img src="assets/media/logos/logo-letter-13.png" className="max-h-75px" alt="" />
                    </a>
                </div>
                <div className="login-signin">
                    <div className="mb-20">
                        <h3>Sign In To Admin</h3>
                        <div className="text-muted font-weight-bold">Enter your details to login to your account:</div>
                    </div>
                    <form className="form" id="kt_login_signin_form">
                        <div className="form-group mb-5">
                            <input className="form-control form-control-solid h-auto" type="text" placeholder="Email" name="username" autocomplete="off" />
                        </div>
                        <div className="form-group mb-5">
                            <input className="form-control form-control-solid h-auto" type="password" placeholder="Password" name="password" />
                        </div>
                        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                            <div className="checkbox-inline">
                                <label className="checkbox m-0 text-muted">
                                    <input type="checkbox" name="remember" />
                                    <span></span>
                                    Remember me
                                </label>
                            </div>
                            <a href="/forget" className="text-muted text-hover-primary">Forget Password ?</a>
                        </div>
                        <div className="form-group mb-5">
                            <Link to="dashboard"><button className="btn btn-primary btn-block font-weight-bold">Sign In</button></Link>
                        </div>
                        <div className="form-group mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-block btn-facebook font-weight-bold"><i className="socicon-facebook mr-1"></i>Login Facebook</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-block btn-google font-weight-bold"><i className="socicon-google mr-1"></i>Login Google</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="mt-10">
                        <span className="opacity-70 mr-4">
                            Don't have an account yet?
                                            </span>
                        <a href="/register" className="text-muted text-hover-primary font-weight-bold">Sign Up!</a>
                    </div>
                </div>

            </>
        )
    }
}
