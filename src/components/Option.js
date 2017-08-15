import React, { Component } from 'react';

export default class Option extends Component {

    render () {
        return (
            <option disabled={this.props.disabled}> { this.props.text } </option>
        );
    }
 }