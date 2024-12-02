import {FIND_USER_CART_REQUEST,FIND_USER_CART_SUCCESS,FIND_USER_CART_FAILURE} from "./ActionType";
import {ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE} from "./ActionType";
import {DELETE_CART_ITEM_REQUEST,DELETE_CART_ITEM_SUCCESS,DELETE_CART_ITEM_FAILURE} from "./ActionType";
import {UPDATE_CART_ITEM_REQUEST,UPDATE_CART_ITEM_SUCCESS,UPDATE_CART_ITEM_FAILURE} from "./ActionType";
import {GET_CART_ITEM_REQUEST,GET_CART_ITEM_SUCCESS,GET_CART_ITEM_FAILURE} from "./ActionType";

const initialState = {
    loading:false,
    cart:null,
    error:null,
    message:null,
    cartItems:[]
}

export const CartReducr = (state=initialState,action) => {
    switch(action.type)
    {
        case FIND_USER_CART_REQUEST:
            case ADD_TO_CART_REQUEST:
                case DELETE_CART_ITEM_REQUEST:
                    case UPDATE_CART_ITEM_REQUEST:
                        case GET_CART_ITEM_REQUEST:
                            return {...state,loading:true};
        case FIND_USER_CART_SUCCESS:
            return {...state,loading:false,cart:action.payload};

        case ADD_TO_CART_SUCCESS:
            case DELETE_CART_ITEM_SUCCESS:
                return{...state,message:action.payload,loading:false};
        
        case UPDATE_CART_ITEM_SUCCESS:
            case GET_CART_ITEM_SUCCESS:
                return{...state,cartItems:action.payload};

        case FIND_USER_CART_FAILURE:
            case ADD_TO_CART_FAILURE:
                case DELETE_CART_ITEM_FAILURE:
                    case UPDATE_CART_ITEM_FAILURE:
                        case GET_CART_ITEM_FAILURE:
                            return{...state,error:action.payload}

        default:return state;
    }
}