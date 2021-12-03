import React from 'react';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Pinterest from './Pinterest';
import Twitter from './Twitter';
import Whatsapp from './Whatsapp';

const Icons = () => {
    return (
        <div className="social-icons">
            <Facebook/>
            <Twitter/>
            <Instagram/>
            <Pinterest/>
            <Whatsapp/>
        </div>
    );
}

export default Icons;
