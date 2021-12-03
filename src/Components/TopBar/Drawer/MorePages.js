import {useState} from 'react';
import './Morepages.css';

const Morepages = (props) => {
    return (
        <div className={props.show?'morepages':'nomorepages'}>
            <ul>
                {props.pages.map((e)=><li><span>{e.name} </span></li>)}
            </ul>
        </div>
    );
}

export default Morepages;
