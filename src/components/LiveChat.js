import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChatMessage } from "../components";
import { addChat } from "../store/slice/chat-slice";
import { Random } from "../utils";

function LiveChat() {

    const chatList = useSelector(store => store.chat.chatList);
    const dispatch = useDispatch();

    const [textMessage, setTextMessage] = useState("");

    useEffect(() => {

        const interval = setInterval(() => {

            dispatch(addChat({
                name: Random.generateName(),
                message: Random.generateMessage()
            }));

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = () => {
        dispatch(addChat({
            name: "Abhishek Jaiswal",
            message: textMessage
        }));

        setTextMessage("");
    }

    return (
        <div className="p-1 m-1 border border-black w-full rounded-lg h-96 overflow-y-scroll flex flex-col-reverse">

            <form className="m-2 flex"
                // for avoiding the auto refresh we are executing e.preventDefault
                // which the form does by default
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    className="w-full border border-black outline-none p-1"
                    type="text"
                    value={textMessage}
                    onChange={e => setTextMessage(e.target.value)}
                    autoFocus
                />

                <button
                    className="ml-2 p-2 bg-red-600 rounded-md text-white"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </form>


            {
                chatList.map((chat, index) => <ChatMessage key={index} name={chat.name} message={chat.message} />)
            }



        </div>
    );
}

export default LiveChat;