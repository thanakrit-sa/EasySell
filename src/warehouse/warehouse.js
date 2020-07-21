import React, { Component } from 'react'

export default class warehouse extends Component {
    render() {
        return (
            <>
                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <div className="subheader py-2 py-lg-12 subheader-transparent" id="kt_subheader">
                        <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            <div className="d-flex align-items-center flex-wrap mr-1">
                                <div className="d-flex flex-column">
                                    <h2 className="text-white font-weight-bold my-2 mr-5">คลังสินค้า</h2>
                                    <div className="d-flex align-items-center font-weight-bold my-2">
                                        <a href="dashboard.php" className="opacity-75 hover-opacity-100"><i className="flaticon2-shelter text-white icon-1x"></i></a>
                                        <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                        <a href="warehouse.php" className="text-white text-hover-white opacity-75 hover-opacity-100">คลังสินค้า</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="d-flex flex-column-fluid">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-custom gutter-b card-stretch">
                                    <a href="/addwarehouse" className="card-body pt-4 btn btn-icon btn-block btn-light-success" style={{ height: `260px`, width: `100%` }}>
                                        <i className="flaticon-plus icon-7x"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-custom gutter-b card-stretch">
                                    <div className="card-body pt-4">
                                        <div className="d-flex justify-content-end">
                                            <a href="#" className="btn btn-xs btn-icon btn-light-warning mr-2">
                                                <i className="flaticon-edit"></i>
                                            </a>
                                            <a href="#" className="btn btn-xs btn-icon btn-light-danger">
                                                <i className="flaticon-delete"></i>
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-end mb-7">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                                                    <div className="symbol symbol-circle symbol-lg-75">
                                                        <img src="assets/media/users/300_1.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="text-dark font-weight-bold font-size-h4">ชื่อคลังสินค้า</span>
                                                    <span className="text-muted font-weight-bold">ชื่อประเภทคลังสินค้า</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-7">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">สินค้า :</span>
                                                <span className="text-muted font-weight-bold">20 รายการ</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-1">
                                                <span className="text-dark-75 font-weight-bolder mr-2">การจัดส่ง :</span>
                                                <span className="text-muted font-weight-bold">Kerry (COD)</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">แก้ไขล่าสุด :</span>
                                                <span className="text-muted font-weight-bold">15-07-2020</span>
                                            </div>
                                        </div>
                                        <a href="/stock" className="btn btn-block btn-light-primary font-weight-bolder">จัดการสินค้า</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-custom gutter-b card-stretch">
                                    <div className="card-body pt-4">
                                        <div className="d-flex justify-content-end">
                                            <a href="#" className="btn btn-xs btn-icon btn-light-warning mr-2">
                                                <i className="flaticon-edit"></i>
                                            </a>
                                            <a href="#" className="btn btn-xs btn-icon btn-light-danger">
                                                <i className="flaticon-delete"></i>
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-end mb-7">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                                                    <div className="symbol symbol-circle symbol-lg-75">
                                                        <img src="assets/media/users/300_1.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="text-dark font-weight-bold font-size-h4">ชื่อคลังสินค้า</span>
                                                    <span className="text-muted font-weight-bold">ชื่อประเภทคลังสินค้า</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-7">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">สินค้า :</span>
                                                <span className="text-muted font-weight-bold">20 รายการ</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-1">
                                                <span className="text-dark-75 font-weight-bolder mr-2">การจัดส่ง :</span>
                                                <span className="text-muted font-weight-bold">Kerry (COD)</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">แก้ไขล่าสุด :</span>
                                                <span className="text-muted font-weight-bold">15-07-2020</span>
                                            </div>
                                        </div>
                                        <a href="stock.php" className="btn btn-block btn-light-primary font-weight-bolder">จัดการสินค้า</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-custom gutter-b card-stretch">
                                    <div className="card-body pt-4">
                                        <div className="d-flex justify-content-end">
                                            <a href="#" className="btn btn-xs btn-icon btn-light-warning mr-2">
                                                <i className="flaticon-edit"></i>
                                            </a>
                                            <a href="#" className="btn btn-xs btn-icon btn-light-danger">
                                                <i className="flaticon-delete"></i>
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-end mb-7">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                                                    <div className="symbol symbol-circle symbol-lg-75">
                                                        <img src="assets/media/users/300_1.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="text-dark font-weight-bold font-size-h4">ชื่อคลังสินค้า</span>
                                                    <span className="text-muted font-weight-bold">ชื่อประเภทคลังสินค้า</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-7">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">สินค้า :</span>
                                                <span className="text-muted font-weight-bold">20 รายการ</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-1">
                                                <span className="text-dark-75 font-weight-bolder mr-2">การจัดส่ง :</span>
                                                <span className="text-muted font-weight-bold">Kerry (COD)</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">แก้ไขล่าสุด :</span>
                                                <span className="text-muted font-weight-bold">15-07-2020</span>
                                            </div>
                                        </div>
                                        <a href="stock.php" className="btn btn-block btn-light-primary font-weight-bolder">จัดการสินค้า</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-custom gutter-b card-stretch">
                                    <div className="card-body pt-4">
                                        <div className="d-flex justify-content-end">
                                            <a href="#" className="btn btn-xs btn-icon btn-light-warning mr-2">
                                                <i className="flaticon-edit"></i>
                                            </a>
                                            <a href="#" className="btn btn-xs btn-icon btn-light-danger">
                                                <i className="flaticon-delete"></i>
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-end mb-7">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                                                    <div className="symbol symbol-circle symbol-lg-75">
                                                        <img src="assets/media/users/300_1.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="text-dark font-weight-bold font-size-h4">ชื่อคลังสินค้า</span>
                                                    <span className="text-muted font-weight-bold">ชื่อประเภทคลังสินค้า</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-7">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">สินค้า :</span>
                                                <span className="text-muted font-weight-bold">20 รายการ</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-1">
                                                <span className="text-dark-75 font-weight-bolder mr-2">การจัดส่ง :</span>
                                                <span className="text-muted font-weight-bold">Kerry (COD)</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">แก้ไขล่าสุด :</span>
                                                <span className="text-muted font-weight-bold">15-07-2020</span>
                                            </div>
                                        </div>
                                        <a href="stock.php" className="btn btn-block btn-light-primary font-weight-bolder">จัดการสินค้า</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="card card-custom gutter-b card-stretch">
                                    <div className="card-body pt-4">
                                        <div className="d-flex justify-content-end">
                                            <a href="#" className="btn btn-xs btn-icon btn-light-warning mr-2">
                                                <i className="flaticon-edit"></i>
                                            </a>
                                            <a href="#" className="btn btn-xs btn-icon btn-light-danger">
                                                <i className="flaticon-delete"></i>
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-end mb-7">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                                                    <div className="symbol symbol-circle symbol-lg-75">
                                                        <img src="assets/media/users/300_1.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="text-dark font-weight-bold font-size-h4">ชื่อคลังสินค้า</span>
                                                    <span className="text-muted font-weight-bold">ชื่อประเภทคลังสินค้า</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-7">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">สินค้า :</span>
                                                <span className="text-muted font-weight-bold">20 รายการ</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-1">
                                                <span className="text-dark-75 font-weight-bolder mr-2">การจัดส่ง :</span>
                                                <span className="text-muted font-weight-bold">Kerry (COD)</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span className="text-dark-75 font-weight-bolder mr-2">แก้ไขล่าสุด :</span>
                                                <span className="text-muted font-weight-bold">15-07-2020</span>
                                            </div>
                                        </div>
                                        <a href="stock.php" className="btn btn-block btn-light-primary font-weight-bolder">จัดการสินค้า</a>
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
