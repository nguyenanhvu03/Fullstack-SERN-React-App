import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './About.scss'


import Slider from 'react-slick';
// import "../slick-carousel/slick/slick.css";



class About extends Component {
    render() {
        return (
            <div className='section-about'>
                <div className='about-content row'>
                    <div className='col-5 left'>
                        <h3>Contact Information</h3>
                        <p>Address: 7/23 đường 14, P.Linh Chiểu, TP.Thủ Đức, TP.Hồ Chí Minh</p>
                        <p>Phone: +84 332 108 102</p>
                        <p>Email: nguyenanhvu.tdc2223@gmail.com</p>
                        <p>Zalo: 0332108102</p>
                        <p>Thủ Đức ngày 12/07/2024</p>
                    </div>
                    <div className='col-7'>
                        <div className='center'>
                            <h3>BOOKING DOCTOR</h3>
                            <h5>Đặt lịch khám toàn quốc, Nền tảng y tế chăm sóc sức khỏe toàn diện</h5>
                        </div>
                        {/* <div className='options'>
                            <div className='options-child'>
                                <p className='text-child'><i className='far fa-hospital '></i><FormattedMessage id="banner.child1" /></p>
                            </div>
                            <p className='options-child'>
                                <div className='text-child'><i className='fas fa-mobile-alt'></i><FormattedMessage id="banner.child2" /></div>
                            </p>
                            <p className='options-child'>
                                <div className='text-child'><i className='fas fa-procedures'></i><FormattedMessage id="banner.child3" /></div>
                            </p>
                            <p className='options-child'>
                                <div className='text-child'><i className='fas fa-flask'></i><FormattedMessage id="banner.child4" /></div>
                            </p>
                            <p className='options-child'>
                                <div className='text-child'><i className='fas fa-user-md'></i><FormattedMessage id="banner.child5" /></div>
                            </p>
                            <p className='options-child'>
                                <div className='text-child'><i className='fas fa-briefcase-medical'></i><FormattedMessage id="banner.child6" /></div>
                            </p>
                        </div> */}
                        <div className='content-down'>
                            <div className='options'>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='far fa-hospital'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='fas fa-mobile-alt'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='fas fa-procedures'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='fas fa-flask'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='fas fa-user-md'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child5" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='fas fa-briefcase-medical'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child6" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-5 right'>
                        <h3>Contact Information</h3>
                        <div className='icon-child'><i className='far fa-hospital'></i></div>
                        <p>Phone: +84 123 456 789</p>
                        <p>Email: info@example.com</p>
                    </div> */}
                </div>
                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {

    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
