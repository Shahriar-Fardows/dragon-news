import { Link } from "react-router-dom";

const Aveter = () => {
    return (
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                    <li><Link to='/login' className="mx-2">Sign In</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Aveter;