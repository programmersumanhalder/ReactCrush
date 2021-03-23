import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                {this.props.children}

                
            </div>
        )
    }
}
