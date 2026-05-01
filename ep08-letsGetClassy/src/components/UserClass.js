import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <>
            <div className="user-card">
                <h1>This is Class Base Component</h1>
                <p>Name: {this.props.name} </p>
            </div>
            </>
        )
    }
}

export default UserClass;