import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class StateSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            estados : []
        };

    }

    reqEstados() {
        //this.setState( { estados : [{cod : 'asdasd'}] } );
        
    }

    componentWillMount() {
        this.reqEstados();
    }

    render () {
        return (
            <FormControl componentClass="select" placeholder="select">
                <option selected="true" disabled="disabled" value="">Selecione um Estado</option>
                <option value="other"> { this.state.estados } </option>
            </FormControl>
        );
    }

}

export default StateSelect;