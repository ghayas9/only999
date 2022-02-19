import React from 'react';
import Icons from '../../Icons/Icons';
import './Footbar.css';
import Morepages from './Morepages';

const Footbar = () => {
    var pagesinfo=[
        {name:'Contact Us'},
        {name:'Search'},
        {name:'Privacy Policy'},
        {name:'Terms of Service'},
        {name:'Exchange Policy'},
        {name:'Compare'}
    ]
    var pages=[
        {
            name:'Apparel',link:'/',
        },
        {
            name:'Home & Lifestyle',link:'/',
        },
        {
            name:'Jewelry',link:'/',
        },
        {
            name:'Party Supplies',link:'/',

        },
        {
            name:'Gadgets',link:'/',
        },
        {
            name:'Health & Beauty',link:'/',
        },
        {
            name:'Accessories',link:'/',
        },
        {
            name:'Footwear',link:'/',
        },
        {
            name:'Bags',link:'/',
        },
        {
            name:'Rs 999 or below',link:'/'
        
        },
    ];

    return (
        <div className='footbar '>
            <div className="footheader container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        BE IN TOUCH WITH US:
                    </div>
                    <div className="col-lg-6">
                        <input type="text" placeholder='Enter Email' className='col-9 col-md-10'/>
                        <button className='col-3 col-md-2' style={{color:'whitesmoke'}}>JOIN US</button>
                    </div>
                    <div className="col-3 social-footbar">
                        <Icons/>
                    </div>
                </div>
            </div>

            <div className="row container-fluid footpages">
                    <div className="col-md-6 col-lg-3">

                        <Morepages
                        name='More Information'
                        comp={<>{pagesinfo.map((e)=><li>{e.name}</li>)}</>}
                        />
                    
                    </div>
                    <div className="col-md-6 col-lg-3">

                        <Morepages 
                        name='CATEGORIES'
                        comp={pages.map((e,index)=>(index+1!=pages.length?<li>{e.name}</li>:<li className='animation'><span>{e.name} </span></li>))}
                        />
                    </div>
                    <div className="col-md-6 col-lg-3">

                        <Morepages
                        name='ABOUT'
                        comp={<p>
                            A place where we bring you the most satisfying shopping experience as possible and If it doesnt work out there is always our return and exchange policy you can use.
                            </p>}
                        />


                    </div>
                    <div className="col-md-6 col-lg-3">

                        <Morepages 
                        name='CONTACT US'
                        comp={
                                <>
                                    <b>ADDRESS</b>: university road peshawar
                                    <br />
                                    <b>PHONE</b>: +92 343 6402064
                                    <br />
                                    <b>HOURS</b>: All week from 9:00 AM to 11:00 PM
                                    <br />
                                    <b>E-MAIL</b>: ghayasudin999@gmail.com
                                </>
                                }
                        />
                    
                    </div>
                </div>
            
        </div>
    );
}
export default Footbar;
