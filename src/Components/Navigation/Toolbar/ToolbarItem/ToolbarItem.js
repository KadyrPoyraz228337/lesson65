import React from 'react';
import {Container, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

const ToolbarItem = (
    {children, to}
) => {
    return (
        <NavItem className='ml-2'>
            <NavLink to={to}>{children}</NavLink>
        </NavItem>
    );
};

export default ToolbarItem;