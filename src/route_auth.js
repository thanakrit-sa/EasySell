import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './auth/login'
import Register from './auth/register'
import Forget from './auth/forget'
import Error from './error'
import RouteDashboard from './route_dashboard'
import Warehouse from './warehouse/warehouse'

export default class route_auth extends Component {
    render() {
        return (
            <>
                <div className="d-flex flex-column flex-root">
                    <div className="login login-4 login-signin-on d-flex flex-row-fluid" id="kt_login">
                        <div className="d-flex flex-center flex-row-fluid bgi-size-cover bgi-position-top bgi-no-repeat" style={{ backgroundImage: `url('assets/media/bg/bg-3.jpg')`}}>
                            <div className="login-form text-center p-7 position-relative overflow-hidden">
                                <Switch>
                                    <Route exact path="/login" component={Login} />
                                    <Route path="/register" component={Register} />
                                    <Route path="/forget" component={Forget} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
