import React, { Component } from 'react'

export default class facebookDashboard extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     showAllPost
        // }
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "assets/js/pages/crud/forms/widgets/tagify.js?v=7.0.6";
        document.body.appendChild(script);
      }
    render() {
        return (
            <>
                <div className="content d-flex flex-column flex-column-fluid">
                    <div className="subheader py-2 py-lg-12 subheader-transparent">
                        <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            <div className="d-flex align-items-center flex-wrap mr-1">
                                <div className="d-flex flex-column">
                                    <h2 className="text-white font-weight-bold my-2 mr-5">Facebook Dashboard</h2>
                                    <div className="d-flex align-items-center font-weight-bold my-2">
                                        <a href="dashboard.php" className="opacity-75 hover-opacity-100"><i className="flaticon2-shelter text-white icon-1x"></i></a>
                                        <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                        <a href="#" className="text-white text-hover-white opacity-75 hover-opacity-100">ฟังก์ชั่นการทำงาน</a>
                                        <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                        <a href="#" className="text-white text-hover-white opacity-75 hover-opacity-100">Facebook</a>
                                        <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                        <a href="facebook_pages.php" className="text-white text-hover-white opacity-75 hover-opacity-100">Facebook Pages</a>
                                        <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                        <a href="facebook_dashboard.php" className="text-white text-hover-white opacity-75 hover-opacity-100">ชื่อเพจ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column-fluid">
                        <div className="container">
                            <div className="card card-custom gutter-b">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 mr-7">
                                            <div className="symbol symbol-50 symbol-lg-130">
                                                <img alt="Pic" src="assets/media//users/300_1.jpg" />
                                            </div>
                                        </div>

                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">
                                                <div className="mr-3">
                                                    <p className="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">
                                                        ชื่อเพจ
                                                    </p>
                                                    <div className="d-flex flex-wrap my-2">
                                                        <p className="text-muted text-hover-info font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                            <i className="flaticon-like mr-2"></i>
                                                            1,000 Like
                                                        </p>
                                                        <p className="text-muted text-hover-info font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                            <i className="flaticon-bell mr-2"></i>
                                                            20,000 คน
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">
                                                <div className="mr-3">
                                                    <p className="font-weight-bold mr-4">เปอร์เซ็นต์การตั้งค่า</p>
                                                    <div className="d-flex flex-wrap my-2">
                                                        <div className="progress progress-xs mt-2 mb-2 flex-shrink-0 w-150px w-xl-250px">
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `63%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="font-weight-bolder text-dark ml-4">78%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="separator separator-solid my-7"></div>

                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="col-6 col-md-3 d-flex align-items-center mb-2">
                                            <span className="mr-4">
                                                <i className="fab fa-bitcoin icon-2x text-muted font-weight-bold"></i>
                                            </span>
                                            <div className="d-flex flex-column text-dark-75">
                                                <span className="font-weight-bolder font-size-sm">ยอดรวมทั้งหมด</span>
                                                <span className="font-weight-bolder font-size-h5">249,500</span>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-3 d-flex align-items-center mb-2">
                                            <span className="mr-4">
                                                <i className="fab fa-shopify icon-2x text-muted font-weight-bold"></i>
                                            </span>
                                            <div className="d-flex flex-column text-dark-75">
                                                <span className="font-weight-bolder font-size-sm">ยอดสั่งซื้อทั้งหมด</span>
                                                <span className="font-weight-bolder font-size-h5">1,700</span>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-3 d-flex align-items-center mb-2">
                                            <span className="mr-4">
                                                <i className="far fa-address-card icon-2x text-muted font-weight-bold"></i>
                                            </span>
                                            <div className="d-flex flex-column">
                                                <span className="text-dark-75 font-weight-bolder font-size-sm">ข้อมูลติดต่อ</span>
                                                <a href="#" className="text-primary font-weight-bolder" data-toggle="modal" data-target="#modal_address">
                                                    Setting
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-3 d-flex align-items-center mb-2">
                                            <span className="mr-4">
                                                <i className="fab fa-cc-visa icon-2x text-muted font-weight-bold"></i>
                                            </span>
                                            <div className="d-flex flex-column flex-lg-fill">
                                                <span className="text-dark-75 font-weight-bolder font-size-sm">ข้อมูลธนาคาร</span>
                                                <a href="#" className="text-primary font-weight-bolder" data-toggle="modal" data-target="#modal_bank">
                                                    Setting
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion accordion-solid accordion-panel accordion-svg-toggle mb-10" id="setting_all">
                                <div className="card p-6">
                                    <div className="card-header" id="setting_warehouse">
                                        <div className="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#detail_setting_warehouse" aria-expanded="true" aria-controls="detail_setting_warehouse" role="button">
                                            <div className="card-label">เชื่อมต่อคลังสินค้า <i className="far fa-check-circle text-success"></i><i className="far fa-times-circle text-danger"></i></div>
                                            <span className="svg-icon">
                                                <i className="fas fa-angle-double-right text-primary"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div id="detail_setting_warehouse" className="collapse" aria-labelledby="setting_warehouse" data-parent="#setting_all">
                                        <div className="card-body pt-3">
                                            <div className="table-responsive">
                                                <div className="text-right mb-5">
                                                    <a href="#" className="btn btn-success font-weight-bolder" data-toggle="modal" data-target="#modal_warehouse">
                                                        <i className="fas fa-plus mr-2"></i>เลือกคลังสินค้า
                                                    </a>
                                                </div>
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>ชื่อคลังสินค้า</th>
                                                            <th>ประเภทคลังสินค้า</th>
                                                            <th>สินค้า</th>
                                                            <th>การจัดส่ง</th>
                                                            <th>แก้ไขล่าสุด</th>
                                                            <th>ยกเลิกการเชื่อมต่อ</th>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>ชื่อคลังสินค้า</td>
                                                            <td>ประเภทคลังสินค้า</td>
                                                            <td>20 รายการ</td>
                                                            <td>Kerry (COD)</td>
                                                            <td>15-07-2020</td>
                                                            <td>
                                                                <a href="#" className="btn btn-xs btn-icon btn-light-danger">
                                                                    <i className="flaticon-delete"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>ชื่อคลังสินค้า</td>
                                                            <td>ประเภทคลังสินค้า</td>
                                                            <td>20 รายการ</td>
                                                            <td>Kerry (COD)</td>
                                                            <td>15-07-2020</td>
                                                            <td>
                                                                <a href="#" className="btn btn-xs btn-icon btn-light-danger">
                                                                    <i className="flaticon-delete"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>ชื่อคลังสินค้า</td>
                                                            <td>ประเภทคลังสินค้า</td>
                                                            <td>20 รายการ</td>
                                                            <td>Kerry (COD)</td>
                                                            <td>15-07-2020</td>
                                                            <td>
                                                                <a href="#" className="btn btn-xs btn-icon btn-light-danger">
                                                                    <i className="flaticon-delete"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-6">
                                    <div className="card-header" id="setting_chatbot">
                                        <div className="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#detail_setting_chatbot" aria-expanded="false" aria-controls="detail_setting_chatbot" role="button">
                                            <div className="card-label">ตั้งค่า Chatbot <i className="far fa-check-circle text-success"></i><i className="far fa-times-circle text-danger"></i></div>
                                            <span className="svg-icon">
                                                <i className="fas fa-angle-double-right text-primary"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="detail_setting_chatbot" className="collapse" aria-labelledby="setting_chatbot" data-parent="#setting_all">
                                        <div className="card-body pt-3">
                                            <div className="form-group row reply_to_all">
                                                <div className="col-12">
                                                    <div className="alert alert-custom alert-outline-2x alert-outline-primary bg-primary-o-20">
                                                        <form className="form col-12">
                                                            <div className="form-group row">
                                                                <div className="col-12 col-md-6">
                                                                    <label>The Persistent Menu</label>
                                                                    <input type="text" className="form-control" placeholder="Enter email" />
                                                                </div>
                                                                <div className="col-12 col-md-6">
                                                                    <label>ข้อความเริ่มต้นใช้งาน</label>
                                                                    <input type="text" className="form-control" placeholder="Enter email" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-12 col-md-6">
                                                                    <label>ข้อความต้อนรับ</label>
                                                                    <input type="text" className="form-control" placeholder="Enter email" />
                                                                </div>
                                                                <div className="col-12 col-md-6">
                                                                    <label>Ice Breakers</label>
                                                                    <input type="text" className="form-control" placeholder="Enter email" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-12 col-md-6">
                                                                    <label>ตอบตามคีย์เวิร์ด</label>
                                                                    <input id="keyword_tag" className="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                                                                </div>
                                                                <div className="col-12 col-md-6">
                                                                    <label>&nbsp;</label>
                                                                    <textarea className="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 text-right">
                                                                    <div className="separator separator-solid mb-5"></div>
                                                                    <button type="reset" className="btn btn-primary">บันทึกข้อมูล</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-6">
                                    <div className="card-header" id="setting_comments">
                                        <div className="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#detail_setting_comments" aria-expanded="false" aria-controls="detail_setting_comments" role="button">
                                            <div className="card-label">ตั้งค่า Comments <i className="far fa-check-circle text-success"></i><i className="far fa-times-circle text-danger"></i></div>
                                            <span className="svg-icon">
                                                <i className="fas fa-angle-double-right text-primary"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="detail_setting_comments" className="collapse" aria-labelledby="setting_comments" data-parent="#setting_all">
                                        <div className="card-body pt-3">
                                            <div className="form-group row">
                                                <div className="col-12 col-md-6 col-lg-4">
                                                    <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                        <label className="col-12 p-0">
                                                            <input type="radio" name="select" />
                                                            <span className="mr-5"></span>
                                                            <p className="mt-1">ตั้งค่าเหมือนกันทุกโพสต์</p>
                                                        </label>
                                                    </span>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-4">
                                                    <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                        <label className="col-12 p-0">
                                                            <input type="radio" name="select" />
                                                            <span className="mr-5"></span>
                                                            <p className="mt-1">ตั้งค่าเลือกเฉพาะบางโพสต์</p>
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="form-group row reply_to_all">
                                                <div className="col-12">
                                                    <div className="alert alert-custom alert-outline-2x alert-outline-primary bg-primary-o-20">
                                                        <form className="form col-12">
                                                            <div className="form-group row">
                                                                <div className="col-12 col-md-6 col-lg-4">
                                                                    <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                        <label className="col-12 p-0">
                                                                            <input type="radio" name="comment" />
                                                                            <span className="mr-5"></span>
                                                                            <p className="mt-1">ตอบตามคีย์เวิร์ด</p>
                                                                        </label>
                                                                    </span>
                                                                </div>
                                                                <div className="col-12 col-md-6 col-lg-4">
                                                                    <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                        <label className="col-12 p-0">
                                                                            <input type="radio" name="comment" />
                                                                            <span className="mr-5"></span>
                                                                            <p className="mt-1">ตอบทุกคอมเมนต์</p>
                                                                        </label>
                                                                    </span>
                                                                </div>
                                                                <div className="col-12 col-md-6 col-lg-4">
                                                                    <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                        <label className="col-12 p-0">
                                                                            <input type="radio" name="comment" />
                                                                            <span className="mr-5"></span>
                                                                            <p className="mt-1">ตอบทุกคอมเมนต์ + ดึงเข้าอินบ็อกซ์</p>
                                                                        </label>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="form-group row comments_keyword">
                                                                <div className="col-12 col-md-6">
                                                                    <input id="keyword_tag1" className="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                                                                </div>
                                                                <div className="col-12 col-md-6">
                                                                    <textarea className="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row comments_all">
                                                                <div className="col-12 col-md-6">
                                                                    <textarea className="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 text-right">
                                                                    <div className="separator separator-solid mb-5"></div>
                                                                    <button type="reset" className="btn btn-primary">บันทึกข้อมูล</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group row reply_by_comments">
                                                <div className="col-12">
                                                    <div className="alert alert-custom alert-outline-2x alert-outline-primary bg-primary-o-20">
                                                        <form className="form col-12">
                                                            <div className="form-group row">
                                                                <div className="col-12 col-md-6">
                                                                    <div className="form-group row">
                                                                        <div className="col-12">
                                                                            <textarea className="form-control bg-secondary" rows="5" readOnly="readonly" defaultValue="A simple secondary alert—check it out!"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-6">
                                                                            <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                                <label className="col-12 p-0">
                                                                                    <input type="radio" name="comment1" defaultChecked="checked" />
                                                                                    <span className="mr-5"></span>
                                                                                    <p className="mt-1">ปิดการใช้งาน</p>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-12 col-md-6">
                                                                            <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                                <label className="col-12 p-0">
                                                                                    <input type="radio" name="comment1" />
                                                                                    <span className="mr-5"></span>
                                                                                    <p className="mt-1">ตอบตามคีย์เวิร์ด</p>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-12 col-md-6">
                                                                            <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                                <label className="col-12 p-0">
                                                                                    <input type="radio" name="comment1" />
                                                                                    <span className="mr-5"></span>
                                                                                    <p className="mt-1">ตอบทุกคอมเมนต์</p>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-12 col-md-6">
                                                                            <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                                <label className="col-12 p-0">
                                                                                    <input type="radio" name="comment1" />
                                                                                    <span className="mr-5"></span>
                                                                                    <p className="mt-1">ตอบทุกคอมเมนต์ + ดึงเข้าอินบ็อกซ์</p>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row mt-5">
                                                                        <div className="col-12 comments_keyword">
                                                                            <div className="form-group">
                                                                                <input id="keyword_tag2" className="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <textarea className="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 comments_all">
                                                                            <div className="form-group">
                                                                                <textarea className="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 text-right">
                                                                    <div className="separator separator-solid mb-5"></div>
                                                                    <button type="reset" className="btn btn-primary">บันทึกข้อมูล</button>
                                                                </div>
                                                            </div>

                                                            <div className="separator separator-dashed separator-border-2 separator-danger mb-8 mt-5"></div>

                                                            <div className="form-group row">
                                                                <div className="col-12 col-md-6">
                                                                    <div className="form-group row">
                                                                        <div className="col-12">
                                                                            <textarea className="form-control bg-secondary" rows="5" readOnly="readonly" defaultValue="A simple secondary alert—check it out!"></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <div className="col-12">
                                                                            <img src="assets/media/users/300_25.jpg" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-6">
                                                                            <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                                <label className="col-12 p-0">
                                                                                    <input type="radio" name="comment2" defaultChecked="checked" />
                                                                                    <span className="mr-5"></span>
                                                                                    <p className="mt-1">ปิดการใช้งาน</p>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-12 col-md-6">
                                                                            <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                                <label className="col-12 p-0">
                                                                                    <input type="radio" name="comment2" />
                                                                                    <span className="mr-5"></span>
                                                                                    <p className="mt-1">ตอบตามคีย์เวิร์ด</p>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-12 col-md-6">
                                                                            <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                                <label className="col-12 p-0">
                                                                                    <input type="radio" name="comment2" />
                                                                                    <span className="mr-5"></span>
                                                                                    <p className="mt-1">ตอบทุกคอมเมนต์</p>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-12 col-md-6">
                                                                            <span className="switch switch-sm switch-outline switch-icon switch-success">
                                                                                <label className="col-12 p-0">
                                                                                    <input type="radio" name="comment2" />
                                                                                    <span className="mr-5"></span>
                                                                                    <p className="mt-1">ตอบทุกคอมเมนต์ + ดึงเข้าอินบ็อกซ์</p>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row mt-5">
                                                                        <div className="col-12 comments_keyword">
                                                                            <div className="form-group">
                                                                                <input id="keyword_tag3" className="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <textarea className="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 comments_all">
                                                                            <div className="form-group">
                                                                                <textarea className="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 text-right">
                                                                    <div className="separator separator-solid mb-5"></div>
                                                                    <button type="reset" className="btn btn-primary">บันทึกข้อมูล</button>
                                                                </div>
                                                            </div>

                                                            <div className="separator separator-dashed separator-border-2 separator-danger mb-8 mt-5"></div>

                                                            <div className="form-group row">
                                                                <a href="#" className="btn btn-block btn-light-primary btn-pill">โหลดข้อมูลเพิ่ม</a>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-6">
                                    <div className="card-header" id="setting_live">
                                        <div className="card-title font-size-h4 text-dark collapsed" data-toggle="collapse" data-target="#detail_setting_live" aria-expanded="false" aria-controls="detail_setting_live" role="button">
                                            <div className="card-label">ตั้งค่า Live <i className="far fa-check-circle text-success"></i><i className="far fa-times-circle text-danger"></i></div>
                                            <span className="svg-icon">
                                                <i className="fas fa-angle-double-right text-primary"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="detail_setting_live" className="collapse" aria-labelledby="setting_live" data-parent="#setting_all">
                                        <div className="card-body pt-3">
                                            <div className="form-group row reply_to_all">
                                                <div className="col-12">
                                                    <div className="alert alert-custom alert-outline-2x alert-outline-primary bg-primary-o-20">
                                                        <form className="form col-12">
                                                            <div className="form-group row">
                                                                <div className="col-12 col-md-6">
                                                                    <label>ตอบตามคีย์เวิร์ด</label>
                                                                    <input id="keyword_tag4" className="form-control tagify" name='tags3' placeholder="คีย์เวิร์ด" />
                                                                </div>
                                                                <div className="col-12 col-md-6">
                                                                    <label>&nbsp;</label>
                                                                    <textarea className="form-control" rows="5" name='tags3' placeholder="คำตอบ"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 text-right">
                                                                    <div className="separator separator-solid mb-5"></div>
                                                                    <button type="reset" className="btn btn-primary">บันทึกข้อมูล</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="modal_address" tabIndex="-1" role="dialog" aria-labelledby="modal_address" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">ข้อมูลติดต่อ</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i aria-hidden="true" className="ki ki-close"></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="form">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <label>ข้อมูลติดต่อ</label>
                                            <textarea className="form-control" rows="5" placeholder="ข้อมูลติดต่อ"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light-danger font-weight-bold" data-dismiss="modal">ยกเลิก</button>
                                <button type="button" className="btn btn-primary font-weight-bold">บันทึกข้อมูล</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="modal_bank" tabIndex="-1" role="dialog" aria-labelledby="modal_bank" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">ข้อมูลธนาคาร</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i aria-hidden="true" className="ki ki-close"></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="form">
                                    <div className="row">
                                        <div className="col-12 col-md-4 mb-5">
                                            <label>ชื่อธนาคาร</label>
                                            <input type="text" className="form-control" placeholder="Enter email" />
                                        </div>
                                        <div className="col-12 col-md-4 mb-5">
                                            <label>ชื่อเจ้าของบัญชี</label>
                                            <input type="text" className="form-control" placeholder="ชื่อเจ้าของบัญชี" />
                                        </div>
                                        <div className="col-12 col-md-4 mb-5">
                                            <label>เลขที่บัญชี</label>
                                            <input type="text" className="form-control" placeholder="เลขที่บัญชี" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <a href="#" className="btn btn-success font-weight-bolder">
                                                <i className="fas fa-plus mr-2"></i>เพิ่มจำนวนธนาคาร
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light-danger font-weight-bold" data-dismiss="modal">ยกเลิก</button>
                                <button type="button" className="btn btn-primary font-weight-bold">บันทึกข้อมูล</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="modal_warehouse" tabIndex="-1" role="dialog" aria-labelledby="modal_warehouse" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">เลือกคลังสินค้า</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i aria-hidden="true" className="ki ki-close"></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="form">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <div className="checkbox-inline">
                                                        <label className="checkbox">
                                                            <input name="" type="checkbox" className="mr-2" />
                                                            <span></span>ชื่อคลังสินค้า
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <div className="checkbox-inline">
                                                        <label className="checkbox">
                                                            <input name="" type="checkbox" className="mr-2" />
                                                            <span></span>ชื่อคลังสินค้า
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <div className="checkbox-inline">
                                                        <label className="checkbox">
                                                            <input name="" type="checkbox" className="mr-2" />
                                                            <span></span>ชื่อคลังสินค้า
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <div className="checkbox-inline">
                                                        <label className="checkbox">
                                                            <input name="" type="checkbox" className="mr-2" />
                                                            <span></span>ชื่อคลังสินค้า
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light-danger font-weight-bold" data-dismiss="modal">ยกเลิก</button>
                                <button type="button" className="btn btn-primary font-weight-bold">บันทึกข้อมูล</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
