import Navigation from  './Navigation';
import Footer from "./Footer";

const Layout = ( {children} )=> {
    // console.log("layout children is", children )
    return(
        <>
            <Navigation />
            {children}
            {/* <Footer /> */}

          

           
        </>
    )
}

export default Layout;