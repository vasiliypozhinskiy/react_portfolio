import React from "react";
import {useLocation} from "react-router-dom"
import styles from "./Footer.module.scss"

const Footer = (props) => {
    let location = useLocation()
    let style = location.pathname === "/" ? styles.footer__container_index : styles.footer__container

    return (
        <footer className={style}>
            <span>Designed by Vasiliy Pozhinskiy © 2020</span>
        </footer>
    )
}

export default Footer
