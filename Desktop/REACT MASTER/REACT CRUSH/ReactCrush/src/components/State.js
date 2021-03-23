import React, { Component } from 'react'


export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             message:'suman'
        }
    }
    handle=()=>{
        // this.setState({
        //     count:this.state.count + 1
            
        // },
        // ()=>{
        //     console.log('calllback value',this.state.count)
        // }
        
        // )
        this.setState(preState=>({
           
            count:preState.count +1
        })
        
        )
       
        console.log(this.state.count)
    }
    incrementfive=()=>{
        this.handle()
        this.handle()
        this.handle()
        this.handle()
        this.handle()
    }
    
    render() {
        const {count}=this.state
        return (
            <div>
                <h2>{count}</h2>
                <button onClick={this.incrementfive}>+</button>
            </div>
        )
    }
}
