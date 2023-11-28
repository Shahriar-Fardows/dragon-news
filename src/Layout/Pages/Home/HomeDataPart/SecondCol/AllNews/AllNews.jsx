import { useEffect } from "react";
import { useState } from "react";
import Newss from "./Newss";

const AllNews = () => {

    const [datas, setdatas] = useState([]);
    console.log(datas)
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setdatas(data))
    }, [])

    return (
        <div>
            {
                datas.map(data=> <Newss
                key={data.id}
                data={data}
                ></Newss>)
            }
        </div>
    );
};

export default AllNews;