import React, { Component } from 'react';


class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            author : "Adrysson Lima",
            year : new Date().getFullYear()
        }
    }

    render () {
        return (
            <div className="container">
                <p className="pull-left"> &copy; { this.state.author } { this.state.year } </p>
            </div>
        );
    }

}

export default Footer;