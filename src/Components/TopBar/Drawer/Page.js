import Morepages from './MorePages';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const Page = (e) => {
    const [show, setShow] = useState(false);
    return (
        <>
        <li><span>
        <Link to="/Products" style={{
                    textDecoration:'none',
                    color:'black'
                }}>{e.name}</Link>
         </span>
        <i className={show?"fas fa-minus":"fas fa-plus"} onClick={()=>{setShow(!show)}}></i> 
        </li>
        <Morepages pages={e.more} show={show}/>
        </>
    );
}

export default Page;
