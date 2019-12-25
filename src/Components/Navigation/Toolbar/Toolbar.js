import React, {Component} from 'react';
import {Nav} from "reactstrap";
import axios from 'axios';

class Toolbar extends Component {
    state = {
      pages: null,
    };
    async componentDidMount() {
        const resp = await axios('https://lesson-65-kadyr.firebaseio.com/pages.json');
        const pages = Object.keys(resp.data);
        this.setState({pages});
    }

    render() {
        return this.state.pages && (
            <Nav className="ml-auto" navbar>

            </Nav>
        )
    }
}

export default Toolbar;