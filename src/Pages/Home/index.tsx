import React from "react"
import Banner from "../Banner";
import Report from "../Book/Report";
import Styles from "./home.scss"


const Home: React.FC = ()=> {

    return (
        <main className={Styles.wrapper}>
        <div className={Styles.container}>
            <div className={Styles.banner}>
                <Banner/>
            </div>
            <div className={Styles.mainWrapper}>
                <div className={Styles.sideBar}></div>
                <div className={Styles.contentRight}>
                    <Report/>
                </div>
            </div>

        </div>
        </main>
    );
}

export default Home;