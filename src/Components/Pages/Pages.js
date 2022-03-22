import React from 'react';
import Footbar from '../TopBar/FootBar/Footbar';
import Topbar from '../TopBar/TopBar';

const Pages = (p) => {
    return (
        <>
        <Topbar/>
        {p.page}
        <Footbar/>
        </>
    );
}

export default Pages;
