export function thelogin(username,password) {
    return {
        type: "LOGIN",
        Upayload: username,
        Ppayload: password
    };
}

export function theregis(username,password,repassword,email) {
    return {
        type: "REGIS",
        Upayload: username,
        Ppayload: password,
        RPpayload:repassword,
        Epayload:email
    };
}