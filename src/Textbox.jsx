import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class Textbox extends Component {

    constructor(props) {
        super(props)

    }

 

    render() {
        return (
            <TextField
                id="standard-number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={this.props.value}
                fullWidth
                placeholder={121}
                onKeyPress={this.props.handleKeyPress}
            />
        )
    }
}