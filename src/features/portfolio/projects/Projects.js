import './Projects.scss';

import React, { useEffect, useState } from "react";

import ProjectRow from "./ProjectRow/ProjectRow";

import Firestore from "../../../utils/firestore";
import { collection, getDocs } from "firebase/firestore";
import {FormattedMessage} from "react-intl";

import Constants from "../../../shared/utils/Constants";


export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then();
    }, []);

    const fetchProjects = async() => {
        const querySnapshot = await getDocs(collection(Firestore, "Projects"));
        querySnapshot.forEach((doc) => {
            setProjects(projects => [...projects,  {...{"id" : doc.id}, ...doc.data() }]);
        });
    }

    return (
        <>
            <div>
                <h1 className={"title"}><FormattedMessage id={"projects"} defaultMessage={Constants.PROJECTS} /></h1>
                <p className={"subtitle"}><FormattedMessage id={"project_subtitle"} defaultMessage={Constants.PROJECT_SUBTITLE} /></p>
                <div className={"fluid-container m-5 scroll-bounce"}>
                    { projects.map(project => <ProjectRow key={project.id}
                                                          link={project.link}
                                                          cover={project.cover}
                                                          title={project.title}
                                                          description={project.description} />)}
                </div>
            </div>
        </>);
}