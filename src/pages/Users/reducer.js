import produce from  'immer';
import {
    LOAD_ALL_USERS,
    LOAD_ALL_USERS_SUCCESS,
    LOAD_ALL_USERS_ERROR
} from './constants';


const initialState = {
    loading: false,
    users: [],
}

const usersReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch(action.type) {
            case LOAD_ALL_USERS:
                draft.loading = true;
                break;
            case LOAD_ALL_USERS_SUCCESS:
                draft.loading = false;
                draft.users = action.payload.users.results;
                break;
            case LOAD_ALL_USERS_ERROR:
                draft.loading = false;
                break;
            default:
                break;
        }
    });

export default usersReducer;