import React from "react";
import Index from "./Index/Index";
import {Route, Switch, useLocation} from "react-router-dom";
import Contacts from "./Contacts/Contacts";
import styles from "./MainContent.module.scss"
import Projects from "./Projects/Projects";
import {useTransition, animated} from "react-spring";

const MainContent = (props) => {

    const location = useLocation()

    const pageAnimation = useTransition(location, location => location.pathname,
        {
            unique: true,
            reset: true,
            from: {opacity: 0},
            enter: {opacity: 1},
            leave: {opacity: 0},
            config: {duration: 300},
            trail: 300,
            order: ["leave", "enter", "update"]
        })

    return (
        <div className={styles.container}>
            {pageAnimation.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                    <div className={styles.animationContainer}>
                        <Switch location={item}>
                            <Route exact path='/' component={Index}/>
                            <Route path='/contacts' component={Contacts}/>
                            <Route path='/projects' component={Projects}/>
                        </Switch>

                    </div>
                </animated.div>))}
        </div>
    )
}

export default MainContent
