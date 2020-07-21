import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard/dashboard'
// import Footer from './layout/footer'
import Navbar from './layout/navbar'
import Warehouse from './warehouse/warehouse'
import AddWarehouse from './warehouse/add'
import Stock from './warehouse/stock'
import AddStock from './warehouse/addStock'
import FacebookPage from './facebook/facebookPage'
import FacebookDashboard from './facebook/facebookDashboard'
import FacebookChatbot from './facebook/facebookChatbot'
import FacebookComment from './facebook/facebookComment'
import OrderList from './order/orderList'
import Package from './package/package'
import Error from './error'

export default class route_dashboard extends Component {
    render() {
        return (
            <>

                <div id="kt_body" style={{ backgroundImage: `url(assets/media/bg/bg-10.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `100% 350px`, backgroundPosition: `center top` }} className="quick-panel-right demo-panel-right offcanvas-right header-fixed subheader-enabled page-loading">

                    <div className="d-flex flex-column flex-root">
                        <div className="d-flex flex-row flex-column-fluid page">
                            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                                <Navbar />
                                <Switch>
                                    <Route exact path="/dashboard" component={Dashboard} />
                                    <Route path="/warehouse" component={Warehouse} />
                                    <Route path="/addwarehouse" component={AddWarehouse} />
                                    <Route path="/stock" component={Stock} />
                                    <Route path="/addStock" component={AddStock} />
                                    <Route path="/facebookPage" component={FacebookPage} />
                                    <Route path="/facebookDashboard" component={FacebookDashboard} />
                                    <Route path="/facebookChatbot" component={FacebookChatbot} />
                                    <Route path="/facebookComment" component={FacebookComment} />
                                    <Route path="/orderList" component={OrderList} />
                                    <Route path="/package" component={Package} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
