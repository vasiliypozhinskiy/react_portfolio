import React from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import ProjectsPlanner from "./ProjectsPlanner/ProjectsPlanner";
import VirtualOwlMuseum from "./VirtulaOwlMuseum/VirtualOwlMuseum";
import Packing from "./Packing/Packing";
import GetRecipe from "./GetRecipe/GetRecipe";
import TypingTrainer from "./TypingTrainer/TypingTrainer";
import styles from "./Projects.module.scss"
import Doomanoid from "./Doomanoid/Doomanoid";
import doomanoidIMG from "../../../../Assets/Images/Projects/Cards/doomanoid-card.jpg"
import getRecipeIMG from "../../../../Assets/Images/Projects/Cards/get-recipe-card.jpg"
import virtualOwlMuseumIMG from "../../../../Assets/Images/Projects/Cards/museum-card.jpg"
import packingCardIMG from "../../../../Assets/Images/Projects/Cards/packing-card.jpg"
import projectPlannerIMG from "../../../../Assets/Images/Projects/Cards/project-planner-card.jpg"
import typingTrainerIMG from "../../../../Assets/Images/Projects/Cards/typing-trainer-card.jpg"
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = (props) => {
    const location = useLocation()

    const cards = [
        {name: 'Doomanoid', url: '/projects/doomanoid', imgUrl: doomanoidIMG},
        {name: 'Packing', url: '/projects/packing', imgUrl: packingCardIMG},
        {name: 'Virtual owl museum', url: '/projects/virtual-owl-museum', imgUrl: virtualOwlMuseumIMG},
        {name: 'Project planner', url: '/projects/project-planner', imgUrl: projectPlannerIMG},
        {name: 'Get recipe', url: '/projects/get-recipe', imgUrl: getRecipeIMG},
        {name: 'Typing trainer', url: '/projects/typing-trainer', imgUrl: typingTrainerIMG},
    ]

    return (
        <div className={styles.projectsContainer}>
            <Switch>
                <Route path='/projects/doomanoid' component={Doomanoid}/>
                <Route path='/projects/project-planner' component={ProjectsPlanner}/>
                <Route path='/projects/virtual-owl-museum' component={VirtualOwlMuseum}/>
                <Route path='/projects/get-recipe' component={GetRecipe}/>
                <Route path='/projects/packing' component={Packing}/>
                <Route path='/projects/typing-trainer' component={TypingTrainer}/>
            </Switch>
            {location.pathname === '/projects' && <div className={styles.cardsContainer}>
                {cards.map(card => <ProjectCard name={card.name} url={card.url} imgUrl={card.imgUrl}/>)}
            </div>}
        </div>
    )
}

export default Projects
