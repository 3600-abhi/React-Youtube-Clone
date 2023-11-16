import { useDispatch } from "react-redux";
import { URL } from "../utils";
import { toggleMenu } from "../store/slice/app-slice";


function Header() {

    const dispatch = useDispatch();

    const handleClickBars = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="flex justify-between p-5">

            <div className="flex">

                <div className="flex">
                    <button onClick={handleClickBars}>
                        <img className="h-10" alt="bars" src={URL.BARS} />
                    </button>
                </div>

                <div className="ml-5">
                    <img className="h-10" alt="logo" src={URL.LOGO} />
                </div>

            </div>

            <div>
                <input type="text" className="w-96 border-2 border-gray-300 border-r-0 pl-4 py-2 rounded-l-full" />
                <button className="border-2 border-gray-300 px-4 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200">
                    Search
                </button>
            </div>

            <div>
                <div>
                    <img className="h-9" alt="user" src={URL.USER_ICON} />
                </div>
            </div>

        </div>
    );
}

export default Header;