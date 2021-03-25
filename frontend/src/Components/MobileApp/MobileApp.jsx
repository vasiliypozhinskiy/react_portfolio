import React from "react"
import styles from "./MobileApp.module.scss"
import inDevelopment from "../../Assets/Mobile/ComingSoon.gif"

const MobileApp = (props) => {
    return (
        <div className={styles.mobileAppContainer}>
            <img src={inDevelopment} alt={''}/>
            <div>Мобильная версия в разработке</div>
        </div>
    )
}

export default MobileApp
