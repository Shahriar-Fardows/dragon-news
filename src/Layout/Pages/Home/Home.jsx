import LatestNews from "./Header/latestNews/LatestNews";
import FirstCol from "./HomeDataPart/FirstColam/FirstCol";
import SecondCol from "./HomeDataPart/SecondCol/SecondCol";
import ThirdCol from "./HomeDataPart/ThirdCol/ThirdCol";

const Home = () => {
    return (
        <div >
            <LatestNews />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="  col-span-1">
                    <FirstCol />
                </div>
                <div className="md:col-span-2">
                    <h1 className="font-bold text-lg text-center" >Dragon News Home</h1><br />
                    <div className=" h-[200vh] overflow-auto no-scrollbar	 ">

                        <SecondCol />
                    </div>
                </div>
                <div className=" col-span-1">
                    <ThirdCol />
                </div>
            </div>
        </div>
    );
};

export default Home;