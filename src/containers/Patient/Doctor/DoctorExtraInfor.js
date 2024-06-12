import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false
        }
    }
    async componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }
    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }
    render() {
        let { isShowDetailInfor } = this.state;
        return (
            <div className='doctor-extra-info-container'>
                <div className='content-up'>
                    <div className='text-address'>Địa chỉ khám</div>
                    <div className='name-clinic'>Phong kham chuyen khoa da lieu</div>
                    <div className='detail-address'>linh chieu, thu duc, tp ho chi minh</div>
                </div>
                <div className='content-dowm'>
                    {isShowDetailInfor === false &&
                        <div className='short-infor'>
                            GIA KHAM: 250.000d.
                            <span onClick={() => this.showHideDetailInfor(true)}>
                                Xêm chi tiết
                            </span>
                        </div>
                    }

                    {isShowDetailInfor === true &&
                    <>
                    <div className='title-price'>GIÁ KHÁM: .</div>
                    <div className='detail-infor'>
                        <div className=''>
                            <span className='left'> Giá khám</span>
                            <span className='right'> 250.000đ</span>
                        </div>
                        <div className='note'>
                            Được ưu tiên khám trước khi đặt khám qua bookdoctor. Giá khám cho người nước ngoài là 30 USD
                        </div>
                    </div>
                    <div className='payment'>
                        Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ
                    </div>
                    <div className='hide-price'>
                        <span onClick={() => this.showHideDetailInfor(false)}>
                            An bang gia
                        </span>
                    </div>
                    </>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
