import { Comment } from "../components";

function CommentList({ comments }) {
    return (
        <div>
            {
                comments.map((comment, index) => {
                    return (
                        <div>
                            <Comment key={index} data={comment} />

                            <div className="ml-5 border-black">
                                <CommentList comments={comment.replies} />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default CommentList;