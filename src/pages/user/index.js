import React from "react";

export default function User() {
    return(
        <div>{localStorage.getItem("name")}</div>
    )
}