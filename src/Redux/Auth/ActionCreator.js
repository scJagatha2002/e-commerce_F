
import { REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS } from "./ActionType"
import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./ActionType";
import { USER_REQUEST,USER_SUCCESS,USER_FAILURE } from "./ActionType";
import {LOGOUT} from './ActionType';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem("jwt");
const navigate = useNavigate


const registerRequest = () => ({
    type: REGISTER_REQUEST
});

const registerSuccess = (user_jwt) => ({
    type: REGISTER_SUCCESS,
    payload: user_jwt
});

const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error
});

export const registerUser = (UserData) => {
    
    
    return async function (dispatch) {
        dispatch(registerRequest());
        try {
            const response = await axios.post('http://localhost:5454/auth/signup',UserData);
            const user = response.data;
            if (user.jwt) {
                localStorage.setItem("jwt",user.jwt);
            }
            dispatch(registerSuccess(user.jwt));
            console.log(user);
           
            
        } catch (error) {
            alert("Email already used, Registration unsuccessful");
            dispatch(registerFailure(error.message));
            throw error;
            
            
        }
    }
}

const loginRequest = () => ({
    type: LOGIN_REQUEST
});

const loginSuccess = (user_jwt) => ({
    type: LOGIN_SUCCESS,
    payload: user_jwt
});

const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});

export const loginUser = (UserData) => {
    return async function (dispatch) {
        dispatch(loginRequest());
        try {
            const response = await axios.post('http://localhost:5454/auth/login',UserData);
            const user = response.data;
            if (user.jwt) {
                localStorage.setItem("jwt",user.jwt);
            }
            dispatch(loginSuccess(user.jwt));
            console.log(user);

        } catch (error) {
            dispatch(loginFailure(error.message));

        }
    }
}

const userRequest = () => ({
    type: USER_REQUEST
});

const userSuccess = (users) => ({
    type: USER_SUCCESS,
    payload: users
});

const userFailure = (error) => ({
    type: USER_FAILURE,
    payload: error
});

export const User = () => {
    return async function (dispatch) {
        dispatch(userRequest());
        try {
            const response =  await axios.get('http://localhost:5454/api/users/profile',{
                headers:{
                    "Authorization" : `Bearer ${token}`
                }
            });
            const user = response.data;
            dispatch(userSuccess(user))
            console.log(response.data);

        } catch (error) {
            dispatch(userFailure(error.message));

        }
    }
}

const Logout = () =>({
    type:LOGOUT
});

export const logout = () => (dispatch) => {
    dispatch(Logout());
};

