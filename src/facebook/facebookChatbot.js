import React, { Component } from 'react'

export default class facebookChatbot extends Component {
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
                  <h2 className="text-white font-weight-bold my-2 mr-5">Facebook Chatbot</h2>
                  <div className="d-flex align-items-center font-weight-bold my-2">
                    <a href="dashboard.php" className="opacity-75 hover-opacity-100"><i className="flaticon2-shelter text-white icon-1x"></i></a>
                    <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                    <a href="#" className="text-white text-hover-white opacity-75 hover-opacity-100">ฟังก์ชั่นการทำงาน</a>
                    <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                    <a href="#" className="text-white text-hover-white opacity-75 hover-opacity-100">Facebook</a>
                    <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                    <a href="facebook_chatbot.php" className="text-white text-hover-white opacity-75 hover-opacity-100">Facebook Chatbot</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column-fluid">
            <div className="container">
              <div className="card card-custom gutter-b">
                <div className="card-header">
                  <div className="card-title">
                    <h4 className="card-label">Chatbot (ใช้กับทุก Pages)</h4>
                  </div>
                </div>
                <form className="form">
                  <div className="card-body">
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
                  </div>
                  <div className="card-footer">
                    <button type="reset" className="btn btn-primary mr-2">บันทึกข้อมูล</button>
                    <button type="reset" className="btn btn-light-danger">ยกเลิก</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
