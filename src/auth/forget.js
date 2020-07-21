import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class forget extends Component {
    render() {
        return (
            <>
                <div class="d-flex flex-center mb-15">
                    <a href="#">
                        <img src="assets/media/logos/logo-letter-13.png" class="max-h-75px" alt="" />
                    </a>
                </div>
                <div class="login-forgot">
                    <div class="mb-20">
                        <h3>Forgotten Password ?</h3>
                        <div class="text-muted font-weight-bold">Enter your email to reset your password</div>
                    </div>
                    <form class="form" action="index.php" method="post">
                        <div class="form-group mb-10">
                            <input class="form-control form-control-solid h-auto" type="text" placeholder="Email" name="email" autocomplete="off" />
                        </div>
                        <div class="form-group d-flex flex-wrap flex-center mt-10">
                            <button class="btn btn-primary font-weight-bold mx-2">Submit</button>
                            <Link to="/"><button class="btn btn-light-danger font-weight-bold mx-2">Cancel</button></Link>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
