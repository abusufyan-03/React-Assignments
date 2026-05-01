import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)

        this.state = {
            count: 1,
            count2: 2
        }
    }
    render(){
        let { count, count2 } = this.state
        return(
            <>
            <div className="user-card">
                <h1>This is Class Base Component</h1>
                <p>Name: {this.props.name} </p>
                <p>Count: {count} </p>
                <p>Count: {count2} </p>
                <button onClick={()=>{
                    this.setState({
                        count: count + 1,
                        count2: count2 + 1
                    })
                }}>increment</button>
            </div>
            </>
        )
    }
}

export default UserClass;