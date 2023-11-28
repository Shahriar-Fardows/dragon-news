import { useState } from 'react';
import './Nav.css'
import { useEffect } from 'react';
import NavData from './data/NavData';

const Nav = () => {
    const [datas, setdatas] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setdatas(data))
    }, [])

    return (
        <div>
            {
               datas.map(data => <NavData
               key={data.id}
               data={data}
               ></NavData> )
            }
            
        </div>
    );
};

export default Nav;