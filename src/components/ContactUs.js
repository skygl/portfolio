import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{fontFamily: 'IBMPlexSansKR-Medium'}}>
              아래 연락처로 자유롭게 연락 주세요!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email :&nbsp;
                  {resumeData.email}
                </h4>
                  <h4>Phone :&nbsp;
                      {resumeData.phoneNumber}
                  </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}