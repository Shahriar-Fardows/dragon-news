import { useContext } from "react";
import Ads from "./Ads/Ads";
import Auth from "./Auth/Auth";
import FindUs from "./FindUs/FindUs";
import QZone from "./Q-Zone/QZone";
import { Context } from "../../../../../Context/ShareContext";

const ThirdCol = () => {
    const {user} = useContext(Context);

    return (
        <div className="px-5 pb-5">
           {
            user ? '' : <Auth/>
           }<br />
           <FindUs/><br />
           <QZone/><br />
           <Ads/>
        </div>
    );
};

export default ThirdCol;