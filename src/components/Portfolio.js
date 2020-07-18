/*global $*/
import React, {Component} from 'react';
import 'swiper/swiper-bundle.css'
import Swiper, {Pagination, Navigation, Autoplay} from 'swiper'

export default class Porfolio extends Component {
    componentDidMount() {
        this.swiper = new Swiper('.swiper-container', {
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            speed: 2000,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true
        });
    }

    componentWillUnmount() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    }

    render() {
        Swiper.use([Swiper, Pagination, Navigation, Autoplay]);
        let resumeData = this.props.resumeData;
        $('.open-popup-link').magnificPopup({
            type: 'inline',
            midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Projects.</h1>
                        <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
                            <div className="swiper-container">
                              <div className="swiper-wrapper">
                                    {
                                        resumeData.portfolio && resumeData.portfolio.map((item, i) => {
                                            return (
                                                <div style={{display: "flex", justifyContent: "center"}} className="swiper-slide">
                                                    <div className="columns portfolio-item">
                                                        <div className="item-wrap">
                                                            <a className="open-popup-link" href={`#modal-${i}`}>
                                                                <img src={`${item.imgurl}`} className="item-img"/>
                                                                <div className="overlay">
                                                                    <div className="portfolio-item-meta">
                                                                        <h5 style={{fontFamily: 'IBMPlexSansKR-Medium'}}>{item.name}</h5>
                                                                        <p style={{fontFamily: 'IBMPlexSansKR-Medium'}}>{item.description}</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div id={`modal-${i}`} className="white-popup popup-modal mfp-hide">
                                                        <div className="modal-box">
                                                            <div className="image-box">
                                                                <img src={`${item.preview}`}
                                                                     alt={`${item.name} preview images`}/>
                                                            </div>
                                                            <div className="description-box">
                                                                <h2>{item.name}</h2>
                                                                <p style={{fontFamily: 'IBMPlexSansKR-Regular'}}>{item.description}</p>
                                                                <hr/>
                                                                <h3>Dev Period</h3>
                                                                <p style={{fontFamily: 'IBMPlexSansKR-Medium'}}>{item.period}</p>
                                                                <h3>Stack</h3>
                                                                <p style={{fontFamily: 'IBMPlexSansKR-Medium'}}>{item.stack}</p>
                                                                <h3>Contribute</h3>
                                                                <p style={{fontFamily: 'IBMPlexSansKR-Medium'}}>{item.contribute}</p>
                                                                {item.link &&
                                                                <a href={item.link} target="_blank"
                                                                   style={{fontFamily: 'IBMPlexSansKR-Medium'}}>link&nbsp;
                                                                    <i className="fa fa-link"></i>
                                                                </a>}
                                                                {item.github &&
                                                                <a href={item.github} target="_blank"
                                                                   style={{fontFamily: 'IBMPlexSansKR-Medium'}}>github&nbsp;
                                                                    <i className="fa fa-github"></i>
                                                                </a>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className="swiper-pagination swiper-pagination-black"/>

                                <div className="swiper-button-prev swiper-button-black"/>
                                <div className="swiper-button-next swiper-button-black"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}