import { CiFacebook } from "react-icons/ci";
import { FaTwitter, FaInstagram } from "react-icons/fa6";


const FindUs = () => {
    return (
        <div>


            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-3 text-base  font-bold text-gray-900 md:text-xl dark:text-white">
                    Find Us On
                </h5>

                <ul className="my-4 space-y-3">

                    <li>
                        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <CiFacebook className="text-3xl	 text-[#1877F2]" />

                            <span className="flex-1 ms-3 whitespace-nowrap">FaceBook</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <FaTwitter className="text-3xl	 text-[#38bdf8]"/>

                            <span className="flex-1 ms-3 whitespace-nowrap">Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <FaInstagram className="text-3xl	text-[#833AB4]"/>

                            <span className="flex-1 ms-3 whitespace-nowrap">Instagram</span>
                        </a>
                    </li>
                </ul>
                
            </div>

        </div>
    );
};

export default FindUs;