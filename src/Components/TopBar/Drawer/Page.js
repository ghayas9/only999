import Morepages from './MorePages';
import React,{useState} from 'react';


const Page = (e) => {
    const [show, setShow] = useState(false);
    return (
        <>
        <li><span>{e.name} </span>
        <i className={show?"fas fa-minus":"fas fa-plus"} onClick={()=>{setShow(!show)}}></i> 
        </li>
        <Morepages pages={e.more} show={show}/>
        </>
    );
}

export default Page;
