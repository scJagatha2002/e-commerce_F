import { FIND_PRODUCT_BY_ID_SUCCESS,FIND_PRODUCT_BY_ID_REQUEST,FIND_PRODUCT_BY_ID_FAILURE } from "./ActionType"
import { FIND_PRODUCT_BY_CATEGORY_REQUEST, FIND_PRODUCT_BY_CATEGORY_SUCCESS,  FIND_PRODUCT_BY_CATEGORY_FAILURE } from "./ActionType"

const initialState = {
    loading:false,
    product:null,
    error:null,
    products:[]
}

export const ProductReducer = (state=initialState,action) => {
    switch(action.type)
    {
        case FIND_PRODUCT_BY_ID_REQUEST:
        case FIND_PRODUCT_BY_CATEGORY_REQUEST:
            return{...state,loading:true};

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return{...state,loading:false,product:action.payload};
        case FIND_PRODUCT_BY_CATEGORY_SUCCESS:
            return{...state,loading:false,products:action.payload};

        case FIND_PRODUCT_BY_ID_FAILURE:
            return{...state,error:action.payload,loading:false};
        case FIND_PRODUCT_BY_CATEGORY_FAILURE:
            return{...state,error:action.payload,loading:false};

        default:return state;
    }

}