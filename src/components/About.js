import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p style={{fontFamily: 'IBMPlexSansKR-Medium'}} dangerouslySetInnerHTML={{__html: resumeData.aboutme}}>
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p style={{fontFamily: 'IBMPlexSansKR-Medium'}} className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}