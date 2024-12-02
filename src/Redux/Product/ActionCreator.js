import { FIND_PRODUCT_BY_ID_SUCCESS,FIND_PRODUCT_BY_ID_REQUEST,FIND_PRODUCT_BY_ID_FAILURE } from "./ActionType"
import { FIND_PRODUCT_BY_CATEGORY_REQUEST, FIND_PRODUCT_BY_CATEGORY_SUCCESS,  FIND_PRODUCT_BY_CATEGORY_FAILURE } from "./ActionType"
import axios from "axios"
import { api } from "../../ApiConfig.js"

const product_id_request = () => ({
    type:FIND_PRODUCT_BY_ID_REQUEST
})

const product_id_success = (product) => ({
    type:FIND_PRODUCT_BY_ID_SUCCESS,
    payload:product
})

const product_id_failure = (error) => ({
    type:FIND_PRODUCT_BY_ID_FAILURE,
    payload:error
})

export const getProductById = (data) => {
    const {id} = data;
    return async function (dispatch) {
        dispatch(product_id_request());
        try {

            const response = await api.get(`/api/product/product/id/${id}`)
            if(response.data)
            {
                
                dispatch(product_id_success(response.data));
                console.log(response.data);
            }
            
        } catch (error) {
            dispatch(product_id_failure(error.message));
        }
    }
}

const product_category_request = () => ({
    type:FIND_PRODUCT_BY_CATEGORY_REQUEST
})

const product_category_success = (product) => ({
    type:FIND_PRODUCT_BY_CATEGORY_SUCCESS,
    payload:product
})

const product_category_failure = (error) => ({
    type:FIND_PRODUCT_BY_CATEGORY_FAILURE,
    payload:error
})

export const getProductByCategory = (params) => {
    const {colors,size,min_discount,stock,sort,paage_no,page_size,category} = params
    return async function (dispatch) {
       
        dispatch(product_category_request());
        
        try {
            const { data } = await api.get(`http://localhost:5454/api/product/products?category=${category}&colors=${colors}&size=${size}&min_discount=${min_discount}&sort=${sort}&stock=${stock}&page_no=${paage_no}&paage_size=${page_size}`);
            if(data)
            {
                console.log("enter");
                dispatch(product_category_success(data));
                console.log(data);
            }
        } catch (error) {
            dispatch(product_category_failure(error));
        }
    }
}