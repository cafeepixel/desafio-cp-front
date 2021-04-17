import Button from "@/Components/Button";
import React from "react"
import Banner from "../Banner";
import Report from "../Book/Report";
import Styles from "./home.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Category from "../Category";


const Home: React.FC = ()=> {


    return (
        <main className={Styles.wrapper}>

        <div className={Styles.container}>
            <div className={Styles.banner}>
                <Banner/>
            </div>
            <div id="main" className={Styles.mainWrapper}>
                <div className={Styles.sideBar}>
                    <Category/>
                </div>
                <div className={Styles.contentRight}>
                    <Report/>
                </div>
            </div>

        </div>
        </main>
    );
}

export default Home;