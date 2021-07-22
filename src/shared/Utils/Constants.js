import Mail from '../../assets/images/mail.svg';
import GitHub from '../../assets/images/github.svg';
import Twitter from '../../assets/images/twitter.svg';
import LinkedIn from '../../assets/images/linkedin.svg';
import Facebook from '../../assets/images/facebook.svg';

export default class Constants {

    static OVERLAY = [];

    static GREETINGS = "Hello, I'm Amine!";
    static ROLE = "Hello, I'm Amine!";

    static HOME = "Home";
    static PROJECTS = "Projects";
    static PROFILE = "Profile";
    static SKILLS = "Skills";
    static BLOG = "Blog";

    static ENGLISH = "English";
    static FRENCH = "French";
    static ARABIC = "Arabic";
    
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
        id: 'skills',
        link: 'skills',
        default: Constants.SKILLS
    }, {
        id: 'blog',
        link: 'blog',
        default: Constants.BLOG
    }];

    static OVERLAY_LANGUAGES = [{
        link: 'en',
        id: 'english',
        default: Constants.ENGLISH
    }, {
        link: 'fr',
        id: 'french',
        default: Constants.FRENCH
    }, {
        link: 'ar',
        id: 'arabic',
        default: Constants.ARABIC
    }]

    static FOOTER = [{
        title: 'GitHub',
        link: 'https://github.com/abenzaggagh',
        image: GitHub,
        alternative: 'github-logo'
    }, {
        title: 'LinkedIn',
        link: 'https://linkedin.com/in/abenzaggagh',
        image: LinkedIn,
        alternative: 'linkedin-logo'
    }, {
        title: 'Facebook',
        link: 'https://twitter.com/abenzaggagh',
        image: Twitter,
        alternative: 'twitter-logo'
    }, {
        title: 'Facebook',
        link: 'https://facebook.com/abenzaggagh',
        image: Facebook,
        alternative: 'facebook-logo'
    }, {
        title: 'Mail',
        link: 'mailto:amine.benzaggagh@icloud.com',
        image: Mail,
        alternative: 'mail-logo'
    }];

}