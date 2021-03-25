import React from "react";
import packingSCR_1 from "../../../../../Assets/Images/Projects/packing-1-min.jpg"
import packingSCR_2 from "../../../../../Assets/Images/Projects/packing-2-min.jpg"
import styles from "../Projects.module.scss"
import Swiper from "../../../../Common/Swiper/Swiper";


const Packing = (props) => {
    let slides = [
        <div key={packingSCR_1}>
            <img src={packingSCR_1} width="100%" alt={"Screenshot_1"}/>
            <div className={styles.slideDescription}>Собранные вещи отмечаются зелёным цветом.</div>
        </div>,
        <div key={packingSCR_2}>
            <img src={packingSCR_2} width="100%" alt={"Screenshot_2"}/>
            <div className={styles.slideDescription}>Окно добавления предметов блокирует открытие новых окон.</div>
        </div>
    ]

    return (
        <div>
            <h1>Packing</h1>
            <div className={styles.description}>
                <p>
                    Программа для тех, кто много путешествует. Можно один раз составить список вещей для определённого
                    типа поездки,
                    а при последующих поездках останется только слегка отредактировать его под новое путешествие. Есть
                    возможность задавать вес вещей, что
                    может оказаться полезным для путешествий самолётом или для пеших походов.
                </p>
                <p>
                    Программа создана с помощью фреймворка PyQT5. Списки хранятся в виде дерева в
                    таблицах базы данных Sqlite. Существует защита от ввода неправильных данных и от
                    нарушения связности дерева.
                </p>
            </div>

            <div className={styles.projectLinks}>
                <a href="https://github.com/vasiliypozhinskiy/packing" target="_blank" rel="noreferrer">Репозиторий
                    проекта</a>
            </div>

            <div className={styles.swiper}>
                <Swiper effect={"cube"} slides={slides} loop={false}/>
            </div>
        </div>

    )
}

export default Packing
