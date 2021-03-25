import styles from "./Background.module.scss";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {animated, useSpring} from "react-spring";
import ContactsAnimation from "./ContactsAnimation/ContactsAnimation";

import indexBackground from "../../../Assets/Images/Backgrounds/notebook-1971495_1920.jpg";
import projectsBackground from "../../../Assets/Images/Backgrounds/background-projects-wall-min.jpeg";


const Background = (props) => {
    let location = useLocation()

    const [toggleAnimation, setToggleAnimation] = useState({
        index: 0,
        projects: 0,
        contacts: 0
    })
    const indexAnimation = useSpring({opacity: toggleAnimation.index ? 1 : 0, config: {duration: 1000}})
    const projectsAnimation = useSpring({opacity: toggleAnimation.projects ? 1 : 0, config: {duration: 1000}})
    const contactsAnimation = useSpring({opacity: toggleAnimation.contacts ? 1 : 0, config: {duration: 1000}})


    useEffect(() => {
        if (~location.pathname.indexOf("/contacts")) {
            setToggleAnimation({index: 0, projects: 0, contacts: 1})
        } else if (~location.pathname.indexOf("/projects")) {
            setToggleAnimation({index: 0, projects: 1, contacts: 0})
        } else if (location.pathname === "/") {
            setToggleAnimation({index: 1, projects: 0, contacts: 0})
        }
    },[location])

    return (
        <div>
            <animated.div className={styles.background} style={{...indexAnimation, backgroundImage: `url(${indexBackground})`}}/>
            <animated.div style={contactsAnimation}><ContactsAnimation/></animated.div>
            <animated.div className={styles.background} style={{...projectsAnimation,backgroundImage: `url(${projectsBackground})`}}/>
        </div>
    )
}

export default Background
