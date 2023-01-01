import './Profile.scss';

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {defineMessages, FormattedMessage} from "react-intl";

import Constants from "../../../shared/utils/Constants";
import SquareCard from "../../../shared/cards/SquareCard";
import {collection, getDocs} from "firebase/firestore";
import Firestore from "../../../utils/firestore";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import {Locale} from "../../../shared/utils/Languages";


export default function Profile() {

    const currentLanguage = Locale;

    const [books, setBooks] = useState([]);
    const [timelines, setTimelines] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchBooks = async() => {
        const querySnapshot = await getDocs(collection(Firestore, "CurrentlyReading"));
        querySnapshot.forEach((doc) => {
            setBooks(books => [...books,  {...{"id" : doc.id}, ...doc.data() }]);
        });
        setLoading(false);
    }

    const fetchTimelines = async() => {
        const querySnapshot = await getDocs(collection(Firestore, "BriefHistory"));
        querySnapshot.forEach((doc) => {
            setTimelines(timelines => [...timelines,  {...{"id" : doc.id}, ...doc.data() }]);
        });
        setLoading(false);
    }

    useEffect(() => {
        fetchBooks().then();
        fetchTimelines().then();
    }, []);

    useEffect(() => { }, [isLoading]);


    const CurrentlyReading = () => {
        if (isLoading) {
            return (<div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading</span>
                    </div>)
        } else {
            return books.map(book =>
                <>
                    <div className={"col"}>
                        <SquareCard key={book.id} cover={book.cover} title={book.title} author={book.author} quote={book.quote}/>
                    </div>
                </>);
        }
    }

    const CurrentlyListening = () => {
        if (isLoading) {
            return (<div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading</span>
            </div>)
        } else {
            return books.map(book =>
                <>
                    <div className={"col"}>
                        <SquareCard key={book.id} cover={book.cover} title={book.title} author={book.author} quote={book.quote}/>
                    </div>
                </>);
        }
    }

    const TimeLineElements = () => {
        return timelines.sort((a, b) => b.position - a.position).map(timelineElement => <>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={`${timelineElement.from} - ${timelineElement.to}`}>
                <p className="vertical-timeline-element-title">{timelineElement.title[currentLanguage]} <a href={timelineElement.link}>{timelineElement.entity}</a></p>
                <p className="vertical-timeline-element-subtitle">{timelineElement.location[currentLanguage]}</p>
            </VerticalTimelineElement>
        </>);
    }

    const line = defineMessages({
        line2: {
            id: 'profile_2_line',
            defaultMessage: '{e}'
        }
    })

    return (
        <div className={'container'}>
            <h1 className={'align-left'}>
                <FormattedMessage id="profile" defaultMessage={`${Constants.PROFILE}`} />
            </h1>

            <div className={"row"}>
                <div className={'col-sm-6 paragraph'}>
                    <h3 className={"mb-3"}>
                        <FormattedMessage id="about_me" defaultMessage={``} />
                    </h3>
                    <p><FormattedMessage id="profile_1_line" values={{ Age: `${Constants.MY_AGE}`, City: `${Constants.CURRENT_LOCATION.city}`, Country: `${Constants.CURRENT_LOCATION.country[currentLanguage]}` }} /></p>
                    <p><FormattedMessage id="profile_2_line" /></p>
                    <p><FormattedMessage id="profile_3_line" /></p>
                    <p><FormattedMessage id="profile_4_line" /></p>
                    <p>
                        <FormattedMessage id="currently_working" />
                        <Link to={{ pathname: `${Constants.CURRENT_COMPANY.link}` }} target="_blank">
                            <div className={"company-link"} style={{color: `${Constants.CURRENT_COMPANY.color}`}}>
                                <FormattedMessage id="current_company" defaultMessage={`${Constants.CURRENT_COMPANY.name}`} />.
                            </div>
                        </Link>
                    </p>
                </div>
                <div className={"col-sm-6 mb-4 align-center"}>
                    <img className={"memoji"} src={Constants.MEMOJI} alt={"Memoji"}/>
                </div>
            </div>


            <div className={"row"}>
                <div className={'paragraph'}>
                    <h3>
                        <FormattedMessage id="brief_history" defaultMessage={``} />
                    </h3>

                    <VerticalTimeline>
                        <TimeLineElements />
                    </VerticalTimeline>
                </div>
            </div>

            <div className={"row"}>
                <div className={'paragraph'}>
                    <h3>
                        <FormattedMessage id="currently_reading" defaultMessage={``} />
                    </h3>
                    <div className={"container-fluid mt-4"}>
                        <div className={"row"}>
                            <CurrentlyReading />
                        </div>
                    </div>
                </div>
            </div>


            <div className={'row'}>
                <div className={'paragraph'}>
                    <h3 className={"mb-3"}>
                        <FormattedMessage id="career_goals" defaultMessage={``} />
                    </h3>
                    <p>
                        <FormattedMessage id="career_goals_line" defaultMessage={``} />
                    </p>
                </div>
            </div>

        </div>)
}