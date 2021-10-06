import './App.scss';

import Portfolio from "./features/portfolio/Portfolio";
import PrivatePortfolio from "./features/privatePortfolio/PrivatePortfolio";



export default function App({isAuth}) {
    return (
        <>
            {isAuth ? <Portfolio/> : <PrivatePortfolio />}
        </>);
}
