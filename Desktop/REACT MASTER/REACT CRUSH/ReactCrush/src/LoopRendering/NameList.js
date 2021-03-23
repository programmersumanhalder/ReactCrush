import React from 'react'
import Person from './Person'

function NameList() {
    // const names=['suman','rajon','mohon']
    // const nameList=names.map(name=> <h2>{name}</h2>)
    const persons=[
        {
            id:1,
            name:'suman',
            age:25,
            skill:'React',
            status:'single'
        },
         {
            id:2,
            name:'rajon',
            age:23,
            skill:'Angular',
            status:'single'
        },
         {
            id:3,
            name:'Mohon',
            age:25,
            skill:'Vue',
            status:'single'
        }
    ]
  const personList=persons.map(person=>
 <Person key={person.id} person={person}/>
 )
    return( 
        <div>
            <div>{personList }</div>
        </div>
    
    )

    
}

export default NameList
