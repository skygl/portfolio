import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3 style={{fontFamily: 'IBMPlexSansKR-Medium'}}>{item.UniversityName}</h3>
                          <p  style={{fontFamily: 'IBMPlexSansKR-Regular'}}className="info">
                          {item.specialization}
                          <span>&bull;</span> <em style={{fontFamily: 'IBMPlexSansKR-Regular'}} className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

                {
                    resumeData.skillsCategory && resumeData.skillsCategory.map((item) => {
                        return(
                            <div className="bars">
                                <h2><span>{item.name.toUpperCase()}</span></h2>
                                <ul className="skills">
                                    {
                                        item.skills && item.skills.map((skill) => {
                                            return (
                                                <li>
                                                  <span className={`bar-expand ${skill.skillname.toLowerCase().replace(".","_")}`}>
                                                  </span><em>{skill.skillname}</em>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
   			</div>

         </div>

      </section>
    );
  }
}