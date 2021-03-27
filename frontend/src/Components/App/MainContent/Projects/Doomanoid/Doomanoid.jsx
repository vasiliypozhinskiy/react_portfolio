import React from "react";
import doomanoidSCR_1 from "../../../../../Assets/Images/Projects/doomanoid screenshot-1-min.jpeg"
import doomanoidSCR_2 from "../../../../../Assets/Images/Projects/doomanoid screenshot-2-min.jpeg"
import doomanoidSCR_3 from "../../../../../Assets/Images/Projects/doomanoid screenshot-3-min.jpeg"
import styles from "../Projects.module.scss"
import Swiper from "../../../../Common/Swiper/Swiper";

const Doomanoid = (props) => {
    let slides = [
        <div key={doomanoidSCR_1}>
            <img src={doomanoidSCR_1} width="100%" alt={"Screenshot_1"}/>
            <div className={styles.slideDescription}>В игре есть различные монстры и бонусы.</div>
        </div>,
        <div key={doomanoidSCR_2}>
            <img src={doomanoidSCR_2} width="100%" alt={"Screenshot_2"}/>
            <div className={styles.slideDescription}>Каждый пятый уровень — уровень с боссом. Босс с каждым разом усиливается.</div>
        </div>,
        <div key={doomanoidSCR_3}>
            <img src={doomanoidSCR_3} width="100%" alt={"Screenshot_3"}/>
            <div className={styles.slideDescription}>Количество монстров зависит от уровня.</div>
        </div>
    ]

    return (
        <div>
            <h1>Doomanoid</h1>
            <div className={styles.description}>
                <p>
                    Игра на javascript с использованием Jquery.
                    Уровни генерируются случайным образом на сервере flask.
                    Результаты можно сохранять в базу данных Postgres.
                </p>
            </div>

            <div className={styles.projectLinks}>
                <a href="http://doomanoid.ru/projects/arkanoid" target="_blank" rel="noreferrer">Поиграть можно тут</a>
            </div>

            <div className={styles.swiper}>
                <Swiper effect={"cube"} slides={slides} loop={false}/>
            </div>
        </div>

    )
}

export default Doomanoid
