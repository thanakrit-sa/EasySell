import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class register extends Component {
    render() {
        return (
            <>
                <div class="d-flex flex-center mb-15">
                    <a href="#">
                        <img src="assets/media/logos/logo-letter-13.png" class="max-h-75px" alt="" />
                    </a>
                </div>

                <div class="login-signup">
                    <div class="mb-20">
                        <h3>Sign Up</h3>
                        <div class="text-muted font-weight-bold">Enter your details to create your account</div>
                    </div>
                    <form class="form" action="index.php" method="post">
                        <div class="form-group mb-5">
                            <input class="form-control form-control-solid h-auto" type="text" placeholder="Fullname" name="fullname" />
                        </div>
                        <div class="form-group mb-5">
                            <input class="form-control form-control-solid h-auto" type="text" placeholder="Email" name="email" autocomplete="off" />
                        </div>
                        <div class="form-group mb-5">
                            <input class="form-control form-control-solid h-auto" type="password" placeholder="Password" name="password" />
                        </div>
                        <div class="form-group mb-5">
                            <input class="form-control form-control-solid h-auto" type="password" placeholder="Confirm Password" name="cpassword" />
                        </div>
                        <div class="form-group mb-5 text-left">
                            <div class="checkbox-inline">
                                <label class="checkbox m-0">
                                    <input type="checkbox" name="agree" />
                                    <span></span>
										I Agree the <a href="#" class="font-weight-bold ml-1">terms and conditions</a>.
									</label>
                            </div>
                            <div class="form-text text-muted text-center"></div>
                        </div>
                        <div class="form-group d-flex flex-wrap flex-center mt-10">
                            <button class="btn btn-primary font-weight-bold mx-2">Sign Up</button>
                            <Link to="/"><button class="btn btn-light-danger font-weight-bold mx-2">Cancel</button></Link>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
