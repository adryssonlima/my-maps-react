import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import Option from './Option';

export default class StateSelect extends Component {

    constructor(props) {
        super(props);

        this.geonameId = 3469034; //referência geografica do BRASIL

        this.state = {
            value : 'label',
            estados : []
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    reqEstados(callback) {

        fetch("http://www.geonames.org/childrenJSON?geonameId="+this.geonameId, {
            method: "POST"
        }).then( (res) => {
            return res.json();
        }).then( (data) => {
            callback(data.geonames);
        })
        .catch(error => console.log(error));
    }

    componentWillMount() {
        this.reqEstados((estados) => {
            this.setState( { estados : estados } );
        });
    }

    sendData = () => {
        
    }

    render () {
        return (
            <FormControl componentClass="select" value={this.state.value} onChange={this.handleChange}>
                <Option disabled="disabled" value="label" text="Selecione um Estado" />
                {console.log(this.state.value) /*<option disabled="disabled" value="label">Selecione um Estado</option> */}
                
                { console.log(this.state.estados) }

                { this.state.estados.map( (obj) => {
                    return <Option key={obj.geonameId} value={obj.geonameId} sendToApi={{latitude: obj.lat, longitude: obj.lng, fcode: obj.fcode}} text={obj.name} />
                   //return <option key={obj.geonameId} value={obj.geonameId} lat={obj.lat} lng={obj.lng} fcode={obj.fcode}> {obj.name} </option>;
                }) }

            </FormControl>
        );
    }

}
