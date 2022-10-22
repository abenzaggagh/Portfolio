import './Resume.scss';

import SquareButton from "../../../shared/buttons/square-btn/SquareButton";

import Constants from "../../../shared/utils/Constants";

import Skills from "./Skills/Skills";
import Experiences from "./Experience/Experiences";
import {FormattedMessage} from "react-intl";
import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import Firestore from "../../../utils/firestore";
import Education from "./Education/Education";

export default function Resume() {

    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchEducations = async() => {
        const querySnapshot = await getDocs(collection(Firestore, "Educations"));
        querySnapshot.forEach((doc) => {
            setEducations(educations => [...educations,  {...{"id" : doc.id}, ...doc.data() }]);
        });
        setLoading(false);
    }

    const fetchExperiences = async() => {
        const querySnapshot = await getDocs(collection(Firestore, "Experiences"));
        querySnapshot.forEach((doc) => {
            setExperiences(experiences => [...experiences,  {...{"id" : doc.id}, ...doc.data() }]);
        });
        setLoading(false);
    }

    useEffect(() => {
        fetchEducations().then();
        fetchExperiences().then();
    }, []);

    useEffect(() => { }, [isLoading]);

    return (
        <>
            <div className={"container"}>

                <h1 className={'align-left'}>
                    <FormattedMessage id="resume" defaultMessage={`${Constants.RESUME}`} />
                </h1>

                <Experiences title={"experience_title"} experiences={experiences} />

                <Education title={"education_title"} educations={educations} />

                <Skills title={"skills_title"} skills={Constants.LIST_OF_SKILLS} />

                <div className={"row mt-5 mb-5"}>
                    <div className={"col"}>
                        <SquareButton isFile={true}
                                      style={"raise"}
                                      title={"Curriculum vitae"}
                                      defaultTitle={""}
                                      link={"https://firebasestorage.googleapis.com/v0/b/abenzaggagh.appspot.com/o/Curriculum%20vitae%2FAmine%20BEN%20ZAGGAGH%20-%20CV.pdf?alt=media&token=fe44e02b-2432-4300-8bc1-5f692f1605fc"}/>
                    </div>
                </div>
            </div>
        </>
    );
}