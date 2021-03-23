import React from 'react'

function Person({person}) {

    return (
        <div>
            <h2> {person.status} 
            I am {person.name}. age:{person.age}. 
            skill:{person.skill} </h2> 
        </div>
    )
}

export default Person;
