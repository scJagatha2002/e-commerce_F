import { GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_ALL_ORDER_FAILURE } from "./ActionType";
import { CONFIRM_ORDER_SUCCESS, CONFIRM_ORDER_FAILURE, CONFIRM_ORDER_REQUEST } from "./ActionType";
import { SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS, SHIP_ORDER_FAILURE } from "./ActionType";
import { DELIVER_ORDER_REQUEST, DELIVER_ORDER_SUCCESS, DELIVER_ORDER_FAILURE } from "./ActionType";
import { CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CANCEL_ORDER_FAILURE } from "./ActionType";
import { DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAILURE } from "./ActionType";
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE } from "./ActionType";
import { GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, GET_ORDER_HISTORY_FAILURE } from "./ActionType";
import { GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_BY_ID_FAILURE } from "./ActionType";
import { api } from "../../ApiConfig";

const get_all_orders_request = () => ({
    type: GET_ALL_ORDER_REQUEST
})

const get_all_orders_success = (order) => ({
    type: GET_ALL_ORDER_SUCCESS,
    payload: order
})

const get_all_orders_failure = (error) => ({
    type: GET_ALL_ORDER_FAILURE,
    payload: error
})

export const getAllOrders = () => {
    return async function (dispatch) {
        dispatch(get_all_orders_request());
        try {

            const response = await api.get('/api/admin/orders/')
            if (response.data) {
                dispatch(get_all_orders_success(response.data));
                console.log(response.data);
            }

        } catch (error) {
            dispatch(get_all_orders_failure(error));
        }
    }
}

const confirm_order_request = () => ({
    type: CONFIRM_ORDER_REQUEST
})

const confirm_order_success = (order) => ({
    type: CONFIRM_ORDER_SUCCESS,
    payload: order
})

const confirm_order_failure = (error) => ({
    type: CONFIRM_ORDER_FAILURE,
    payload: error
})

export const confirmOrder = (id) => {
    return async function (dispatch) {
        dispatch(confirm_order_request());
        try {

            const response = await api.put(`/api/admin/orders/${id}/confirmOrder`)
            if (response.data) {
                dispatch(confirm_order_success(response.data));
                console.log(response.data);
            }

        } catch (error) {
            dispatch(confirm_order_failure(error));
        }
    }
}

const ship_order_request = () => ({
    type: SHIP_ORDER_REQUEST
})

const ship_order_success = (order) => ({
    type: SHIP_ORDER_SUCCESS,
    payload: order
})

const ship_order_failure = (error) => ({
    type: SHIP_ORDER_FAILURE,
    payload: error
})

export const shipOrder = (id) => {
    return async function (dispatch) {
        dispatch(ship_order_request());
        try {

            const response = await api.put(`/api/admin/orders/${id}/shipOrder`)
            if (response.data) {
                dispatch(ship_order_success(response.data));
                console.log(response.data);
            }

        } catch (error) {
            dispatch(ship_order_failure(error));
        }
    }
}


const deliver_order_request = () => ({
    type: DELIVER_ORDER_REQUEST
})

const deliver_order_success = (order) => ({
    type: DELIVER_ORDER_SUCCESS,
    payload: order
})

const deliver_order_failure = (error) => ({
    type: DELIVER_ORDER_FAILURE,
    payload: error
})

export const deliverOrder = (id) => {
    return async function (dispatch) {
        dispatch(deliver_order_request());
        try {

            const response = await api.put(`/api/admin/orders/${id}/deliverOrder`)
            if (response.data) {
                dispatch(deliver_order_success(response.data));
                console.log(response.data);
            }

        } catch (error) {
            dispatch(deliver_order_failure(error));
        }
    }
}

const cancel_order_request = () => ({
    type: CANCEL_ORDER_REQUEST
})

const cancel_order_success = (order) => ({
    type: CANCEL_ORDER_SUCCESS,
    payload: order
})

const cancel_order_failure = (error) => ({
    type: CANCEL_ORDER_FAILURE,
    payload: error
})

export const cancelOrder = (id) => {
    return async function (dispatch) {
        dispatch(cancel_order_request());
        try {

            const response = await api.put(`/api/admin/orders/${id}/cancelOrder`)
            if (response.data) {
                dispatch(cancel_order_success(response.data));
                console.log(response.data);
            }

        } catch (error) {
            dispatch(cancel_order_failure(error));
        }
    }
}

const delete_order_request = () => ({
    type: DELETE_ORDER_REQUEST
})

const delete_order_success = (order) => ({
    type: DELETE_ORDER_SUCCESS,
    payload: order
})

const delete_order_failure = (error) => ({
    type: DELETE_ORDER_FAILURE,
    payload: error
})

export const deleteOrder = (id) => {
    return async function (dispatch) {
        dispatch(delete_order_request());
        try {

            const response = await api.delete(`/api/admin/orders/${id}/deleteOrder`)
            if (response.data) {
                dispatch(delete_order_success(response.data));
                console.log(response.data);
            }

        } catch (error) {
            dispatch(delete_order_failure(error));
        }
    }
}

const create_order_request = () => ({
    type: CREATE_ORDER_REQUEST
})

const create_order_success = (address) => ({
    type: CREATE_ORDER_SUCCESS,
    payload: address
})

const create_order_failure = (error) => ({
    type: CREATE_ORDER_FAILURE,
    payload: error
})


export const createOrder = (address) => {
    return async function (dispatch) {
        dispatch(create_order_request());
        try {

            const response = await api.post('/api/orders/', address)
            if (response.data) {
                dispatch(create_order_success(response.data));
                console.log("ftghj",response.data);
                console.log("finished");
            }

        } catch (error) {
            dispatch(create_order_failure(error));
        }
    }
}



const get_order_by_id_request = () => ({
    type: GET_ORDER_BY_ID_REQUEST
})

const get_order_by_id_success = (order) => ({
    type: GET_ORDER_BY_ID_SUCCESS,
    payload: order
})

const get_order_by_id_failure = (error) => ({
    type: GET_ORDER_BY_ID_FAILURE,
    payload: error
})


export const getOrderById = (id) => {
    return async function (dispatch) {
        dispatch(get_order_by_id_request());
        try {

            const response = await api.get(`/api/orders/${id}`)
            if (response.data) {
                dispatch(get_order_by_id_success(response.data));
            }

        } catch (error) {
            dispatch(get_order_by_id_failure(error));
        }
    }
}

const get_order_history_request = () => ({
    type: GET_ORDER_HISTORY_REQUEST
})

const get_order_history_success = (order) => ({
    type: GET_ORDER_HISTORY_SUCCESS,
    payload: order
})

const get_order_history_failure = (error) => ({
    type: GET_ORDER_HISTORY_FAILURE,
    payload: error
})



export const getOrderHistory = () => {
    return async function (dispatch) {
        dispatch(get_order_history_request());
        try {

            const response = await api.get('/api/orders/orderHistory')
            if (response.data) {
                dispatch(get_order_history_success(response.data));
            }

        } catch (error) {
            dispatch(get_order_history_failure(error));
        }
    }
}




