import React, {Component} from 'react';
import {Nav} from "reactstrap";
import axios from 'axios';
import ToolbarItem from "./ToolbarItem/ToolbarItem";

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
                {this.state.pages.map(page => {
                    return (
                        <ToolbarItem key={page} to={`/${page}`}>
                            {page}
                        </ToolbarItem>
                    )
                })}
            </Nav>
        )
    }
}

export default Toolbar;