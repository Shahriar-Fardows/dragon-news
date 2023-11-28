import { useEffect } from "react";
import { useState } from "react";
import ShortNews from "./ShortNews";

const NewsData = () => {
    const [datas, setdatas] = useState([]);
    console.log(datas,'hek')
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setdatas(data))
    }, [])

    return (
        <div>
            {
                datas.slice(0,3).map(data => <ShortNews
                    key={data.id}
                    data={data}
                ></ShortNews>)
            }
        </div>
    );
};

export default NewsData;