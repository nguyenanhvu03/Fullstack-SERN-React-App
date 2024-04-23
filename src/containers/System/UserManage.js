import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService } from '../../services/userService';
import ModalUser from './ModalUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let respone = await getAllUsers('ALL');
        if (respone && respone.errCode === 0) {
            this.setState({
                arrUsers: respone.users
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,

        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,

        })
    }

    createNewUser = async (data) => {
        try {
            let respone = await createNewUserService(data);
            if (respone && respone.errCode !== 0) {
                alert(respone.errMessage)
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })
            }

        } catch (e) {
            console.log(e)
        }
    }
    /**
     * Life cycle
     * run component:
     * 1. run construct -> init state
     * 2. did mount (set state)
     * 3. render
     */

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                <div className='title text-center'>Manage Users</div>
                <div className='mx-1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    ><i className='fas fa-plus'></i> Add new users</button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className='fas fa-pencil-alt'></i></button>
                                            <button className='btn-delete'><i className='fas fa-trash'></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
