import React from "react";
import {animated, useSpring} from "react-spring"
import {Spring} from "react-spring/renderprops-universal";
import styles from "./ContactsAnimation.module.scss"

import skyImage from "../../../../Assets/Images/Backgrounds/background-contacts-sky-min.png"
import mountainImage from "../../../../Assets/Images/Backgrounds/background-contacts-mountain-min.png"
import fogImage from "../../../../Assets/Images/Backgrounds/background-contacts-fog-min.png"
import icebergImage from "../../../../Assets/Images/Backgrounds/background-contacts-iceberg-min.png"

const ScaleTransformMountain = (x, y) => `scale(${y / window.innerHeight / 5 + 1.1})`;
const ScaleTransformSky = (x, y) => `scale(${y / window.innerHeight / 5 + 1})`;
const ScaleTransformClouds = (x, y) => `scale(${y / window.innerHeight / 10 + 1})`;

const MoveTransform = (x, y) => `translate3d(0,${y / 5}px,0)`;
let setBackgroundAnimationProps = () => {
};

class FogAnimation extends React.Component {
    constructor() {
        super();
        this.state = {
            resetAnimation: false
        }
    }

    handleOnRest = () => {
        this.setState({
            resetAnimation: true
        });
    }

    render() {
        const scale = this.props.parallaxAnimation.xy.interpolate(ScaleTransformClouds)
        return (
            <Spring
                onRest={this.handleOnRest}
                reset={this.state.resetAnimation}
                from={{transform: `translateX(0%)`}}
                to={{transform: `translateX(-100%)`}}
                config={{duration: 80000}}
            >
                {props => {
                    return (
                        <animated.div className={styles.fog}
                                      style={{transform: scale}}
                        >
                            <animated.div className={styles.fog__part1}
                                          style={{...props, backgroundImage: `url(${fogImage})`}}
                            />
                            <animated.div className={styles.fog__part2}
                                          style={{...props, backgroundImage: `url(${fogImage})`}}
                            />
                            <animated.div className={styles.fog__part3}
                                          style={{...props, backgroundImage: `url(${fogImage})`}}
                            />
                            <animated.div className={styles.fog__part4}
                                          style={{...props, backgroundImage: `url(${fogImage})`}}
                            />
                            <animated.div className={styles.fog__part5}
                                          style={{...props, backgroundImage: `url(${fogImage})`}}
                            />
                        </animated.div>)
                }}
            </Spring>
        );
    }
}

const ContactsAnimation = (props) => {
    const [parallaxAnimation, setParallaxAnimation] = useSpring(() => ({
        xy: [0, 0],
        config: {mass: 10, tension: 550, friction: 140}
    }))

    setBackgroundAnimationProps = (x, y) => (setParallaxAnimation({xy: [x, y]}))
    return (
        <div className={styles.animationContainer}>
            <animated.div className={styles.sky} style={{
                transform: parallaxAnimation.xy.interpolate(ScaleTransformSky),
                backgroundImage: `url(${skyImage})`
            }}/>
            <FogAnimation parallaxAnimation={parallaxAnimation}/>
            <animated.div className={styles.mountain} style={{
                transform: parallaxAnimation.xy.interpolate(ScaleTransformMountain),
                backgroundImage: `url(${mountainImage})`
            }}/>
            <animated.div className={styles.iceberg} style={{
                transform: parallaxAnimation.xy.interpolate(MoveTransform),
                backgroundImage: `url(${icebergImage})`
            }}/>
        </div>
    )
}

export {
    setBackgroundAnimationProps
}

export default ContactsAnimation
