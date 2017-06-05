import React from "react";

export const User = (props) => {
    return (
        <div>
            <div className="content">
                <div className="content">
                    <h1>The Login Page</h1>
                </div>
            </div>
            <div className="content">
                <div className="content">
                    <p>My-username: {props.username} <br/>
                       My-password: {props.password} <br/></p>
                </div>
            </div>
        </div>
    );
}