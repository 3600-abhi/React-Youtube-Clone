import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="p-3 font-semibold">
            <div><Link to="/">Home</Link></div>
            <div>Shorts</div>
            <div>Subscriptions</div>
            <div>History</div>
            <div>Watch Later</div>
            <div>Your Videos</div>
        </div>
    );
}

export default Sidebar;