import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './DetailSpecialty.scss';
import HomeHeader from '../../HomePage/HomeHeader';

class DetailSpecialty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Initial state can be defined here
        };
    }

    async componentDidMount() {
        // Add any data fetching or initialization logic here
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            // Handle language change
        }
    }

    render() {
        return (
            <>
                <HomeHeader />
                <div>New Se</div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language // Assuming you have language in your state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // Add any actions you need to dispatch here
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
