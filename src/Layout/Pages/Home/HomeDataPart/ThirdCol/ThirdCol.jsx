import Ads from "./Ads/Ads";
import Auth from "./Auth/Auth";
import FindUs from "./FindUs/FindUs";
import QZone from "./Q-Zone/QZone";

const ThirdCol = () => {
    return (
        <div className="px-5 pb-5">
           <Auth/><br />
           <FindUs/><br />
           <QZone/><br />
           <Ads/>
        </div>
    );
};

export default ThirdCol;