import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/slice/app-slice";

function WatchPage() {

    const [searchParams, setSearchParams] = useSearchParams();

    // to get the value from the query params
    const videoId = searchParams.get("v");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div>
            <div className="mt-4 ml-20">
                <iframe
                    width="750"
                    height="450"
                    src={"https://www.youtube.com/embed/" + videoId}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default WatchPage;