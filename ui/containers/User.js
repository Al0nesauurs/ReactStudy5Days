import React from "react";

export const User = (props) => {
    return (
        <div>
            <div className="content">
                <div className="content">
                    <h1>The Login Page</h1>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <p>My-username: {props.username} <br/>
                       My-password: {props.password} <br/>
                    </p>
                </div>
            </div>
        </div>
    );
}
export const REUser = (props) => {
    return (
        <div>
            <div className="container">
                <div className="content">
                    <h1>The Login Page</h1>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <p>
                       My-username: {props.username} <br/>
                       My-password: {props.password} <br/>
                       My-re-password : {props.repassword}<br/>
                       My-Email :{props.email}<br/>
                    </p>
                </div>
            </div>
        </div>
    );
}