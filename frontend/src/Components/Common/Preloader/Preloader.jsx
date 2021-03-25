import React from "react"
import preloaderIMG from "../../../Assets/Images/Gear-preloader.svg"
import styles from "./Preloader.module.scss"

const Preloader = (props) => {
    return (
        <div className={styles.container}>
            <img src={preloaderIMG} alt={"loading..."}/>
        </div>
    )
}

export default Preloader
