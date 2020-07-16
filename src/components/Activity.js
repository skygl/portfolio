/*global $*/
import React, { Component } from 'react';

export default class Activity extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const items = ['writings', 'presentations', 'studies'];
    return (
        <section id="activity">
            {items.map(i => {
                return (
                    <div className={`row ${i}`}>

                        <div className="three columns header-col">
                            <h1><span>{i[0].toUpperCase() + i.slice(1)}</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            {
                                resumeData[i] && resumeData[i].map((item)=>{
                                    return(
                                        <div className="row item">
                                            <div className="twelve columns">
                                                <h3 style={{fontFamily: 'IBMPlexSansKR-Medium'}}>{item.name}</h3>
                                                <p style={{fontFamily: 'IBMPlexSansKR-Light'}}>
                                                    {item.description}
                                                </p>
                                                {item.type === 'link' ?
                                                    <a href={item.url} target="_blank" style={{fontFamily: 'IBMPlexSansKR-Regular'}}>link&nbsp;
                                                        <i className="fa fa-link"></i>
                                                    </a>
                                                    : (item.type === 'github' ?
                                                        <a href={item.url} target="_blank" style={{fontFamily: 'IBMPlexSansKR-Regular'}}>github&nbsp;
                                                            <i className="fa fa-github"></i>
                                                        </a>
                                                        : <a href={item.url} target="_blank" style={{fontFamily: 'IBMPlexSansKR-Regular'}}>youtube&nbsp;
                                                            <i className="fa fa-youtube"></i>
                                                        </a>)}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </section>
    );
  }
}