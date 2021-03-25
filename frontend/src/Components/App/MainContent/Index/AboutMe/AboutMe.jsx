import React from "react";
import styles from "./AboutMe.module.scss"
import backgroundImage from "../../../../../Assets/Images/Backgrounds/notepad-min.png"

const AboutMe = (props) => {
    return (
        <div className={styles.aboutMe__container} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={styles.leftPage}>
                <h2>Личные данные</h2>
                <div className={styles.leftPage__personalData}>ФИО:&nbsp;Пожинский&nbsp;Василий&nbsp;Анатольевич</div>
                <div className={styles.leftPage__personalData}>Дата рождения: 22.07.1992</div>
                <h2>Навыки</h2>
                <ul>
                    <li className={styles.skills__li}>Python 3: Flask, PyQT5</li>
                    <li className={styles.skills__li}>Javascript: React, Redux, Redux-thunk, React-spring, Jquery, Vue, Vuex</li>
                    <li className={styles.skills__li}>Базы данных: Postgres, MongoDB, Sqlite</li>
                    <li className={styles.skills__li}>Вёрстка: HTML5, CSS3, SCSS</li>
                    <li className={styles.skills__li}>Контейнеризация: Docker, Docker-compose</li>
                    <li className={styles.skills__li}>Сетевые протоколы: HTTP, Websocket</li>
                    <li className={styles.skills__li}>Системы контроля версий: Git</li>
                    <li className={styles.skills__li}>Английский язык: Intermediate</li>
                </ul>
            </div>

            <div className={styles.rightPage}>
                <h2>Основное образование</h2>
                <span>СПбГМТУ (специальность «прикладная математика»). 2009—2014.</span>
                <h2>Дополнительное образование</h2>
                <ul>
                    <li className={styles.skills__li}>«Python: основы и применение». Bioinformatics Institute. Stepik.org</li>
                    <li className={styles.skills__li}>«Алгоритмы и структуры данных на python 3. МФТИ</li>
                    <li className={styles.skills__li}>«Интерактивный тренажер по SQL». Дальневосточный федеральный университет. Stepik.org</li>
                    <li className={styles.skills__li}>«Основы Git». Mark Zaslavskiy. Stepik.org</li>
                    <li className={styles.skills__li}>«Веб разработка для начинающих: HTML и CSS». ITC. Stepik.org</li>
                    <li className={styles.skills__li}>«ReactJS — Путь Самурая 1.0». Дмитрий Кузюбердин</li>
                </ul>

                <div className={styles.interests}>
                    <h2>Интересы</h2>
                    <ul className={styles.interests__list}>
                        <li className={styles.interests__li}>Настольные игры</li>
                        <li className={styles.interests__li}>Пешеходный туризм</li>
                        <li className={styles.interests__li}>Фантастическая литература</li>
                        <li className={styles.interests__li}>Компьютерные стратегии</li>
                        <li className={styles.interests__li}>Кулинария</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
