// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handelSubmit = event => {
    eent.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }
  render() {
    return(
      <div>
        Band Input
      </div>
    )
  }
}

export default BandInput
