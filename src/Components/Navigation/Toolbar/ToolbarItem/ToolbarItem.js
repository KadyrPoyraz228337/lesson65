import React from 'react';
import {NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";
import './ToolbarItem.css'

const ToolbarItem = (
    {children, to}
) => {
    const path = to === '/' ? '/' : to;
    return (
        <NavItem className='ml-2'>
            <NavLink to={path} exact>{children}</NavLink>
        </NavItem>
    );
};

export default ToolbarItem;