import Marquee from "react-fast-marquee";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Navber from "../../Navber/Navber";


const LatestNews = () => {
    return (
        <div>
            <div className="bg-[#F3F3F3] flex p-3 my-5">
                <Link><Button className=" bg-[#D72050]">Latest</Button></Link>
                <Marquee>
                    <h1 className="text-lg">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine....</h1>
                </Marquee>
                
            </div>
            <div>
            <Navber />
            </div>
        </div>
    );
};

export default LatestNews;