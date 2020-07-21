import React, { Component } from 'react'

export default class stock extends Component {
    render() {
        return (
            <>
                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <div className="subheader py-2 py-lg-12  subheader-transparent " id="kt_subheader">
                        <div className=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            <div className="d-flex align-items-center flex-wrap mr-1">
                                <div className="d-flex flex-column">
                                    <h2 className="text-white font-weight-bold my-2 mr-5">จัดการสินค้า</h2>
                                    <div className="d-flex align-items-center font-weight-bold my-2">
                                        <a href="#" className="opacity-75 hover-opacity-100"><i className="flaticon2-shelter text-white icon-1x"></i></a>
                                        <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                        <a href="" className="text-white text-hover-white opacity-75 hover-opacity-100">คลังสินค้า</a>
                                        <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                        <a href="" className="text-white text-hover-white opacity-75 hover-opacity-100">จัดการสินค้า</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card card-custom">
                                        <div className="card-header flex-wrap border-1 pt-6 pb-3">
                                            <div className="card-title">
                                                <h3 className="card-label">
                                                    ชื่อคลังสินค้า
                                                    <span className="d-block text-muted pt-2 font-size-sm">ประเภทคลังสินค้า</span>
                                                </h3>
                                            </div>
                                            <div className="card-toolbar">
                                                <a href="/addStock" className="btn btn-success font-weight-bolder">
                                                    <i className="fas fa-plus mr-2"></i>เพิ่มสินค้า
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="mb-7">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-9 col-xl-8">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-4 my-2 my-md-0">
                                                                <div className="input-icon">
                                                                    <input type="text" className="form-control" placeholder="Search..." id="kt_datatable_search_query" />
                                                                    <span><i className="flaticon2-search-1 text-muted"></i></span>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 my-2 my-md-0">
                                                                <div className="d-flex align-items-center">
                                                                    <label className="mr-3 mb-0 d-none d-md-block">Status:</label>
                                                                    <select className="form-control" id="kt_datatable_search_status">
                                                                        <option value="">All</option>
                                                                        <option value="1">Pending</option>
                                                                        <option value="2">Delivered</option>
                                                                        <option value="3">Canceled</option>
                                                                        <option value="4">Success</option>
                                                                        <option value="5">Info</option>
                                                                        <option value="6">Danger</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 my-2 my-md-0">
                                                                <div className="d-flex align-items-center">
                                                                    <label className="mr-3 mb-0 d-none d-md-block">Type:</label>
                                                                    <select className="form-control" id="kt_datatable_search_type">
                                                                        <option value="">All</option>
                                                                        <option value="1">Online</option>
                                                                        <option value="2">Retail</option>
                                                                        <option value="3">Direct</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                                                        <a href="#" className="btn btn-light-primary px-6 font-weight-bold">
                                                            Search
                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="datatable datatable-bordered datatable-head-custom" id="kt_datatable"></div>
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
