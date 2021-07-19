import Mail from '../../assets/images/mail.svg';
import GitHub from '../../assets/images/github.svg';
import Twitter from '../../assets/images/twitter.svg';
import LinkedIn from '../../assets/images/linkedin.svg';
import Facebook from '../../assets/images/facebook.svg';

export default class Constants {

    static OVERLAY = [];

    static GREETINGS = "Hello, I'm Amine!";

    static FOOTER = [{
        title: 'GitHub',
        link: 'https://github.com/abenzaggagh',
        image: GitHub,
        alternative: 'github-logo',
        toNewTab: true
    }, {
        title: 'LinkedIn',
        link: 'https://linkedin.com/in/abenzaggagh',
        image: LinkedIn,
        alternative: 'linkedin-logo',
        toNewTab: true
    }, {
        title: 'Facebook',
        link: 'https://twitter.com/abenzaggagh',
        image: Twitter,
        alternative: 'twitter-logo',
        toNewTab: true
    }, {
        title: 'Facebook',
        link: 'https://facebook.com/abenzaggagh',
        image: Facebook,
        alternative: 'facebook-logo',
        toNewTab: true
    }, {
        title: 'Mail',
        link: 'mailto:amine.benzaggagh@icloud.com',
        image: Mail,
        alternative: 'mail-logo',
        toNewTab: false
    }];

}