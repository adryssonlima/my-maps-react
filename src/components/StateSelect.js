import React, { Component } from 'react'
import CitySelect from './CitySelect'

export default class StateSelect extends Component {

    constructor() {
        super()

        this.state = {
            value: 'label',
            geonameIdBR: 3469034, //referência geografica do BRASIL
            estados: [],
            geonameIdStateNew: '',
            geonameIdStateOld: ''
        }
    }

    handleChange = event => {
        let geonameIdStateNew = event.target.value
        let geonameIdStateOld = this.state.geonameIdStateNew
        this.setState({ geonameIdStateNew, geonameIdStateOld })
    }

    reqEstados = _ => {
        this.fetchAPI(this.state.geonameIdBR, estados => {
            this.setState({ estados })
        })
    }

    componentWillMount = _ => this.reqEstados()

    fetchAPI = (param, callback) => {
        fetch(`http://www.geonames.org/childrenJSON?geonameId=${param}`, {
            method: "POST"
        }).then(res => {
            return res.json()
        }).then(data => {
            callback(data.geonames)
        })
    }

    render() {

        const estados = this.state.estados
        const geonameIdStateNew = this.state.geonameIdStateNew
        const geonameIdStateOld = this.state.geonameIdStateOld

        return (

            <div>
                <form className="form-inline">
                    <div className="form-group">
                        <select className="form-control" onChange={ this.handleChange }>
                            { estados.map(obj => {
                                return <option key={ obj.geonameId } value={ obj.geonameId }>{ obj.name }</option>
                            }) }
                        </select>
                    </div>
                    <div className="form-group mx-sm-3">
                        { geonameIdStateNew !== geonameIdStateOld && <CitySelect geonameIdState={ geonameIdStateNew } /> }
                    </div>
                </form>
            </div>

        )
    }

}