import './Projects.scss';

import React, { useEffect, useState } from "react";

import ProjectRow from "./ProjectRow/ProjectRow";

import Firestore from "../../../utils/firestore";
import { FormattedMessage } from "react-intl";

import { collection, getDocs } from "firebase/firestore";

import Constants from "../../../shared/utils/Constants";

import * as _ from 'lodash';

export default function Projects() {

    const [projects, setProjects] = useState([]);

    const chunkedProjects = _.chunk(projects, 3);

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

                <div className={"fluid-container m-1 scroll-bounce"}>
                    { chunkedProjects.map((listProjects, index) =>
                        (<div className={'row'}>
                            { listProjects.map(project => <ProjectRow key={index}
                                                                  id={project.id}
                                                                  link={project.link}
                                                                  cover={project.cover}
                                                                  title={project.title}
                                                                  preview={project.preview}
                                                                  description={project.description} />)}
                        </div>)
                    )}

                </div>
            </div>
        </>);
}