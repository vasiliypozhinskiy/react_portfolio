import React from "react";
import styles from "./Button.module.scss"

const Button = (props) => {
    return (
        <button className={styles.button} {...props}/>
    )
}

export default Button
