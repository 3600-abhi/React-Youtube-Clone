import { URL } from "../utils";

function Comment({ data }) {

    const { name, text, replies } = data;

    return (
        <div className="bg-slate-200 p-2 border border-l-black m-2">
            <div className="flex">
                <img className="h-10 w-10 mr-2 bg-slate-200" src={URL.USER_ICON} alt="userIcon" />

                <div>
                    <h1 className="">{name}</h1>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    );
}

export default Comment;