import React from "react";
import UserClass from "./UserClass";
import User from "./user";
class About extends React.Component{
    constructor(props){
        super(props)

        console.log("Parent construtor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
    }
    render(){
        console.log("parent render")
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