import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import './HomeFooter.scss'



class HomeFooter extends Component {

    render() {
        return (
            <div className='footer'>
                <div className='footer-content '>
                <div className='left'>@ Nguyễn Anh Vũ - 2024</div>
                <div className='ft'>
                    <p><i className='fas fa-mobile-alt'></i>  Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng: Android - iPhone/iPad - Khác</p>
                </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
