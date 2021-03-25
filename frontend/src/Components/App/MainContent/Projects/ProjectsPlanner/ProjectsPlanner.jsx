import React from "react";
import plannerSCR_1 from "../../../../../Assets/Images/Projects/project planner-1-min.jpg"
import plannerSCR_2 from "../../../../../Assets/Images/Projects/project planner-2-min.jpg"
import plannerSCR_3 from "../../../../../Assets/Images/Projects/project planner-3-min.jpg"
import styles from "../Projects.module.scss"
import Swiper from "../../../../Common/Swiper/Swiper";

const ProjectsPlanner = (props) => {
    let slides = [
        <div key={plannerSCR_1}>
            <img src={plannerSCR_1} width="100%" alt={"Screenshot_1"}/>
            <div className={styles.slideDescription}>Проекты располагаются на временной оси.</div>
        </div>,
        <div key={plannerSCR_2}>
            <img src={plannerSCR_2} width="100%" alt={"Screenshot_2"}/>
            <div className={styles.slideDescription}>Выполненные проекты отмечаются штриховкой.</div>
        </div>,
        <div key={plannerSCR_3}>
            <img src={plannerSCR_3} width="100%" alt={"Screenshot_3"}/>
            <div className={styles.slideDescription}>Есть удобный календарь для выбора сроков выполнения.</div>
        </div>
    ]

    return (
        <div>
            <h1>Project planner</h1>
            <div className={styles.description}>
                <p>
                    Программа позволяет распределить проекты на временной оси. Подойдёт для людей, которые часто
                    выполняют
                    несколько
                    задач одновременно. Поможет правильно расставить приоритеты и оценить время до дедлайна для каждого
                    запланированного проекта.
                    Идея взята из курса СПбГМТУ "Организация производственных процессов".
                </p>
                <p>
                    Программа создана с помощью фреймворка PyQT5. Все проекты сохраняются в базу Sqlite.
                </p>
            </div>

            <div className={styles.projectLinks}>
                <a href="https://github.com/vasiliypozhinskiy/project_planner" target="_blank" rel="noreferrer">Репозиторий проекта</a>
            </div>

            <div className={styles.swiper}>
                <Swiper effect={"cube"} slides={slides} loop={false}/>
            </div>
        </div>

    )
}

export default ProjectsPlanner
