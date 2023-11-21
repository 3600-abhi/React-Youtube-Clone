import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../utils";
import { toggleMenu } from "../store/slice/app-slice";
import { addToCache } from "../store/slice/search-query-cache-slice";
import { YOUTUBE_SERVICES } from "../api";



function Header() {

    const dispatch = useDispatch();
    const searchQueryCache = useSelector(store => store.searchQueryCache.cache);

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {

        let timer;

        if (searchQueryCache[searchQuery]) {
            setSuggestions(searchQueryCache[searchQuery]);
        }
        else {

            // Debouncing Implementation 
            timer = setTimeout(() => {
                YOUTUBE_SERVICES.getSearchSuggestions(searchQuery).then(data => {
                    const searchResult = data[1].map(s => s[0]);

                    console.log(searchResult);

                    dispatch(addToCache({
                        searchText: searchQuery,
                        searchResult: searchResult
                    }));

                    setSuggestions(searchResult);
                });
            }, 200);
        }

        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);

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

                <input
                    type="text"
                    className="w-96 border-2 border-gray-300 border-r-0 pl-4 py-2 rounded-l-full outline-none"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />


                <button className="border-2 border-gray-300 px-4 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200">
                    Search
                </button>



                {
                    suggestions.length && showSuggestions ? (
                        <div className="w-96 fixed bg-white border border-gray-200 shadow-2xl rounded-2xl">
                            <ul>
                                {
                                    suggestions.map((suggestion, index) => <li key={index} className="m-1 p-1 hover:bg-slate-100">{suggestion}</li>)
                                }
                            </ul>
                        </div>
                    )
                        : <></>
                }

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