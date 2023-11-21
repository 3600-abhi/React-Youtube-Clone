import { useEffect, useState } from "react";
import { VideoCard } from "../components";
import { YOUTUBE_SERVICES } from "../api";



function VideoContainer() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        YOUTUBE_SERVICES.getVideos().then(data => {
            setVideos(data.items);
        });

    }, []);

    return (
        <div className="m-2 flex flex-wrap">
            {
                videos.map(video => <VideoCard key={video.id} video={video} />)
            }
        </div>
    );
}

export default VideoContainer;