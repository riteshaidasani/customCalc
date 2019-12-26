import React, { Component } from 'react';

export default class Total extends Component {

    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value == nextProps.value)
            return false
    }

    render() {
        console.log("1")
        return (
            <h3>{this.props.value}</h3>)
    }
}