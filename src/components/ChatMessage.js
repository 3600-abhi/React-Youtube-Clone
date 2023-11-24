import { URL } from "../utils";


function ChatMessage({ name, message }) {
    return (
        <div className="bg-slate-100 p-1 flex align-middle m-1">
            <img className="h-5 w-5 mr-2 bg-slate-200" src={URL.USER_ICON} alt="userIcon" />
            <span className="font-bold mx-2">{name}</span>
            <span className="mx-2">{message}</span>
        </div>
    );
}


export default ChatMessage;