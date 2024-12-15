import React from 'react';
import Fotter from '../components/Fotter/Fotter';
import Header from '../components/Header/Header';

import Routers from '../routes/Routers';
const Layout=()=>
{
    return(
        <>
        <Header/>
        <main>
            <Routers/>
        </main>
        <Fotter/>
        </>
    )
}

export default Layout;