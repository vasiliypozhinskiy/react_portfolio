import React from "react";
import styles from "../Projects.module.scss"
import Swiper from "../../../../Common/Swiper/Swiper";
import typingTrainerSCR_1 from "../../../../../Assets/Images/Projects/Typing trainer-1-min.jpg";
import typingTrainerSCR_2 from "../../../../../Assets/Images/Projects/Typing trainer-2-min.jpg";

const TypingTrainer = (props) => {
    let slides = [
        <div key={typingTrainerSCR_1}>
            <img src={typingTrainerSCR_1} width="100%" alt={"Screenshot_1"}/>
            <div className={styles.slideDescription}>Приложение считает точность, скорость и количество ошибок</div>
        </div>,
        <div key={typingTrainerSCR_2}>
            <img src={typingTrainerSCR_2} width="100%" alt={"Screenshot_2"}/>
            <div className={styles.slideDescription}>Можно тренировать скорость печати на русском и английском языках.
            </div>
        </div>
    ]

    return (
        <div>
            <h1>Typing trainer</h1>
            <div className={styles.description}>
                <p>
                    Программа для тренировки скорости печати. Позволяет выбрать текст на русском и английском языке.
                    Количество предложений в тексте от 1 до 10. Тренажер написан с помощью фреймворка Vue.
                    Русский текст приложение получает с помощью api сайта FISH-TEXT.RU. Английский — METAPHORPSUM.COM.
                </p>
            </div>

            <div className={styles.projectLinks}>
                <a href="https://github.com/vasiliypozhinskiy/typing_trainer" target="_blank" rel="noreferrer">Репозиторий приложения</a>
            </div>

            <div className={styles.swiper}>
                <Swiper effect={"cube"} slides={slides} loop={false}/>
            </div>
        </div>

    )
}


export default TypingTrainer
