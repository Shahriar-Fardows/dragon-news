/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const NavData = ({ data }) => {
    console.log(data)
    const { name, id } = data;
    return (
        <div>
            <div>
                <Link to={`/categories/${id}`} href="#" className="block px-4 py-2 text-lg  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{name}</Link>
            </div>
            
        </div>
    );
};

export default NavData;