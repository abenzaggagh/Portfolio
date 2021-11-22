import './Profile.scss';

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

import Constants from "../../../shared/utils/Constants";
import SquareCard from "../../../shared/cards/SquareCard";
import {collection, getDocs} from "firebase/firestore";
import Firestore from "../../../utils/firestore";


export default function Profile() {

    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchBooks = async() => {
        const querySnapshot = await getDocs(collection(Firestore, "CurrentlyReading"));
        querySnapshot.forEach((doc) => {
            setBooks(books => [...books,  {...{"id" : doc.id}, ...doc.data() }]);
        });
        setLoading(false);
    }

    useEffect(() => {
        fetchBooks().then();
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


    return (
        <div className={'container'}>
            <h1 className={'align-left'}>
                <FormattedMessage id="profile" defaultMessage={`${Constants.PROFILE}`} />!
            </h1>

            <div className={"row"}>
                <div className={'col-sm-6 paragraph'}>
                    <h3 className={"mb-3"}>
                        <FormattedMessage id="about_me" defaultMessage={``} />
                    </h3>
                    <p><FormattedMessage id="profile_1_line" /></p>
                    <p><FormattedMessage id="profile_2_line" /></p>
                    <p><FormattedMessage id="profile_3_line" /></p>
                    <p><FormattedMessage id="profile_4_line" /></p>
                    <p>
                        <FormattedMessage id="currently_working" defaultMessage={``} />
                        <Link to={{ pathname: `${Constants.CURRENT_COMPANY.link}` }} target="_blank">
                            <FormattedMessage id="current_company" defaultMessage={`${Constants.CURRENT_COMPANY.name}`} />.
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