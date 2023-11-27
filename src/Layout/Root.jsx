import { Outlet } from 'react-router-dom';
import WebName from './Pages/Home/Header/webName/WebName';

const Root = () => {
    return (
        <div className="max-w-[90vw] mx-auto">
            <WebName/>
            <Outlet/>
        </div>
    );
};

export default Root;