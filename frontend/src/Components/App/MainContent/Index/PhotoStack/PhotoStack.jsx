import React, {useEffect} from "react";
import {useDrag} from "react-use-gesture";
import {useSprings, animated, interpolate} from "react-spring";
import styles from "./PhotoStack.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {addGonePhoto, allPhotosGone, setTopPhotoIndex} from "./photoStack-reducer";
import {getPhotos} from "./photoStack-selectors";

const defaultPosition = (i) => ({
    xy: [0, i * -4],
    scale: 1,
    rotation: -10 + Math.random() * 20,
    perspective: 2000,
    delay: i * 100
})
const interpolation = (xy, scale, rotation, perspective) => `translate3d(${xy[0]}px,${xy[1]}px, 0) perspective(${perspective}px) rotateX(10deg) rotateY(${rotation / 10}deg) rotateZ(${rotation * 5}deg) scale(${scale})`

const PhotoStack = (props) => {

    const dispatch = useDispatch();

    const photos = useSelector(getPhotos);

    const topPhotoIndex = useSelector(state => state.photoStackReducer.topPhotoIndex);

    const [springProps, set] = useSprings(photos.length, (i) => ({
        ...defaultPosition(i),
        from: {
            xy: [0, -1000],
            scale: 1.5,
            rotation: 0,
            perspective: 5000
        }
    }));

    useEffect(() => () => {
        dispatch(setTopPhotoIndex(photos.length - 1))
    }, [])

    const bind = useDrag(({args: [index], down, movement, velocity, direction: [xDir], dragging}) => {
        if (index !== topPhotoIndex) return;
        let isGone = false;
        let trigger = velocity > 0.2 && xDir > 0;
        if (!down && trigger) {
            dispatch(addGonePhoto(photos[index]));
            dispatch(setTopPhotoIndex(index - 1));
            isGone = true;
        }
        set((i) => {
            if (index !== i) return;
            let xy = isGone ? [500 + window.innerWidth, 0] : down ? movement : [0, 0];
            let scale = down ? 1.5 : 1;
            let rotation = isGone ? 10 * velocity : 0;
            let perspective = down ? 5000 : 2000;
            return {xy, scale, rotation, perspective, config: {friction: 50, tension: down ? 800 : isGone ? 200 : 500}}
        })
        if (isGone && !down && topPhotoIndex === 0) setTimeout(() => {
            dispatch(allPhotosGone())
            set((i) => defaultPosition(i))
        }, 1000)
    })

    return (
        <div className={styles.photosContainer}>
            {springProps.map(({xy, scale, rotation, perspective, dragged}, i) => {
                return (
                    <animated.div key={i} className={styles.photo} {...bind(i)}
                                  style={{
                                      transform: interpolate([xy, scale, rotation, perspective], interpolation),
                                      backgroundImage: `url(${photos[i].url})`,
                                      width: photos[i].height > photos[i].width ? "20%" : "30%",
                                      height: 0,
                                      paddingBottom: photos[i].height > photos[i].width ?
                                          0.2 * photos[i].height * 100 / photos[i].width + "%" :
                                          0.3 * photos[i].height * 100 / photos[i].width + "%",
                                  }}/>)
            })}
        </div>)


}


export default PhotoStack




