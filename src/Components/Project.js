import React, { Component } from 'react'
export default class Project extends Component {

    render() {
        return (
            <a href={this.props.link}> <img src={this.props.img} alt={this.props.title}></img> </a>
        )
    }
}
