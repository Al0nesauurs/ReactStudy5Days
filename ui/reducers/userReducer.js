const userReducer = (state = {
    username: "",
    password: "" ,
    repassword:"",
    email:""
}, action) => {
    switch (action.type) {
        case "LOGIN":
            state = {
                ...state,
                username: action.Upayload,
                password: action.Ppayload
            };
            break;
        case "REGIS":
            state = {
                ...state,
                username: action.username,
                password: action.password,
                repassword:action.repassword,
                email:action.email
            };
            break;
    }
    return state;
};

export default userReducer;