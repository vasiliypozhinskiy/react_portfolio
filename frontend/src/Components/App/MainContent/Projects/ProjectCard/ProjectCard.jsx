import React from 'react'
import styles from './ProjectCard.module.scss'
import {animated, useSpring} from 'react-spring'
import {NavLink} from "react-router-dom";

const trans = (x, y, s) => `perspective(600px) rotateX(${y / 20}deg) rotateY(${x / 20}deg) scale(${s})`
const calc = (e) => {
    const element = e.target.getBoundingClientRect();

    const centerX = element.left + (element.right - element.left) / 2;
    const centerY = element.top + (element.bottom - element.top) / 2;

    const x = e.nativeEvent.clientX;
    const y = e.nativeEvent.clientY;
    return [x - centerX, centerY - y, 1.1]
}

const ProjectCard = (props) => {

    const [cardAnimation, setCardAnimation] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <animated.div className={styles.projectCard}
                      onMouseMove={(e) => setCardAnimation({xys: calc(e)})}
                      onMouseLeave={() => setCardAnimation({xys: [0, 0, 1]})}
                      style={{transform: cardAnimation.xys.interpolate(trans)}}
        >
            <div className={styles.projectCard__image} style={{backgroundImage: `url(${props.imgUrl})`}}>
                <NavLink to={props.url}/>
            </div>
            <div className={styles.projectCard__name}>{props.name}</div>
        </animated.div>
    )
}


export default ProjectCard
