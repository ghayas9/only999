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
        </div>
    )
}
export default TopBar;