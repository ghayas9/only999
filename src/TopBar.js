import './TopBar.css';
function TopBar(){
    var pages=[
        {
            name:'Apparel',link:'/',
            more:[
                    {name:'Tops',link:'/'},
                    {name:'T-Shirts',link:'/'},
                    {name:'Sweatshirts',link:'/'},
                    {name:'Hoodies',link:'/'},
                    {name:'Hight Neck',link:'/'},
                    {name:'Jeans',link:'/'},
                    {name:'Pajamas',link:'/'},
                    {name:'Nightsuits',link:'/'},
                    {name:'Tracksuits',link:'/'},
                ]
        },
        {
            name:'Home & Lifestyle',link:'/',
            more:[
                    {name:'Candles',link:'/'},
                    {name:'Home Essentials',link:'/'},
                    {name:'Frames',link:'/'},
                    {name:'Home Décor',link:'/'},
                    {name:'Stationary',link:'/'},
                    {name:'Cushions & Pillows',link:'/'},
                    {name:'Clocks',link:'/'},
                    {name:'Toys',link:'/'},
                ]
        },
        {
            name:'Jewelry',link:'/',
            more:[
                    {name:'Necklaces',link:'/'},
                    {name:'Rings',link:'/'},
                    {name:'Choker',link:'/'},
                    {name:'Earing',link:'/'},
                    {name:'Bracelets',link:'/'},
                    {name:'Anklet',link:'/'},
                ]
        },
        {
            name:'Party Supplies',link:'/',
            more:[
                    {name:'Birthday',link:'/'},
                    {name:'Anniversary',link:'/'},
                    {name:'Graduation',link:'/'},
                    {name:'Baby Shower',link:'/'},
                    {name:'Bridal Shower',link:'/'},
                    {name:'Balloons',link:'/'},
                    {name:'Party Props',link:'/'},
                    {name:'Engagement',link:'/'},
                ]

        },
        {
            name:'Gadgets',link:'/',
            more:[
                    {name:'Mobile Accessories',link:'/'},
                    {name:'Wearables',link:'/'},
                    {name:'Speakers',link:'/'},
                    {name:'Photography Equipment',link:'/'},
                ]
        },
        {
            name:'Health & Beauty',link:'/',
            more:[
                    {name:'Beauty Tools',link:'/'},
                    {name:'Eye Makeup',link:'/'},
                    {name:'Lip Makeup',link:'/'},
                    {name:'Face Makeup',link:'/'},
                    {name:'Nail Art',link:'/'},
                    {name:'Makeup Brushes',link:'/'},
                    {name:'Cosmetic Organizer',link:'/'},
                ]
        },
        {
            name:'Accessories',link:'/',
            more:[
                    {name:'Hair Accessories',link:'/'},
                    {name:'Eyewear',link:'/'},
                    {name:'Watches',link:'/'},
                ]
        },
        {
            name:'Footwear',link:'/',
            more:[
                    {name:'Slippers',link:'/'},
                    {name:'Flip Flops',link:'/'},
                ]
        },
        {
            name:'Bags',link:'/',
            more:[
                    {name:'Bag Pack',link:'/'},
                    {name:'Cosmetics Pouch',link:'/'},
                    {name:'Clutch',link:'/'},
                    {name:'Wallet',link:'/'},
                    {name:'Crossbody',link:'/'},
                ]
        },
        {
            name:'999 or below',link:'/',
            more:[
                    {name:'Bag Pack',link:'/'},
                    {name:'Cosmetics Pouch',link:'/'},
                    {name:'Clutch',link:'/'},
                    {name:'Wallet',link:'/'},
                    {name:'Crossbody',link:'/'},
                ]
        },
    ]
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
            <div className="nav container-f">
                <ul>
                    {pages.map((e)=><li><span>{e.name} </span><i className="fas fa-caret-down"></i> <ul>{e.more.map((e1)=><li>{e1.name}</li>)} </ul> </li>)}
                </ul>
            </div>
        </div>
    )
}
export default TopBar;