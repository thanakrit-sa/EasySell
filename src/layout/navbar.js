import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <>
            
                <div id="kt_header_mobile" className="header-mobile">
                    <a href="dashboard.php">
                        <img alt="Logo" src="assets/media/logos/logo-letter-1.png" className="logo-default max-h-30px" />
                    </a>

                    <div className="d-flex align-items-center">
                        <button className="btn p-0 burger-icon burger-icon-left ml-4" id="kt_header_mobile_toggle"><span></span></button>
                        <button className="btn btn-icon btn-hover-transparent-white p-0 ml-3" id="kt_header_mobile_topbar_toggle">
                            <i className="fas fa-user-alt icon-xl"></i>
                        </button>
                    </div>
                </div>

                <div id="kt_header" className="header header-fixed">
                    <div className="container d-flex align-items-stretch justify-content-between">
                        <div className="d-flex align-items-stretch mr-3">
                            <div className="header-logo">
                                <a href="dashboard.php">
                                    <img alt="Logo" src="assets/media/logos/logo-letter-9.png" className="logo-default max-h-40px" />
                                    <img alt="Logo" src="assets/media/logos/logo-letter-1.png" className="logo-sticky max-h-40px" />
                                </a>
                            </div>

                            <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                                <div id="kt_header_menu" className="header-menu header-menu-left header-menu-mobile header-menu-layout-default" >
                                    <ul className="menu-nav">
                                        <li className="menu-item" aria-haspopup="true">
                                            <a href="/" className="menu-link">
                                                <span className="menu-text">หน้าแรก</span>
                                            </a>
                                        </li>

                                        <li className="menu-item" aria-haspopup="true">
                                            <a href="/warehouse" className="menu-link">
                                                <span className="menu-text">คลังสินค้า</span>
                                            </a>
                                        </li>

                                        <li className="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                                            <a href="" className="menu-link menu-toggle text-hover-primary">
                                                <span className="menu-text">ร้านค้า</span>
                                                <span className="menu-desc"></span>
                                                <i className="menu-arrow"></i>
                                            </a>
                                            <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                                                <ul className="menu-subnav">
                                                    <li className="menu-item menu-item-submenu" data-menu-toggle="hover" aria-haspopup="true">
                                                        <a href="#" className="menu-link menu-toggle text-hover-primary">
                                                            <span className="svg-icon menu-icon">
                                                                <i className="socicon-facebook mr-2"></i>
                                                            </span>
                                                            <span className="menu-text">Facebook</span><i className="menu-arrow"></i>
                                                        </a>
                                                        <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                            <ul className="menu-subnav">
                                                                <li className="menu-item" aria-haspopup="true">
                                                                    <a href="/facebookPage" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                                                        <span className="menu-text">Facebook Pages</span>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item" aria-haspopup="true">
                                                                    <a href="/facebookChatbot" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                                                        <span className="menu-text">Chatbot (ใช้กับทุก Pages)</span>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item" aria-haspopup="true">
                                                                    <a href="/facebookComment" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                                                        <span className="menu-text">Comments (ใช้กับทุก Pages)</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>

                                                    <li className="menu-item menu-item-submenu" data-menu-toggle="hover" aria-haspopup="true">
                                                        <a href="#" className="menu-link menu-toggle text-hover-primary">
                                                            <span className="svg-icon menu-icon">
                                                                <i className="socicon-line mr-2"></i>
                                                            </span>
                                                            <span className="menu-text">Line</span><i className="menu-arrow"></i>
                                                        </a>
                                                        <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                            <ul className="menu-subnav">
                                                                <li className="menu-item" aria-haspopup="true">
                                                                    <a href="features/bootstrap/typography.html" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                                                        <span className="menu-text">Typography</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>

                                                    <li className="menu-item menu-item-submenu" data-menu-toggle="hover" aria-haspopup="true">
                                                        <a href="#" className="menu-link menu-toggle text-hover-primary">
                                                            <span className="svg-icon menu-icon">
                                                                <i className="socicon-instagram mr-2"></i>
                                                            </span>
                                                            <span className="menu-text">Instagram</span><i className="menu-arrow"></i>
                                                        </a>
                                                        <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                            <ul className="menu-subnav">
                                                                <li className="menu-item" aria-haspopup="true">
                                                                    <a href="features/bootstrap/typography.html" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                                                        <span className="menu-text">Typography</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="menu-item" aria-haspopup="true">
                                            <a href="/broadcast" className="menu-link">
                                                <span className="menu-text">บรอดแคสต์</span>
                                            </a>
                                        </li>

                                        <li className="menu-item" aria-haspopup="true">
                                            <a href="/orderList" className="menu-link">
                                                <span className="menu-text">รายการสั่งซื้อสินค้า</span>
                                            </a>
                                        </li>

                                        <li className="menu-item" aria-haspopup="true">
                                            <a href="/package" className="menu-link">
                                                <span className="menu-text">แพ็คเกจ</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="topbar">
                            {/* <!-- <div className="dropdown">
                                <div className="topbar-item">
                                    <div className="btn btn-icon btn-hover-transparent-white btn-lg mr-2">
                                        <i className="fas fa-user-clock"></i>
                                    </div>
                                </div>
                            </div> --> */}
                            <div className="dropdown">
                                <a href="#" className="d-flex topbar-item" data-toggle="dropdown">
                                    <div className="d-flex flex-column text-right">
                                        <span className="text-muted font-weight-bold">Admin</span>
                                        <span className="text-white font-weight-bold">Nick Stone</span>
                                    </div>
                                    <div className="symbol symbol-circle symbol-50 ml-3">
                                        <img alt="Pic" src="assets/media/users/300_21.jpg" />
                                    </div>
                                </a>
                                <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0">
                                    <div className="d-flex align-items-center p-8 rounded-top">
                                        <div className="symbol symbol-md bg-light-primary mr-3 flex-shrink-0">
                                            <img src="assets/media/users/300_21.jpg" alt="" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="text-muted font-weight-bold">Admin</span>
                                            <span className="text-primary font-weight-bold">Nick Stone</span>
                                        </div>
                                    </div>
                                    <div className="separator separator-solid"></div>
                                    <div className="navi navi-spacer-x-0 pt-5">
                                        <a href="profile.php" className="navi-item px-8">
                                            <div className="navi-link">
                                                <div className="navi-icon mr-2">
                                                    <i className="flaticon2-calendar-3 text-success"></i>
                                                </div>
                                                <div className="navi-text">
                                                    <div className="font-weight-bold">My Profile</div>
                                                    <div className="text-muted">Account settings and more</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="navi-separator mt-3"></div>
                                        <div className="navi-footer px-8 py-5">
                                            <a href="/" className="btn btn-light-danger font-weight-bold">Sign Out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
