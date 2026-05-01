import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    render(){
        return(
        <>
        <h1>About US Page</h1>
        <p>This is about us page</p>
        <UserClass name={"First"} />
        <UserClass name={"Second"} />
        </>
    )
    }
}

export default About;