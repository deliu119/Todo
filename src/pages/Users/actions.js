import { LOAD_ALL_USERS, LOAD_ALL_USERS_SUCCESS ,LOAD_ALL_USERS_ERROR } from "./constants";

export const loadAllUsers = () => {
    return{
        type: LOAD_ALL_USERS,
        payload:{},
    }
};

export const loadAllUsersSuccess = (users) => {
    return{
        type: LOAD_ALL_USERS_SUCCESS,
        payload:{
            users
        },
    }
};

export const loadAllUserError = (error) => {
    return{
        type: LOAD_ALL_USERS_ERROR,
        payload:{
            error
        },
    }
};