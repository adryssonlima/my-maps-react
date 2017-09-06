import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import Option from './Option';

export default class StateSelect extends Component {

    constructor(props) {
        super(props);

        this.geonameId = 3469034; //referência geografica do BRASIL

        this.state = {
            value: 'label',
            estados: [],
            cidades: []
        };
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        let geonameId = event.target.value;
        this.reqCidades(geonameId, (cidades) => {
            this.setState({ cidades });
        });
    }

    reqEstados = (callback) => {

        fetch("http://www.geonames.org/childrenJSON?geonameId=" + this.geonameId, {
            method: "POST"
        }).then((res) => {
            return res.json();
        }).then((data) => {
            callback(data.geonames);
        });
    }

    reqCidades = (geonameId, callback) => {
        
        fetch("http://www.geonames.org/childrenJSON?geonameId=" + geonameId, {
            method: "POST"
        }).then((res) => {
            return res.json();
        }).then((data) => {
            callback(data.geonames);
        });
    }

    componentWillMount() {
        this.reqEstados((estados) => {
            this.setState({ estados: estados });
        });
    }

    render() {
        return (
            <div>
                <FormControl componentClass="select" value={this.state.value} onChange={this.handleChange}>
                    <option disabled>Selecione um Estado</option>

                    {this.state.estados.map((obj, key) => {
                        console.log(obj)
                        return <option key={key} value={obj.geonameId}>{obj.name}</option>
                    })}

                </FormControl>

                {this.state.cidades.length > 0 && <FormControl componentClass="select" value={this.state.value} onChange={this.handleChange}>

                    {this.state.cidades.map((obj, key) => {
                        console.log(obj)
                        return <option key={key} value={obj.geonameId}>{obj.name}</option>
                    })}

                </FormControl>}
            </div>
        );
    }

}