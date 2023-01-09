import './ProjectDetails.scss';

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";
import Firestore from "../../../../utils/firestore";
import { Locale } from "../../../../shared/utils/Languages";

import Tag from "../../../../shared/tag/Tag";

export default function ProjectDetails() {

    const currentLanguage = Locale;

    const history = useHistory();

    let { id } = useParams();

    const [projectDetails, setProjectDetails] = useState({});

    const fetchProjectDetails = async() => {
        const documentReference = doc(Firestore, "ProjectDetails", id);
        const documentSnapshot = await getDoc(documentReference);
        if (documentSnapshot.exists()) {
            setProjectDetails(documentSnapshot.data());
        } else {
            history.push('/projects');
        }
    }

    useEffect(() => {
        fetchProjectDetails().then();
    }, []);

    return (<>
        <div className={"container"}>
            <h1 className={"title"}>
                {projectDetails.title}
            </h1>
            <div className={"mt-5"}>
                { projectDetails.tags && projectDetails.tags.map(tag => tag.length > 0 && (<Tag value={tag} />))}
            </div>
            <div className={"row mt-5"}>
                <div className={""}>
                    <p>{projectDetails.description && projectDetails.description[currentLanguage]}</p>
                </div>
            </div>
            <div className={"row mt-5"}>
                { projectDetails.screens && projectDetails.screens.map(screen =>
                    (<div className={"col-4"}>
                        <img className={'image'} src={screen} alt={"DEFAULT IMAGE"}/>
                    </div>))
                }
            </div>
            <div className={"row mt-5 mb-5"}>
                <div className="btn">
                    <a href={`${projectDetails.github}`} target={"_blank"}>Github</a>
                </div>
            </div>
        </div>
    </>);
}