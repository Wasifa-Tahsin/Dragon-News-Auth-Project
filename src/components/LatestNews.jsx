import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center">
            <p className="bg-[#D72050] text-base-100 px-3 py-2">Latest</p>
            <Marquee pauseOnHover={true} speed={50} className="space-x-10 bg-base-200 p-2">
                <Link to="news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque?</Link>
                <Link to="news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque?</Link>
                <Link to="news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, neque?</Link>
                
            </Marquee>
        </div>
    );
};

export default LatestNews;