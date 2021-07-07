import React from "react"
import FooterMain from "./Footer/FooterMain"
import Styles from "./layout.scss"
import NavTop from "./NavBar/NavTop"


const Layout: React.FC = ({children})=> {


    return (
        <div className={Styles.layout}>
        <div className={Styles.container}>
            <NavTop/>
        </div>

        <footer>
            <FooterMain/>
        </footer>
        </div>
    );
}

export default Layout;