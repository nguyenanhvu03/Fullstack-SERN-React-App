import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';



class OutStandingDoctor extends Component {

    render() {
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <button className='btn-section'>Xem them</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>GSTS, Nguyen Van A</div>
                                        <div>Co xuong khop</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>GSTS, Nguyen Van A</div>
                                        <div>Co xuong khop 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className='bg-image section-outstanding-doctor' />
                                        </div>
                                        <div className='position text-center'>
                                            <div>GSTS, Nguyen Van A</div>
                                            <div>Co xuong khop 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>GSTS, Nguyen Van A</div>
                                        <div>Co xuong khop 4</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>GSTS, Nguyen Van A</div>
                                        <div>Co xuong khop 5</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
