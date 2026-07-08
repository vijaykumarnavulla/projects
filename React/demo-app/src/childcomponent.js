import React, { Component } from "react";
import ReactDOM from 'react-dom'

class Childcomponent extends Component{
    constructor(props){
        super(props);
        this.state={val:'int',data:[1,2,3,54]};
    }

    render(){
        return(
            <>
            <div style={{background:'#00ff00',width:'400px',height:'200px'}}>
                <h1>{this.props.data.title}</h1>
                <input onBlur={event=>this.onTextInputChange(event)}/>
                <button onClick={event=>this.props.data.buttonClick(this.state.val)}>hello</button>
            </div>
            <div>
                {this.state.data.map((val,index)=>
                 <div key = {index}> {val}
                    </div>)}
            </div>
            </>
        )
    }   

    onTextInputChange(event){
        this.setState({val:event.target.value})
    }
}

export default Childcomponent;