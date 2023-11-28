import Nav from "./Navber/Nav";
import NewsData from "./Navber/data/News/NewsData";

const FirstCol = () => {
    return (
        <div>
            <h1 className="font-bold text-lg mx-5" >All Caterogy</h1><br />
            <Nav /><br />
            <NewsData/>
        </div>
    );
};

export default FirstCol;