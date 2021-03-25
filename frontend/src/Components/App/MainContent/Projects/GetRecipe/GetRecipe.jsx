import React from "react";
import recipeSCR_1 from "../../../../../Assets/Images/Projects/get recipe-1-min.jpg"
import recipeSCR_2 from "../../../../../Assets/Images/Projects/get recipe-2-min.jpg"
import recipeSCR_3 from "../../../../../Assets/Images/Projects/get recipe-3-min.jpg"
import styles from "../Projects.module.scss"
import Swiper from "../../../../Common/Swiper/Swiper";


const GetRecipe = (props) => {
    let slides = [
        <div key={recipeSCR_1}>
            <img src={recipeSCR_1} width="100%" alt={"screenshot_1"}/>
            <div className={styles.slideDescription}>Введите нужные ингредиенты.</div>
        </div>,
        <div key={recipeSCR_2}>
            <img src={recipeSCR_2} width="100%" alt={"screenshot_2"}/>
            <div className={styles.slideDescription}>Полученый рецепт.</div>
        </div>,
        <div key={recipeSCR_3}>
            <img src={recipeSCR_3} width="100%" alt={"screenshot_3"}/>
            <div className={styles.slideDescription}>Рецепты, сохранённые в базе данных.</div>
        </div>
    ]

    return (
        <div>
            <h1>Get recipe</h1>
            <div className={styles.description}>
                <p>
                    Программа создана для тех, кто не знает, что приготовить. Можно посмотреть, какие продукты есть в холодильнике,
                    записать их в программу, и она выдаст рецепт приготовления. Также есть возможность получить случайный рецепт.
                </p>
                <p>
                    Программа создана с помощью фреймворка PyQT5. Рецепты берутся с сайта spoonacular.com. Для работы программы
                    требуется зарегестрироваться на сайте и получить api токен. После чего нужно создать системную переменную
                    food_api_key со значением токена.
                    Без доступа к сайту работает только локальная база данных, изображения блюд при этом загружаться не будут.
                </p>
            </div>

            <div className={styles.projectLinks}>
                <a href="https://github.com/vasiliypozhinskiy/get_recipe" target="_blank" rel="noreferrer">Репозиторий проекта</a>
            </div>

            <div className={styles.swiper}>
                <Swiper effect={"cube"} slides={slides} loop={false}/>
            </div>
        </div>

    )
}

export default GetRecipe
