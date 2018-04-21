import React, { Component } from 'react'

export default class CitySelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cidades: []
        }
    }

    handleChange = event => {
        let city = JSON.parse(event.target.value)
        
    }

    reqCidades = _ => {
        this.fetchAPI(this.props.geonameIdState, cidades => {
            this.setState({ cidades })
        })
    }

    componentDidUpdate = _ => this.reqCidades()

    componentWillMount = _ => this.reqCidades()

    fetchAPI = (param, callback) => {
        fetch(`http://www.geonames.org/childrenJSON?geonameId=${param}`, {
            method: "POST"
        }).then(res => {
            return res.json()
        }).then(data => {
            callback(data.geonames)
        })
    }
    
    render () {

        const cidades = this.state.cidades

        return (
            // <div>cidades</div>
            <select className="form-control" onChange={ this.handleChange }>
                { cidades.map(obj => {
                    return <option key={ obj.geonameId } value={ JSON.stringify({
                        geonameId: obj.geonameId,
                        lat: obj.lat,
                        lng: obj.lng,
                        fcode: obj.fcode,
                        name: obj.name
                    }) }>{ obj.name }</option>
                }) }
            </select>
        )
    }
 }
