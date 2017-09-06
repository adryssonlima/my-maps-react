import React, { Component } from 'react'

// export default class Option extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {

//         };
//     }
    
//     render () {
//         return (
//             <option> { this.props.text } </option>
//         );
//     }
//  }

 const Option = ({ geonameId, lat, lng, fcode, name }) => <option> { name } </option>

 export default Option