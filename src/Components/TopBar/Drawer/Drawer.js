import './Drawer.css';
import Page from './Page';
import './Morepages.css';

const Drawer = (props) => {
    
    return (
        <div className={props.show?'drawer':'nomorepages'}>
            {/* Back Button */}
            <ul>
                <li onClick={()=>{props.setshow(false)}}>
                <span className='dr-btn'> <i className="fas fa-times"></i> close</span>
                </li>
            </ul>
            <hr />

            {/* Pages */}
           <ul>
            {
                props.pages.map(
                    (e,index)=>
                    <>
                    {index+1!=props.pages.length?<Page name={e.name} more={e.more}/>:<li className='animation'>{e.name}</li>}
                    </>
                     )
            }
            </ul>
            <hr />

            {/*  */}
            <ul>
                <li>
                <span className='dr-btn'>  <i className="fas fa-lock"></i> Signin</span>
                </li>
                <li>
                <span className='dr-btn'>  <i className="fas fa-user"></i> Register</span>
                </li>
                <li>
                <span className='dr-btn'>  <i className="fas fa-check"></i> Checkout</span>
                </li>
                <li>
                <span className='dr-btn'>  <i className="far fa-heart"></i> Wishlist</span>
                </li>
                <li>
                <span className='dr-btn'>  <i className="fas fa-balance-scale"></i> Compare</span>
                </li>
            </ul>

            <hr />
            {/*  */}
            <ul>
                <li>
                <span className='dr-btn'>  <i className="fas fa-dollar-sign"></i> US Dollars</span>
                </li>
                <li>
                <span className='dr-btn'>  <i className="fas fa-euro-sign"></i> Euro</span>
                </li>
                <li>
                <span className='dr-btn'>  <i className="fas fa-pound-sign"></i> British Pounds</span>
                </li>
            </ul>
        </div>
    );
}

export default Drawer;
