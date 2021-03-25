import React from "react";
import museumSCR_1 from "../../../../../Assets/Images/Projects/museum-menu-min.jpg"
import museumSCR_2 from "../../../../../Assets/Images/Projects/museum-1-min.jpg"
import museumSCR_3 from "../../../../../Assets/Images/Projects/museum-2-min.jpg"
import museumSCR_4 from "../../../../../Assets/Images/Projects/museum-3-min.jpg"
import styles from "../Projects.module.scss"
import Swiper from "../../../../Common/Swiper/Swiper";

const VirtualOwlMuseum = (props) => {
    let slides = [
        <div key={museumSCR_1}>
            <img src={museumSCR_1} width="100%" alt={"Screenshot_1"}/>
            <div className={styles.slideDescription}>Главное меню. Вход в залы музея.</div>
        </div>,
        <div key={museumSCR_2}>
            <img src={museumSCR_2} width="100%" alt={"Screenshot_2"}/>
            <div className={styles.slideDescription}>Изображение совы Афины. Экспонат из античного зала.</div>
        </div>,
        <div key={museumSCR_3}>
            <img src={museumSCR_3} width="100%" alt={"Screenshot_3"}/>
            <div className={styles.slideDescription}>Ястребиная сова. Экспонат зала классического искусства.</div>
        </div>,
        <div key={museumSCR_4}>
            <img src={museumSCR_4} width="100%" alt={"Screenshot_4"}/>
            <div className={styles.slideDescription}>Изображение совы из зала современного искусства.</div>
        </div>
    ]

    return (
        <div>
            <h1>Virtual owl museum</h1>
            <div className={styles.description}>
                <p>
                    Программа представляет собой виртуальный музей, позволяющий
                    посмотреть на изображения сов в искусстве от каменного века до
                    современности. Описания картин перемежаются с интересными
                    фактами о совах.
                </p>

                <p>
                    В музее собрано 103 экспоната, представленных в 7-ми залах.
                    Самое раннее изображение датируется 30-м тысячелетием до Н.Э.
                    Новейшая картина относится к 2019 году.
                </p>

                <p>
                    Программа была разработана с помощью библиотеки pygame.
                    Имеется возможность расширения коллекции музея посредством добавления
                    изображений в папки залов. При запуске используется разрешение
                    экрана, заданное системой, и все картины и описания к ним
                    масштабируются под это разрешение.
                </p>
            </div>

            <div className={styles.projectLinks}>
                <a href="https://github.com/vasiliypozhinskiy/Virtual-owl-museum" target="_blank" rel="noreferrer">Репозиторий
                    проекта</a>
            </div>
            <div className={styles.swiper}>
                <Swiper effect={"cube"} slides={slides}/>
            </div>
        </div>

    )
}

export default VirtualOwlMuseum
