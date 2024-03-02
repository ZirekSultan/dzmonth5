import productData from '../../data/product.json'

export const getProduct = () => {
    return  (dispatch) => {
        dispatch({type:'GET_PRODUCT', payload: productData})
    }
}