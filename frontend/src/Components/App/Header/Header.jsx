import React from "react";
import styles from "./Header.module.scss";
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown";
import NavItem from "../../Common/NavItem/NavItem";
import {useLocation} from "react-router-dom";

const Header = (props) => {
    let location = useLocation()
    let style = location.pathname === "/" ? styles.navItem_index : ""
    let activeStyle = location.pathname === "/" ? styles.active : ""

    return (
        <header>
            <div className={styles.header__menu}>
                <NavItem styleClass={style} activeStyleClass={activeStyle} component={'NavLink'} path={'/'} text={'about me'}/>
                <HeaderDropdown className={style}/>
                <NavItem styleClass={style} activeStyleClass={activeStyle} component={'NavLink'} path={'/contacts'} text={'contacts'}/>
            </div>
        </header>
    )
}

export default Header
