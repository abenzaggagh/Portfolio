import './Projects.scss';

import React, { useEffect, useState } from "react";

import ProjectRow from "./ProjectRow/ProjectRow";

import Firestore from "../../../utils/firestore";
import { FormattedMessage } from "react-intl";

import { collection, getDocs } from "firebase/firestore";

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
            <div className={"container"}>
                <h1 className={"title"}>
                    <FormattedMessage id={"projects"} defaultMessage={Constants.PROJECTS} />
                </h1>

                <div>
                    <p className={"subtitle"}>
                        <FormattedMessage id={"project_subtitle"} defaultMessage={Constants.PROJECT_SUBTITLE} />
                    </p>
                </div>

                {/* <div className={"row mt-4"}>
                    { Constants.PROJECTS_TECHNOLOGIES.map(technology =>
                        <div className={"col"}>
                            <button className={""}>{ technology }</button>
                        </div>
                    )}
                </div> */}

                <div className={"fluid-container m-5 scroll-bounce"}>
                    { projects.map(project => <ProjectRow key={project.id}
                                                          id={project.id}
                                                          link={project.link}
                                                          cover={project.cover}
                                                          title={project.title}
                                                          preview={project.preview}
                                                          description={project.description} />)}
                </div>
            </div>
        </>);
}