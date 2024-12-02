import { REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS } from "./ActionType"
import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./ActionType";
import { USER_REQUEST,USER_SUCCESS,USER_FAILURE } from "./ActionType";
import {LOGOUT} from './ActionType';


const initialState = {
    loading:false,
    users:null,
    jwt:null,
    error:null
}

const AuthReducer = (state=initialState,action) => {
    switch(action.type)
    {
        case REGISTER_REQUEST:return{...state,loading:true};
        case REGISTER_SUCCESS:return{...state,jwt:action.payload,loading:false};
        case REGISTER_FAILURE:return{...state,error:action.payload};
        case LOGIN_REQUEST:return{...state,loading:true,jwt:null,error:null};
        case LOGIN_SUCCESS:return{...state,jwt:action.payload,loading:false};
        case LOGIN_FAILURE:return{...state,error:action.payload};
        case USER_REQUEST:return{...state,loading:true,error:null};
        case USER_SUCCESS:return{...state,users:action.payload,loading:false};
        case USER_FAILURE:return{...state,error:action.payload};
        case LOGOUT:return{...initialState};
        default:return state;
    }
}

export default AuthReducer;