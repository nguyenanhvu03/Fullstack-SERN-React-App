import actionTypes from './actionTypes';
import { getAllCodeService } from "../../services/userService"

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart =  () => {
    return async(dispatch, getState) => {
        try {
            dispatch({type: actionTypes.FETCH_GENDER_START})
            let res = await getAllCodeService('GENDER');
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log(e)
        }
    }

}

export const fetchPositionStart =  () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('POSITION');
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionFailed error:',e)
        }
    }

}

export const fetchRoleStart =  () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleFailed error:',e)
        }
    }

}
export const fetchGenderSuccess = (genderDate) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderDate
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionSuccess = (positionDate) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionDate
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = (roleDate) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleDate
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


