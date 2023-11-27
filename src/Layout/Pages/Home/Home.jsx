import LatestNews from "./Header/latestNews/LatestNews";
import FirstCol from "./HomeDataPart/FirstColam/FirstCol";
import SecondCol from "./HomeDataPart/SecondCol/SecondCol";
import ThirdCol from "./HomeDataPart/ThirdCol/ThirdCol";

const Home = () => {
    return (
        <div >
            <LatestNews />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border col-span-1">
                    <FirstCol/>
                </div>
                <div className="border md:col-span-2">
                    <SecondCol/>
                </div>
                <div className="border col-span-1">
                    <ThirdCol/>
                </div>
            </div>
        </div>
    );
};

export default Home;