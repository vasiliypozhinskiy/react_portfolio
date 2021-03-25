import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import styles from "./Index.module.scss"
import PhotoStack from "./PhotoStack/PhotoStack";

const Index = (props) => {
    return (
        <div className={styles.index__container}>
            <PhotoStack/>
            <AboutMe/>
        </div>
    )
}

export default Index
