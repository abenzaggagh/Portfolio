import './Resume.scss';

import SquareButton from "../../../shared/buttons/square-btn/SquareButton";

import Constants from "../../../shared/utils/Constants";

import Skills from "./Skills/Skills";
import Experiences from "./Experience/Experiences";
import {FormattedMessage} from "react-intl";
import React, {useEffect, useState} from "react";
import {Locale} from "../../../shared/utils/Languages";
import {collection, getDocs} from "firebase/firestore";
import Firestore from "../../../utils/firestore";

export default function Resume() {

    const currentLanguage = Locale;

    const [experiences, setExperiences] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchExperiences = async() => {
        const querySnapshot = await getDocs(collection(Firestore, "Experiences"));
        querySnapshot.forEach((doc) => {
            setExperiences(experiences => [...experiences,  {...{"id" : doc.id}, ...doc.data() }]);
        });
        setLoading(false);
    }

    useEffect(() => {
        fetchExperiences().then();
    }, []);

    useEffect(() => { }, [isLoading]);


    return (
        <>
            <div className={"container"}>

                <h1 className={'align-left'}>
                    <FormattedMessage id="resume" defaultMessage={`${Constants.RESUME}`} />
                </h1>

                <Experiences title={"experience_title"} experiences={/*Constants.LIST_OF_EXPERIENCES*/experiences} />

                <Skills title={"skills_title"} skills={Constants.LIST_OF_SKILLS} />

                <div className={"row mt-5 mb-4"}>
                    <div className={"col-6"}>
                        <SquareButton isFile={true}
                                      style={"raise"}
                                      title={"Resume"}
                                      defaultTitle={""}
                                      link={"https://firebasestorage.googleapis.com/v0/b/abenzaggagh.appspot.com/o/Curriculum%20vitae%2FAmine%20BEN%20ZAGGAGH%20-%20Resume.pdf?alt=media&token=acdb0871-8432-45ff-b457-6128d45c9b4e"} />
                    </div>
                    <div className={"col-6"}>
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