export const initialState = {
    items : [],
    orders : [],
    user : null, 
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add':  
            return {
                ...state,
                items : [...state.items,action.item]
            }
            break;
        case 'AdORD': 
            return {
                ...state, 
                orders : [...state.orders,...action.cart],
                items : [],
            }                      
            break;
        case 'Del':       
                const newItems = state.items
                const ind = state.items.findIndex(item => item.id === action.item.id)
                if(ind >= 0){ 
                    newItems.splice(ind,1)
                }else{

                }
            return {
                ...state,
                items : [...newItems]
            }
            break;
        default:
            return state;
    }
}
export default cartReducer; 