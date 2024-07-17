import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './DetailClinic.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import { getAllDetailClinicById, getAllCodeService } from '../../../services/userService';
import _ from 'lodash';
import { LANGUAGES } from '../../../utils';


class DetailClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [],
            dataDetailClinic: {},
        };
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;

            let res = await getAllDetailClinicById({
                id: id
            });
            if (res && res.errCode === 0) {
                let data = res.data;
                let arrDoctorId = [];
                if (data && !_.isEmpty(res.data)) {
                    let arr = data.doctorClinic;
                    if (arr && arr.length > 0) {
                        arr.map(item => {
                            arrDoctorId.push(item.doctorId)
                        })
                    }
                }
                this.setState({
                    dataDetailClinic: res.data,
                    arrDoctorId: arrDoctorId,
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            // Handle language change
        }
    }

    render() {
        let { arrDoctorId, dataDetailClinic } = this.state;
        console.log(this.state)
        let { language } = this.props
        return (
            <div>
                <HomeHeader />
                <div className='description-specialty'>
                    {dataDetailClinic && !_.isEmpty(dataDetailClinic)
                        &&
                        <>
                            <div className='clinic-name'>{dataDetailClinic.name}</div>
                            <div div dangerouslySetInnerHTML={{ __html: dataDetailClinic.descriptionHTML }}></div>
                        </>
                    }
                </div>
                
                <div className='detail-specialty-container'>

                    <div className='detail-specialty-body'>
                        {arrDoctorId && arrDoctorId.length > 0 && arrDoctorId.map((item, index) => {
                            return (
                                <div className='each-doctor' key={index}>
                                    <div className='dt-content-left'>
                                        <div className='profile-doctor'>
                                            <ProfileDoctor
                                                doctorId={item}
                                                isShowDescriptionDoctor={true}
                                                isShowLinkDetail={true}
                                                isShowPrice={false}
                                            //dataTime={dataTime}
                                            />
                                        </div>
                                    </div>

                                    <div className='dt-content-right'>
                                        <div className='doctor-schedule'>
                                            <DoctorSchedule
                                                doctorIdFromParent={item}
                                            />
                                        </div>
                                        <div className='doctor-extra-infor'>
                                            <DoctorExtraInfor
                                                doctorIdFromParent={item}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div >
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
