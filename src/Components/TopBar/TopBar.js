import React,{useState} from 'react';
import Drawer from './Drawer/Drawer';
import Logobar from './Logobar/Logobar';
import Navbar from './Navbar/Navbar';
import Social from './Social/Social';
import './Topbar.css';

const Topbar = () => {

    const [show, setshow] = useState();
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
            name:'Rs 999 or below',link:'/'
        
        },
    ];


    return (
        <div className="container-fluid topbar">
            <Drawer pages={pages} show={show} setshow={setshow}/>
            <Social/>
            <Logobar setshow={setshow} show={show}/>
            <Navbar pages={pages}/>

            
        </div>
    );
}

export default Topbar;
