import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss'
import { Modal } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import _ from 'lodash'
import DatePicker from '../../../../components/Input/DatePicker';
import * as actions from '../../../../store/actions'
import { LANGUAGES } from '../../../../utils';
import Select from 'react-select';
import { postPatientBookAppointment } from '../../../../services/userService';
import { toast } from 'react-toastify';

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
            selectedGender: '',
            doctorId: '',

            genders: '',
            timeType: '',

        }
    }

    async componentDidMount() {
        this.props.getGender();
    }

    builDataGender = (data) => {
        let result = [];
        let language = this.props.language;

        if (data && data.length > 0) {
            data.map(item => {
                let object = {};
                object.label = language === LANGUAGES.VI ? item.valueVi : item.valueEn;
                object.value = item.keyMap;
                result.push(object)
            })
        }
        return result;
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            this.setState({
                genders: this.builDataGender(this.props.genders)
            })
        }
        if (this.props.genders !== prevProps.genders) {

            this.setState({
                genders: this.builDataGender(this.props.genders)
            })
        }
        if (this.props.dataTime !== prevProps.dataTime) {
            if (this.props.dataTime && !_.isEmpty(this.props.dataTime)) {
                let doctorId = this.props.dataTime.doctorId;
                let timeType = this.props.dataTime.timeType;
                this.setState({
                    doctorId: doctorId,
                    timeType: timeType
                })
            }
        }
    }

    handleonchangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        })
    }
    handleOnchangeDatePicker = (date) => {
        this.setState({
            birthday: date[0]
        })
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({
            selectedGender: selectedOption
        })
    }

    handleConfirmBooking = async () => {
        // Validate input
        let date = new Date(this.state.birthday).getTime(); // Chuyển đổi ngày sinh thành milliseconds
    
        // Gọi API đặt lịch hẹn
        let res = await postPatientBookAppointment({
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
            reason: this.state.reason,
            date: date,
            selectedGender: this.state.selectedGender.value,
            doctorId: this.state.doctorId,
            timeType: this.state.timeType,
        });
    
        // Xử lý kết quả trả về từ API
        if (res && res.errCode === 0) {
            // Nếu thành công, hiển thị thông báo thành công và đóng cửa sổ đặt lịch
            toast.success('Booking a new appointment succeed!');
            this.props.closeBookingClose(); // Gọi hàm đóng cửa sổ (được truyền từ props)
        } else {
            // Nếu có lỗi, hiển thị thông báo lỗi
            toast.error('Booking a new appointment error!');
        }
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
                                isShowDescriptionDoctor={false}
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
                                <DatePicker
                                    onChange={this.handleOnchangeDatePicker}
                                    className='form-control'
                                    value={this.state.birthday}
                                />
                            </div>
                            <div className='col-6 form-droup'>
                                <label>Giới tính</label>
                                <Select
                                    value={this.state.selectedGender}
                                    onChange={this.handleChangeSelect}
                                    options={this.state.genders}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='booking-modal-footer'>
                        <button className='btn-booking-confirm'
                            onClick={() => this.handleConfirmBooking()}>Xác nhận</button>
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
        isLoggedIn: state.user.isLoggedIn,
        genders: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGender: () => dispatch(actions.fetchGenderStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
