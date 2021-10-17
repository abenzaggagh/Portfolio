import './Projects.scss';

import { useEffect, useState } from "react";

import ProjectRow from "./ProjectRow/ProjectRow";

import Firestore from "../../../utils/firestore";
import { collection, getDocs } from "firebase/firestore";


export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchProjects().then();
    }, []);

    const fetchProjects = async() => {
        const querySnapshot = await getDocs(collection(Firestore, "Projects"));
        querySnapshot.forEach((doc) => {
            setProjects(projects => [...projects,  {...{"id" : doc.id}, ...doc.data() }]);
        });
    }

    return (<div>
        <h1 className={"title"}>Projects</h1>
        <div className={"fuild-container m-5 scroll-bounce"}>
            { projects.map(project => <ProjectRow key={project.id} title={project.title} link={project.link} />)}
        </div>
    </div>);
}