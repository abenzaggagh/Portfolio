import Mail from '../../assets/images/footer/dark/mail.svg';
import MailLight from '../../assets/images/footer/light/mail.svg';

import GitHub from '../../assets/images/footer/dark/github.svg';
import GitHubLight from '../../assets/images/footer/light/github.svg';

import Twitter from '../../assets/images/footer/dark/twitter.svg';
import TwitterLight from '../../assets/images/footer/light/twitter.svg';

import LinkedIn from '../../assets/images/footer/dark/linkedin.svg';
import LinkedInLight from '../../assets/images/footer/light/linkedin.svg';

import MEMOJI from '../../assets/images/Image.png';
import NOT_FOUND_MEMOJI from '../../assets/images/NotFound.png';

import SUN from '../../assets/images/theme/sun.svg';
import MOON from '../../assets/images/theme/moon.svg';

import HTML from "../../assets/images/logos/html.svg";
import CSS from "../../assets/images/logos/css.svg";

import SASS from "../../assets/images/logos/sass.svg";
import LESS from "../../assets/images/logos/less.svg";

import JavaScript from "../../assets/images/logos/javascript.svg";
import TypeScript from "../../assets/images/logos/typescript.svg";

import Angular from "../../assets/images/logos/angular.svg";
import React from "../../assets/images/logos/react.svg";

import PHP from "../../assets/images/logos/php.svg";
import Laravel from "../../assets/images/logos/laravel.svg";

import Java from "../../assets/images/logos/java.svg";
import Spring from "../../assets/images/logos/spring.svg";

import NodeJS from "../../assets/images/logos/nodejs.svg";
import Express from "../../assets/images/logos/express.svg";

import Swift from "../../assets/images/logos/swift.svg";

import Git from "../../assets/images/logos/git.svg";
import Github from "../../assets/images/logos/github.svg";
import Gitlab from "../../assets/images/logos/gitlab.svg";

import MySQL from "../../assets/images/logos/mysql.svg";
import PostgreSQL from "../../assets/images/logos/postgresql.svg";
import Oracle from "../../assets/images/logos/oracle.svg";
import MongoDB from "../../assets/images/logos/mongodb.svg";

import Abacus from "../../assets/images/soft-skills/abacus.svg"
import Teamwork from "../../assets/images/soft-skills/teamwork.svg"
import Analysing from "../../assets/images/soft-skills/analysing.svg"
import Discipline from "../../assets/images/soft-skills/discipline.svg"

export default class Constants {

    static MY_AGE = new Date().getFullYear() - 1998;

    static SUN = SUN;
    static MOON = MOON;

    static HOMEPAGE = "Go to Homepage";

    static GREETINGS = "Hello, I'm Amine!";
    static ROLE = "Hello, I'm Amine!";
    static EXPLORE = "Explore Work";
    static WORKS_LINK = "projects";
    static UNDER_CONSTRUCTION = "Explore Work";

    static HOME = "Home";
    static PROJECTS = "Skills";
    static PROFILE = "Profile";
    static RESUME = "Resume";
    static BLOG = "Blog";

    static ENGLISH = "English";
    static FRENCH = "French";
    static ARABIC = "Arabic";

    static PROJECT_SUBTITLE = "See my works below, all their back-end and front-end parts were completely done by me.";

    static MEMOJI = MEMOJI;

    static NOT_FOUND_MEMOJI = NOT_FOUND_MEMOJI;

    static SWIFT_LOGO = Swift;

    static OVERLAY_BUTTONS = [{
        id: 'home',
        link: '',
        default: Constants.HOME
    }, {
        id: 'projects',
        link: 'projects',
        default: Constants.PROJECTS
    }, {
        id: 'profile',
        link: 'profile',
        default: Constants.PROFILE
    }, {
        id: 'resume',
        link: 'resume',
        default: Constants.RESUME
    }, {
        id: 'blog',
        link: 'blog',
        default: Constants.BLOG
    }];

    static OVERLAY_LANGUAGES = [{
        locale: 'en',
        id: 'english',
        default: Constants.ENGLISH
    }, {
        locale: 'fr',
        id: 'french',
        default: Constants.FRENCH
    }, {
        locale: 'ar',
        id: 'arabic',
        default: Constants.ARABIC
    }]

    static CURRENT_LOCATION = {
        city: "Bordeaux",
        country: {
            "en": "France",
            "fr": "France"
        }
    }

    static LAST_COMPANY = {
        name: "Docaposte",
        link: "https://docaposte.fr/"
    }

    static CURRENT_COMPANY = {
        color: "#FF7800",
        name: "Alter Solutions France",
        link: "https://www.alter-solutions.fr/"
    }

    static FRONT_END_SKILLS = [
        {
            title: "HTML & CSS",
            images: [
                {src: HTML, alt: "HTML Logo"},
                {src: CSS, alt: "CSS Logo"}
            ]
        }, {
            title: "SASS & LESS",
            images: [
                {src: SASS, alt: "SASS Logo"},
                {src: LESS, alt: "LESS Logo"}
            ]
        }, {
            title: "JavaScript & TypeScript",
            images: [
                {src: JavaScript, alt: "JavaScript Logo"},
                {src: TypeScript, alt: "TypeScript Logo"}
            ]
        }, {
            title: "Angular & React",
            images: [
                {src: Angular, alt: "Angular Logo"},
                {src: React, alt: "React Logo"}
            ]
        }
    ];

    static BACK_END_SKILLS = [
        {
            title: "Java & Spring",
            images: [
                {src: Java, alt: "Java Logo"},
                {src: Spring, alt: "Spring Logo"}
            ]
        }, {
            title: "NodeJS & Express",
            images: [
                {src: NodeJS, alt: "NodeJS Logo"},
                {src: Express, alt: "Express Logo"}
            ]
        }, {
            title: "PHP & Laravel",
            images: [
                {src: PHP, alt: "PHP Logo"},
                {src: Laravel, alt: "Laravel Logo"},
            ]
        }, {
            title: "Swift",
            images: [
                {src: Swift, alt: "Swift Logo"},
            ]
        }
    ];

    static OTHERS_SKILLS = [
        {
            title: "MySQL, PostgreSQL, Oracle & MongoDB",
            images: [
                {src: MySQL, alt: "MySQL Logo"},
                {src: PostgreSQL, alt: "PostgreSQL Logo"},
                {src: Oracle, alt: "Oracle Logo", width: "4em"},
                {src: MongoDB, alt: "MongoDB Logo"}
            ]
        }, {
            title: "Git, GitHub & GitLab",
            images: [
                {src: Git, alt: "Git Logo"},
                {src: Github, alt: "GitHub Logo"},
                {src: Gitlab, alt: "GitLab Logo"}
            ]
        }
    ];

    static SOFT_SKILLS = [

        {
            title: "Analyzing Information",
            images: [
                {src: Analysing, alt: "Analysing Logo"}
            ]
        },
        {
            title: "Discipline",
            images: [
                {src: Discipline, alt: "Discipline Logo"}
            ]
        }, {
            title: "Problem Solving",
            images: [
                {src: Abacus, alt: "Abacus Logo"}
            ]
        }, {
            title: "Teamwork",
            images: [
                {src: Teamwork, alt: "Teamwork Logo"}
            ]
        }
    ];


    static LIST_OF_SKILLS = [
        {
            skill_title: "skills_front_end_title",
            skill_subtitle: "skills_front_end_line",
            skills: [
                {
                    title: "HTML & CSS",
                    images: [
                        {src: HTML, alt: "HTML Logo"},
                        {src: CSS, alt: "CSS Logo"}
                    ]
                }, {
                    title: "SASS & LESS",
                    images: [
                        {src: SASS, alt: "SASS Logo"},
                        {src: LESS, alt: "LESS Logo"}
                    ]
                }, {
                    title: "JavaScript & TypeScript",
                    images: [
                        {src: JavaScript, alt: "JavaScript Logo"},
                        {src: TypeScript, alt: "TypeScript Logo"}
                    ]
                }, {
                    title: "Angular & React",
                    images: [
                        {src: Angular, alt: "Angular Logo"},
                        {src: React, alt: "React Logo"}
                    ]
                }
            ]
        }, {
            skill_title: "skills_back_end_title",
            skill_subtitle: "skills_back_end_line",
            skills: [{
                title: "Java & Spring",
                images: [
                    {src: Java, alt: "Java Logo"},
                    {src: Spring, alt: "Spring Logo"}
                ]
            }, {
                title: "NodeJS & Express",
                images: [
                    {src: NodeJS, alt: "NodeJS Logo"},
                    {src: Express, alt: "Express Logo"}
                ]
            }, {
                title: "PHP & Laravel",
                images: [
                    {src: PHP, alt: "PHP Logo"},
                    {src: Laravel, alt: "Laravel Logo"},
                ]
            }, {
                title: "Swift",
                images: [
                    {src: Swift, alt: "Swift Logo"},
                ]
            }
            ]
        }, {
            skill_title: "skills_others_title",
            skill_subtitle: "skills_others_line",
            skills: [{
                title: "MySQL, PostgreSQL, Oracle & MongoDB",
                images: [
                    {src: MySQL, alt: "MySQL Logo"},
                    {src: PostgreSQL, alt: "PostgreSQL Logo"},
                    {src: Oracle, alt: "Oracle Logo", width: "4em"},
                    {src: MongoDB, alt: "MongoDB Logo"}
                ]
            }, {
                title: "Git, GitHub & GitLab",
                images: [
                    {src: Git, alt: "Git Logo"},
                    {src: Github, alt: "GitHub Logo"},
                    {src: Gitlab, alt: "GitLab Logo"}
                ]
            }
            ]
        }, {
            skill_title: "skills_soft_title",
            skill_subtitle: "",
            skills: [{
                title: "Analyzing Information",
                images: [
                    {src: Analysing, alt: "Analysing Logo"}
                ]
            },
                {
                    title: "Discipline",
                    images: [
                        {src: Discipline, alt: "Discipline Logo"}
                    ]
                }, {
                    title: "Problem Solving",
                    images: [
                        {src: Abacus, alt: "Abacus Logo"}
                    ]
                }, {
                    title: "Teamwork",
                    images: [
                        {src: Teamwork, alt: "Teamwork Logo"}
                    ]
                }
            ]
        }
    ];

    static PROJECTS_TECHNOLOGIES = ["Java", "iOS", "JavaScript"]

    static FOOTER = [
    {
        title: 'GitHub',
        link: 'https://github.com/abenzaggagh',
        image: GitHub,
        imageLight: GitHubLight,
        alternative: 'github-logo'
    },
    {
        title: 'LinkedIn',
        link: 'https://linkedin.com/in/abenzaggagh',
        image: LinkedIn,
        imageLight: LinkedInLight,
        alternative: 'linkedin-logo'
    },
    {
        title: 'Twitter',
        link: 'https://twitter.com/abenzaggagh',
        image: Twitter,
        imageLight: TwitterLight,
        alternative: 'twitter-logo'
    },
    {
        title: 'Mail',
        link: 'mailto:amine.benzaggagh@icloud.com',
        image: Mail,
        imageLight: MailLight,
        alternative: 'mail-logo'
    }];

}