import { Button } from "../components";

function ButtonList() {

    const buttonsText = [
        "All",
        "Ramayan",
        "Virat Kohli",
        "News",
        "Cricket",
        "Gaming",
        "Software Dev",
        "Learning",
        "Backend-Dev",
        "Frontend-Dev"
    ];

    return (
        <div>
            {
                buttonsText.map((text, index) => <Button key={index} text={text} />)
            }
        </div>
    );
}

export default ButtonList;