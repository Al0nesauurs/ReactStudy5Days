const userReducer = (state = {
    username: "",
    password: "" 
}, action) => {
    switch (action.type) {
        case "LOGIN":
            state = {
                ...state,
                username: action.Upayload,
                password: action.Ppayload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;