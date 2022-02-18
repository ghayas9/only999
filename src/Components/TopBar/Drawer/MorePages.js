import './Morepages.css';
import { Link } from 'react-router-dom';

const Morepages = (props) => {
    return (
        <div className={props.show?'morepages':'nomorepages'}>
            <ul>
                {props.pages.map((e)=><li><span>
                <Link to="/Products" style={{
                    textDecoration:'none',
                    color:'black'
                }}>{e.name}</Link>
                 </span></li>)}
            </ul>
        </div>
    );
}

export default Morepages;
