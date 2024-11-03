import React from "react";
import Banner from "./Banner";

const Layout = ({children}) => {
    return(
        <>
            <Banner />
            <div style={{paddingTop: '50px'}}>{children}</div>
        </>
    );
};

export default Layout;