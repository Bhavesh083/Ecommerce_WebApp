export const initialState = {
    user : {
    }
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Addlog':  
            return {
                ...state,
                user : { 
                    fullname : action.user.fullname,
                    email : action.user.email,
                    password : action.user.password,
                }
            }
            break; 
        default:  
            return state;
    }
}
export default loginReducer;