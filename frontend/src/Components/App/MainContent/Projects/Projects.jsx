import React from "react";
import {Route, Switch} from "react-router-dom";
import ProjectsPlanner from "./ProjectsPlanner/ProjectsPlanner";
import VirtualOwlMuseum from "./VirtulaOwlMuseum/VirtualOwlMuseum";
import Packing from "./Packing/Packing";
import GetRecipe from "./GetRecipe/GetRecipe";
import TypingTrainer from "./TypingTrainer/TypingTrainer";
import styles from "./Projects.module.scss"
import Doomanoid from "./Doomanoid/Doomanoid";

const Projects = (props) => {
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
        </div>
    )
}

export default Projects
