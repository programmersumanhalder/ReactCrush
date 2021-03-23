import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello suman'
        }
        // third way making destructing in constructor 
        // this.clickHandler=this.clickHandler.bind(this)
    }
        // clickHandler(){
        //     this.setState({
        //         message:'Hi rajon'
        //     })
        //     console.log(this)
        // }
        // fourth way  by using arrow function in setState
           clickHandler=()=>{
            this.setState({
                message:'Hi rajon'
            })
            console.log(this)
        }
    
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/* first way  =not to use for performance implication  */}
               {/* <button onClick={this.clickHandler.bind(this)}>click</button>  //without bind keyword clickHander undefine  */}
               {/* second WAY =easy to pass paramerter if component without nested children component */}
                {/* <button onClick={()=> this.clickHandler()}>click</button> */}
                {/* third way good to use   */}
                {/* <button onClick={this.clickHandler}>click</button> */}
                
                {/* fourth way  =best to use*/}
                <button onClick={this.clickHandler}>click</button>
                
            </div>
        )
    }
}
