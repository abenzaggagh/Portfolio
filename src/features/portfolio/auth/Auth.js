import {useEffect, useState} from "react";

export default function Auth() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('auth', 'true');
    }, [items]);

    return (<>
        <h1>Back Office</h1>
    </>)
}