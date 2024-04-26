import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


import Slider from 'react-slick';
// import "../slick-carousel/slick/slick.css";



class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <h1>ABOUT US</h1>
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
