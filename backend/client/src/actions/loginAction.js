export const logAdd = (email,password) => ({
    type : 'Addlog',
    user : {
        email : email, 
        password : password
    }
})

export const loginAdd = (bool) => ({
    type : 'logAdd',
    bol : bool
}) 