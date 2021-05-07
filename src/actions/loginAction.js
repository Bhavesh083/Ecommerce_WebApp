export const logAdd = (fullname,email,password) => ({
    type : 'Addlog',
    user : {
        email : email, 
        fullname : fullname,
        password : password,  
    }
})

export const loginAdd = () => ({
    type : 'logAdd',
}) 