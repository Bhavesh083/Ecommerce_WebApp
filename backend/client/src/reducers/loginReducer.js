export const initialState = {
    user : {
    },
    notlogin : false,
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Addlog':  
            return {
                ...state,
                user : {  
                    email : action.user.email,
                    password : action.user.password
                }
            }
            break; 
        case 'logAdd':  
            return {
                ...state,
                notlogin : action.bol,
            }    
            break; 
        default:  
            return state;
    }
}
export default loginReducer;