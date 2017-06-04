export function thelogin(username,password) {
    return {
        type: "LOGIN",
        Upayload: username,
        Ppayload: password
    };
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
}