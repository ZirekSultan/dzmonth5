

export const actionBusket = (product) => {
    return (dispatch) => {
        dispatch({type:'ADD_BUSKET', payload: product})
    }
}