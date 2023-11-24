import { CommentList } from "../components";

const commentData = [
    {
        name: "Abhishek Jaiswal",
        text: "hehe boiii",
        replies: [
            {
                name: "Sagar Saini",
                text: "sncuaw",
                replies: [
                    {
                        name: "Aryan Kharinta",
                        text: "skcuisa",
                        replies: [
                            {
                                name: "Sagar Saini",
                                text: "dywgadyd",
                                replies: [
                                    {
                                        name: "Sagar Saini",
                                        text: "dywgadyd",
                                        replies: []
                                    },
                                    {
                                        name: "Manoj Kumar",
                                        text: "hyugedy",
                                        replies: []
                                    },
                                ]
                            },
                            {
                                name: "Manoj Kumar",
                                text: "hyugedy",
                                replies: []
                            },
                        ]
                    }
                ]
            },
            {
                name: "Manoj Kumar",
                text: "jakdywda",
                replies: []
            }
        ]
    },
    {
        name: "Sagar Saini",
        text: "sdhawdei",
        replies: []
    },
    {
        name: "Manoj Kumar",
        text: "ncuygedaw",
        replies: []
    },
    {
        name: "Aryan Kharinta",
        text: "skcuisa",
        replies: [
            {
                name: "Sagar Saini",
                text: "dywgadyd",
                replies: []
            },
            {
                name: "Manoj Kumar",
                text: "hyugedy",
                replies: []
            },
        ]
    },
    {
        name: "Vikash Jaiswal",
        text: "snugwaywgeyttb",
        replies: []
    },
];

function CommentContainer() {
    return (
        <div className="ml-10 mt-5 mb-10">
            <h1 className="mb-5 font-bold text-2xl">Comments: </h1>
            <CommentList comments={commentData} />
        </div>
    );
}

export default CommentContainer;