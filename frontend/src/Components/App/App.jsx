import React, {useEffect, useState} from 'react'
import style from './App.module.scss';
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import Background from "./Background/Background";
import {useDispatch, useSelector} from "react-redux";
import {toggleHeaderMenu} from "./app-reducer";
import {setBackgroundAnimationProps} from "./Background/ContactsAnimation/ContactsAnimation";
import Preloader from "../Common/Preloader/Preloader";
import cacheImages from "../../utils/cacheImages";

function App() {
    const dispatch = useDispatch()

    const setHeaderMenuInvisible = (e) => {
        e.stopPropagation()
        dispatch(toggleHeaderMenu(false))
    }

    const [isLoading, setIsLoading] = useState(true)
    const images = useSelector(state => state.appReducer.imagesForPreloading)

    useEffect(() => {
        cacheImages(images).then(() => {
            setIsLoading(false)})
    }, []);


    return (
        <div className={style.app}
             onMouseMove={({clientX: x, clientY: y}) => setBackgroundAnimationProps(x, y)}>
            {isLoading ? <Preloader/> :
                <>
                    <Background/>
                    <div className={style.main__container} onClick={setHeaderMenuInvisible}>
                        <Header/>
                        <MainContent/>
                        <Footer/>
                    </div>
                </>}
        </div>
    );
}

export default App;
