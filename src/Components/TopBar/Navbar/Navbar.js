import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = (props) => {
    return (
        <div className="navbars">
            <ul>
                {
                    props.pages.map(
                    
                            (e,index)=>(index+1!=props.pages.length?Items(e.name,e.more):<li className='animation'><span> {e.name}  </span></li>)
                            
                            )
                    
                }
                
            </ul>
        </div>
    );
}

export default Navbar;

function Items(name,more){
    return(
        <li>
            <span><Link to="/Products" style={{
                    textDecoration:'none',
                    color:'black'
                }}>{name}</Link> </span>
            <i className="fas fa-caret-down"></i> 
            <ul>{more.map(
                (e)=><li><Link to="/Products" style={{
                    textDecoration:'none',
                    color:'black'
                }}>{e.name}</Link></li>)} 
            </ul>
        </li>
    )
}
