const initialState = {
    busket :[]
}

const busketReducer = (state= initialState, action) => {
    switch (action.type){
        case 'ADD_BUSKET':{
            const newBusket = [...state.busket , action.payload]
            return {
                ...state, busket: newBusket
            }
        }

        default:
            return state
    }
}
export default busketReducer