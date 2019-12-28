import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Textbox from './Textbox';
import { height } from '@material-ui/system';
import Total from './Total';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2
    }}
  />
);

var total = [];
var summ;
export default class App extends Component {

  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state={
      sum: 0
    };
  }

  handleKeyPress(event) {

    if (event.key === 'Enter') {
      total.push(parseInt(event.target.value));
      event.target.value = null;
      summ = total.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0);
      this.setState({
        sum:summ
      })
    }
  }


  render() {
    return (
      <div>
        <CssBaseline />
        <Container fixed maxWidth="sm">
          <Textbox
            handleKeyPress={this.handleKeyPress}
          />
          <h3>Total : </h3>
          <Total
            value={this.state.sum}
          />
          <ColoredLine color="black" />
        </Container>
      </div>
    );
  }
}