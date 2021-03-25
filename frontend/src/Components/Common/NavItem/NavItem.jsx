import {NavLink} from "react-router-dom";
import React from "react";
import styles from "./NavItem.module.scss"

const NavItem = (props) => {
    const style = props.styleClass ? props.styleClass : styles.navItem;
    const activeStyle = props.activeStyleClass ? props.activeStyleClass : styles.active;
    if (props.component === "NavLink") {
        return <NavLink className={style} activeClassName={activeStyle} exact to={`${props.path}`}>{props.text}</NavLink>
    }

    return (
        <a className={style} href={props.path} target="_blank"
           rel="noreferrer">{props.text}</a>
    )
}

export default NavItem
