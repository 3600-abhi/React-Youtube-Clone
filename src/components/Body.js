import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

function Body() {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    return (
        <div className="flex">
            { isMenuOpen && <Sidebar /> }
            <Outlet />
        </div>
    );
}

export default Body;