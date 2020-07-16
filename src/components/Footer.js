import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li>
              <a href={resumeData.socialLinks[0].url}>
              <i className={resumeData.socialLinks[0].className} />
              </a>
            </li>
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}