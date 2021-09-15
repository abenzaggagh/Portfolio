import Arabic from '../../assets/lang/ar.json';
import French from '../../assets/lang/fr.json';
import English from '../../assets/lang/en.json';

const languages = {
    'en': English,
    'fr': French,
    'ar': Arabic
}

const Locale = localStorage['locale'] ? localStorage['locale'] : 'en';
const Language = languages[Locale];

export { Locale, Language }