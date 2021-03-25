import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import styles from "./HeaderDropdown.module.scss"
import {animated, useTransition} from 'react-spring'
import {useDispatch, useSelector} from "react-redux";
import {toggleHeaderMenu} from "../../app-reducer";


const HeaderDropdown = (props) => {

    const dropdownItems = [
        <NavLink className={styles.headerDropdown__item} name={'doomanoid'} to={"/projects/doomanoid"}>Doomanoid</NavLink>,
        <NavLink className={styles.headerDropdown__item} name={'project-planner'} to={"/projects/project-planner"}>Project
            planner</NavLink>,
        <NavLink className={styles.headerDropdown__item} name={'virtual-owl-museum'}
                 to={"/projects/virtual-owl-museum"}>Virtual owl museum</NavLink>,
        <NavLink className={styles.headerDropdown__item} name={'packing'} to={"/projects/packing"}>Packing</NavLink>,
        <NavLink className={styles.headerDropdown__item} name={'get-recipe'} to={"/projects/get-recipe"}>Get
            recipe</NavLink>,
        <NavLink className={styles.headerDropdown__item} name={'typing-trainer'} to={"/projects/typing-trainer"}>Typing
            trainer</NavLink>
    ]

    const isMenuVisible = useSelector(state => state.appReducer.isHeaderMenuOpen)
    const dispatch = useDispatch()

    const toggleVisible = (e) => {
        e.stopPropagation()
        dispatch(toggleHeaderMenu(!isMenuVisible))
    }

    const dropdownAnimation = useTransition(isMenuVisible ? dropdownItems : [], item => item.props.name,
        {
            unique: true,
            reset: true,
            from: {opacity: 0, transform: 'scale(0)'},
            enter: {opacity: 1, transform: 'scale(1)'},
            leave: {opacity: 0, transform: 'scale(0)'},
            trail: 300 / dropdownItems.length
        }
    )

    let dropDownStyle = ~props.location.pathname.indexOf("/projects/") ?
        styles.headerDropdown + " " + styles.active :
        props.location.pathname === "/" ?
        styles.headerDropdown_index :
        styles.headerDropdown;

    return (
        <nav onClick={toggleVisible} className={dropDownStyle}>PROJECTS
            <div onClick={(e) => {
                e.stopPropagation()
            }} className={styles.headerDropdown__list}>
                {
                    dropdownAnimation.map(({item, props, key}) => {
                        return <animated.div key={key}
                                             style={props}
                                             onClick={toggleVisible}>
                            {item}
                        </animated.div>
                    })
                }
            </div>
        </nav>
    )
}

export default withRouter(HeaderDropdown)
