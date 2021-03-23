import React from 'react'

export default function CreateJsx(props) {
    return (
        <div>
            <h2>hello{props.name}</h2>
            {props.children}
            <p>lily</p>
        </div>
    )
}
