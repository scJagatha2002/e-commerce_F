import { GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_ALL_ORDER_FAILURE } from "./ActionType";
import { CONFIRM_ORDER_SUCCESS, CONFIRM_ORDER_FAILURE, CONFIRM_ORDER_REQUEST } from "./ActionType";
import { SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS, SHIP_ORDER_FAILURE } from "./ActionType";
import { DELIVER_ORDER_REQUEST, DELIVER_ORDER_SUCCESS, DELIVER_ORDER_FAILURE } from "./ActionType";
import { CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CANCEL_ORDER_FAILURE } from "./ActionType";
import { DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAILURE } from "./ActionType";
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE } from "./ActionType";
import { GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, GET_ORDER_HISTORY_FAILURE } from "./ActionType";
import { GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_BY_ID_FAILURE } from "./ActionType";

const initialState = {
    loading:false,
    item:null,
    items:[],
    message:null,
    error:null
}

export const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ORDER_REQUEST:
        case CONFIRM_ORDER_REQUEST:
        case SHIP_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
        case DELIVER_ORDER_REQUEST:
        case CANCEL_ORDER_REQUEST:
        case CREATE_ORDER_REQUEST:
        case GET_ORDER_HISTORY_REQUEST:
        case GET_ORDER_BY_ID_REQUEST:
            return { ...state, loading: true };

        case GET_ALL_ORDER_SUCCESS:
        case GET_ORDER_HISTORY_SUCCESS:
            return { ...state, loading: false, items: action.payload };

        case CONFIRM_ORDER_SUCCESS:
        case SHIP_ORDER_SUCCESS:
        case DELIVER_ORDER_SUCCESS:
        case CANCEL_ORDER_SUCCESS:
        case CREATE_ORDER_SUCCESS:
        case GET_ORDER_BY_ID_SUCCESS:
            
            return { ...state, item: action.payload };

        case DELETE_ORDER_SUCCESS:
            return { ...state, message: action.payload };

        case GET_ALL_ORDER_FAILURE:
        case GET_ORDER_HISTORY_FAILURE:
        case CONFIRM_ORDER_FAILURE:
        case SHIP_ORDER_FAILURE:
        case DELIVER_ORDER_FAILURE:
        case CANCEL_ORDER_FAILURE:
        case CREATE_ORDER_FAILURE:
        case GET_ORDER_BY_ID_FAILURE:
        case DELETE_ORDER_FAILURE:
            return { ...state, error: action.payload };

        default:
            
            return state;
    }
};
