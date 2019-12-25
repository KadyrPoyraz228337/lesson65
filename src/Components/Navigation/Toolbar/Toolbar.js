import React, {Component} from 'react';
import {Nav} from "reactstrap";
import ToolbarItem from "./ToolbarItem/ToolbarItem";

class Toolbar extends Component {

    render() {
        return (
            <Nav className="ml-auto" navbar>
                <ToolbarItem to='/'>Home</ToolbarItem>
                <ToolbarItem to='/about'>About</ToolbarItem>
                <ToolbarItem to='/contacts'>Contacts</ToolbarItem>
                <ToolbarItem to='/division'>Division</ToolbarItem>
                <ToolbarItem to='/blog'>Blog</ToolbarItem>
                <ToolbarItem to='/admin'>Admin</ToolbarItem>
            </Nav>
        )
    }
}

export default Toolbar;