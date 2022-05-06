import React from 'react';
import Footbar from '../TopBar/FootBar/Footbar';
import Topbar from '../TopBar/TopBar';

const Pages = (p) => {
    const page = p.page;
    return (
        <>
        <Topbar/>
        {page}
        <Footbar/>
        </>
    );
}

export default Pages;
