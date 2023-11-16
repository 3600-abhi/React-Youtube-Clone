import { Link } from "react-router-dom";

function VideoCard({ video }) {
    return (
        <Link to={"/watch?v=" + video.id} >
            <div className="m-5 h-80 w-72 rounded-t-full shadow-lg">
                <img className="rounded-lg" src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                <h3 className="m-2 font-bold">{video.snippet.title}</h3>
                <h3 className="m-2">{video.snippet.channelTitle}</h3>
            </div>
        </Link>
    );
}

export default VideoCard;