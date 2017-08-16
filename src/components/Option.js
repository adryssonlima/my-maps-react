import React, { Component } from 'react';

export default Option = () => {
        return (
            <option disabled={this.props.disabled} onClick={this.props._sendData}> { this.props.text } </option>
        );
 }