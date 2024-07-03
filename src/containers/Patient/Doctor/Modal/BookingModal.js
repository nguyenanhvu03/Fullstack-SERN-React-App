import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss'
import { Modal } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import _ from 'lodash'

class BookingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            reason: '',
            birthday: '',
            gender: '',
            doctorId: '',
        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    handleonchangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = {...this.state};
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        })
    }
    render() {
        let { isOpenModal, closeBookingClose, dataTime } = this.props;
        let doctorId = '';
        if (dataTime && !_.isEmpty(dataTime)) {
            doctorId = dataTime.doctorId
        }
        // let doctorId = dataTime && !_.isEmpty(dataTime) ? dataTime.doctorId : '';
        console.log('check', this.state)
        return (
            <Modal
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size='lg'
                centered
            >
                <div className='booking-modal-content'>
                    <div className='booking-modal-header'>
                        <span className='left'>Thong tin dat lich kham benh</span>
                        <span
                            className='right'
                            onClick={closeBookingClose}
                        ><i className='fas fa-times'></i></span>
                    </div>
                    <div className='booking-modal-body'>
                        { }
                        <div className='doctor-infor'>
                            <ProfileDoctor
                                doctorId={doctorId}
                                isShowDescriptionDoctor = {false}
                                dataTime={dataTime}
                            />
                        </div>
                        <div className='row'>
                            <div className='col-6 form-droup'>
                                <label>Họ tên</label>
                                <input className='form-control' 
                                value={this.state.fullName}
                                onChange={(event) => this.handleonchangeInput(event, 'fullName')}
                                />
                            </div>
                            <div className='col-6 form-droup'>
                                <label>Số điện thoại</label>
                                <input className='form-control' 
                                value={this.state.phoneNumber}
                                onChange={(event) => this.handleonchangeInput(event, 'phoneNumber')}
                                />
                            </div>
                            <div className='col-6 form-droup'>
                                <label>Địa chỉ Email</label>
                                <input className='form-control' 
                                value={this.state.email}
                                onChange={(event) => this.handleonchangeInput(event, 'email')}
                                />
                            </div>
                            <div className='col-6 form-droup'>
                                <label>Địa chỉ liên hệ</label>
                                <input className='form-control' 
                                value={this.state.address}
                                onChange={(event) => this.handleonchangeInput(event, 'address')}
                                />
                            </div>
                            <div className="col-12 form-group">
                                <label>Lí do khám</label>
                                <input className="form-control double-height" 
                                value={this.state.reason}
                                onChange={(event) => this.handleonchangeInput(event, 'reason')}
                                />
                            </div>
                            <div className='col-6 form-droup'>
                                <label>Ngay sinh</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-6 form-droup'>
                                <label>Giới tính</label>
                                <input className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className='booking-modal-footer'>
                        <button className='btn-booking-confirm'
                            onClick={closeBookingClose}>Xác nhận</button>
                        <button className='btn-booking-cancel'
                            onClick={closeBookingClose}>Cancel</button>
                    </div>
                </div>

            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
