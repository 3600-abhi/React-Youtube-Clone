import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/slice/app-slice";
import { CommentContainer, LiveChat } from "../components";

function WatchPage() {

    const [searchParams, setSearchParams] = useSearchParams();

    // to get the value from the query params
    const videoId = searchParams.get("v");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="w-full px-10 h-full">

            <div className="flex ml-10 w-full h-96 mb-32">

                <div>
                    <iframe
                        width="750"
                        height="390"
                        src={"https://www.youtube.com/embed/" + videoId}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>

                <LiveChat />


            </div>

            <CommentContainer />

        </div>
    );
}

export default WatchPage;