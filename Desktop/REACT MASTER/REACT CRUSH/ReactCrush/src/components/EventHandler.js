import React, { Component } from 'react'

export class EventHandler extends Component {

//  constructor(props) {
//      super(props)
 
     classClick(){
         alert('i am class')
        //  console.log('i am here')
     }
     
    //  this.state = {
    //      message='lovely'
          
    //  }
//  }
 

    render() {
         
    
        return (
            <div>
                <p onClick={this.hanle}>suman</p>
                
                <button onClick={this.classClick}>click me</button>
            </div>
        )
    }
}

export default EventHandler
