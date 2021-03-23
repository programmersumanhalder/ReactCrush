import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:true
         }
     }
     
    render() {

        // short circuit operator 
        return this.state.isLoggedIn && <div>welcome suman</div>

        // return(
            // ternary operator 
        //     this.state.isLoggedIn ?
        //     <div>i am ternary</div>:<div>i am not ternary</div>
        // )

        // element variable 
        // let message;
        // if(this.state.isLoggedIn){
        //     message=<div>welcome suman</div>
        // }else{
        //     message=<div>thanks for it</div>
        // }

        // return <div>{message}</div>

        // **if/else 
            // if(this.state.isLoggedIn){
            //     return(
            //         <div>welcome suman</div>
            //     )
            // }else{
            //     return(
            //         <div>you wellcome guest</div>
            //     )
            // }

    }
}

export default UserGreeting
