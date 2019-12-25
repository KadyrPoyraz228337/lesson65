import React from 'react';
import {Container, Navbar, NavbarBrand} from "reactstrap";
import Toolbar from "./Toolbar/Toolbar";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand tag={NavLink} to='/' exact>Static page</NavbarBrand>
                <Toolbar/>
            </Container>
        </Navbar>
    );
};

export default Navigation;