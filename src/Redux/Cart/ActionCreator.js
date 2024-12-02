import {FIND_USER_CART_REQUEST,FIND_USER_CART_SUCCESS,FIND_USER_CART_FAILURE} from "./ActionType";
import {ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE} from "./ActionType";
import {DELETE_CART_ITEM_REQUEST,DELETE_CART_ITEM_SUCCESS,DELETE_CART_ITEM_FAILURE} from "./ActionType";
import {UPDATE_CART_ITEM_REQUEST,UPDATE_CART_ITEM_SUCCESS,UPDATE_CART_ITEM_FAILURE} from "./ActionType";
import {GET_CART_ITEM_REQUEST,GET_CART_ITEM_SUCCESS,GET_CART_ITEM_FAILURE} from "./ActionType";
import { api } from "../../ApiConfig.js";




const user_cart_request = () => ({
    type:FIND_USER_CART_REQUEST
})

const user_cart_success = (cart) => ({
    type:FIND_USER_CART_SUCCESS,
    payload:cart
})

const user_cart_failure = (error) => ({
    type:FIND_USER_CART_FAILURE,
    payload:error
})

export const findUserCart = () => {

    return async function(dispatch)  {
        dispatch(user_cart_request());
        try {

            const response = await api.get('/api/cart/')
            if(response.data)
            {
                
                dispatch(user_cart_success(response.data));
                
                console.log(response.data);
            }
            
        } catch (error) {
            dispatch(user_cart_failure(error.message));
        }
    }
}

const add_user_cart_request = () => ({
    type:ADD_TO_CART_REQUEST
})

const add_user_cart_success = (cartItem) => ({
    type:ADD_TO_CART_SUCCESS,
    payload:cartItem
})

const add_user_cart_failure = (error) => ({
    type:ADD_TO_CART_FAILURE,
    payload:error
})



export const addUserCart = (userId,product) => {

    
    
    return async function(dispatch)  {
        dispatch(add_user_cart_request());
        try {
           
            const response = await api.post(`/api/cart/add/${userId}`,product)
            if( response.data)
            {
                dispatch(add_user_cart_success(response.data));
                console.log("response",response.data);
                alert("Item added to cart successfully");
                
                

            }
            
        } catch (error) {
            
            dispatch(add_user_cart_failure(error.message));
        }
    }
}

const delete_cart_item_request = () => ({
    type:DELETE_CART_ITEM_REQUEST
})

const delete_cart_item_success = (cartItem) => ({
    type:DELETE_CART_ITEM_SUCCESS,
    payload:cartItem
})

const delete_cart_item_failure = (error) => ({
    type:DELETE_CART_ITEM_FAILURE,
    payload:error
})


export const deleteCartItem = (id) => {

    return async function(dispatch)  {
        dispatch(delete_cart_item_request());
        try {

            const response = await api.delete(`/api/cartService/delete/${id}`)
            if(response.data)
            {
                dispatch(delete_cart_item_success(response.data));
               
                console.log(response.data);
                dispatch(findUserCart())
            }
            
        } catch (error) {
            dispatch(delete_cart_item_failure(error.message));
        }
    }
}

const update_cart_item_request = () => ({
    type:UPDATE_CART_ITEM_REQUEST
})

const update_cart_item_success = (cartItem) => ({
    type:UPDATE_CART_ITEM_SUCCESS,
    payload:cartItem
})

const update_cart_item_failure = (error) => ({
    type:UPDATE_CART_ITEM_FAILURE,
    payload:error
})

export const updateCartItem = (id,quantity) => {

    return async function(dispatch)  {
        dispatch(update_cart_item_request());
        try {

            const response = await api.put(`/api/cartService/update/${id}`,quantity);
            if(response.data)
            {
                dispatch(update_cart_item_success(response.data));
                console.log(response.data);
                dispatch(findUserCart());
            }
            
        } catch (error) {
            dispatch(update_cart_item_failure(error.message));
        }
    }
}

const get_cart_item_request = () => ({
    type:GET_CART_ITEM_REQUEST
})

const get_cart_item_success = (cartItem) => ({
    type:GET_CART_ITEM_SUCCESS,
    payload:cartItem
})

const get_cart_item_failure = (error) => ({
    type:GET_CART_ITEM_FAILURE,
    payload:error
})

export const getCartItem = (id) => {
    return async function(dispatch)  {
        dispatch(get_cart_item_request());
        try {;
            const response = await api.get(`/api/cartService/update/${id}`)
            if(response.data)
            {
                dispatch(get_cart_item_success(response.data));
                console.log(response.data);
            }
            
        } catch (error) {
            dispatch(get_cart_item_failure(error.message));
        }
    }
}



