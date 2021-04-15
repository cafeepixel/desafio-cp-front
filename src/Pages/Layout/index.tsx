import React from "react"
import Styles from "./layout.scss"
import NavTop from "./NavBar/NavTop"
import FooterMain from "./Footer/FooterMain"


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