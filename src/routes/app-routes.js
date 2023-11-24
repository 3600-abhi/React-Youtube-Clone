import { createBrowserRouter } from "react-router-dom";
import {
    App,
    Body,
    MainContainer,
    WatchPage
} from "../components";



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Body />,
                children: [
                    {
                        path: "",
                        element: <MainContainer />
                    },
                    {
                        path: "watch",
                        element: <WatchPage />
                    }
                ]
            }
        ]
    }
]);

export default appRouter;