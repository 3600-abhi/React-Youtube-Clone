import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, Outlet } from "react-router-dom";
import store from "./store/store";
import { Header, Body } from "./components";
import appRouter from "./routes/app-routes";


export default function App() {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
        </Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

