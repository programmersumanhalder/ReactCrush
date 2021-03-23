// *******FUNCTIONAL COMPONENT 

// import React from 'react'

// export default function DestrucingpropStae({name,age,status}) { //first way
//     // const {name,age,status}=props //second  way 
//     return (
//         <div>
//         <h2>{name} my age: {age} i am {status}</h2>
            
//         </div>
//     )
// }

import React, { Component } from 'react'

export default class DestrucingpropStae extends Component {
    render() {
        const {name,age,status}=this.props
        // const {state1,state2}=this.state
        return (
            <div>
                <h2>welcome {name} age:{age} status:{status}</h2>
                
            </div>
        )
    }
}
