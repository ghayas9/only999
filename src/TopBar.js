import './TopBar.css';
function TopBar(){
    return(
        <div className="container-fluid topbar">
            <div className="row social">
                <div className="col-md-9 contact">
                <span ><i className="fas fa-phone-alt"></i>+92 342 7842469</span>
                <span ><i className="far fa-clock"></i>ALL WEEK FROM 9:00 AM TO 11:00 PM</span>
                </div>
                <div className="col-md-3 social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-whatsapp"></i>
                </div>
            </div>

            <div className="row logobar">
            <i className="fas fa-bars col-4 menu"></i>
            <div className='col-md-8 col-4 logo'>
            <img src="https://cdn.shopify.com/s/files/1/0607/8618/0350/files/Logo_155x.png?v=1635777207" alt=""  />
            </div>
            <span className='col-4 uss'>
            <i className="fas fa-search"></i>
            <i className="fab fa-shopify"></i>
            <i className="fas fa-user hdn"></i>
            <i className="fas fa-sliders-h hdn"></i>
            </span>
            </div>
            <div className="nav">
                <ul>
                    <li>Apparel</li>
                </ul>
            </div>
        </div>
    )
}
export default TopBar;