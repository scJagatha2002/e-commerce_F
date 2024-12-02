import { CREATE_PAYMENT_SUCCESS,CREATE_PAYMENT_REQUEST,CREATE_PAYMENT_FAILURE } from "./ActionType";
import { UPDATE_PAYMENT_REQUEST,UPDATE_PAYMENT_SUCCESS,UPDATE_PAYMENT_FAILURE } from "./ActionType";
import { api } from "../../ApiConfig";

export const createPayment = (orderId) =>async(dispatch) => {
    dispatch({type:CREATE_PAYMENT_REQUEST})
    try {
        const {data} = await api.post(`/api/payment/${orderId}`);
        if(data.payment_link_url){
            console.log(data);
            window.location.href=data.payment_link_url;
        }
        console.log(data);
        
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message});
        
    }
}

export const updataPayment = (reqData) =>async(dispatch) => {
    const {order_Id,payment_Id} = reqData;
    console.log("jaga",reqData);
    dispatch({type:UPDATE_PAYMENT_REQUEST})
    try {
        const {data} = await api.get(`/api/payment/payments?payment_Id=${payment_Id}&order_Id=${order_Id}`);
        
        
        console.log("update payment : ",data);

    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.message})
        
    }
}