import React from 'react';
import './Navbar.css';
const Navbar = (props) => {
    return (
        <div className="navbars container-fluid">
            <ul>
                {props.pages.map((e)=><li><span>{e.name} </span><i className="fas fa-caret-down"></i> <ul>{e.more.map((e1)=><li>{e1.name}</li>)} </ul> </li>)}
            </ul>
        </div>
    );
}

export default Navbar;
