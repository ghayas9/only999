import React from 'react';
import Addpost from './componets/AddPost';
import Drawer from './componets/Drawer/Drawer';
import Products from './componets/products';


const Admin = () => {
    return (
        <div className="container-fluid">
            <div className="row">
             <Addpost/>
             <Products/>
            </div>
        </div>
        
    );
}

export default Admin;
