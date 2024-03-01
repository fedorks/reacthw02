import { useState } from 'react';
import '../css/CommentsList.css';

function CommentsList() {
    const [commentsList, setCommentsList] = useState([]);
    const [commentId, setCommentId] = useState(0);
    const [comment, setComment] = useState("");
    const [delComments, setDelComments] = useState([]);

    const addComment = (event) => {
        event.preventDefault();
        if (!comment.trim()) return;
        setCommentsList([...commentsList, { id: commentId, text: comment }]);
        updateId();
        setComment("");
    };

    const delComment = (id) => {
        setDelComments((prevDelComments) => {
            return [...prevDelComments, id];
        });
    };

    const updateId = () => {
        setCommentId(commentId + 1);
    };

    return (
        <div className="General">
            <div>
                <input
                    className="windowNewComment"
                    type="text"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}

                ></input>
            </div>

            <div>
                <button className="buttonAddComment" onClick={addComment}>
                    Отправить свой комментарий!
                </button>
            </div>

            <div>
                <ul className="allNewComments">
                    {commentsList
                        .filter((comment) => !delComments.includes(comment.id))
                        .map((comment) => (
                            <li className="oneNewComment" key={comment.id}>
                                <p className="contentNewComment">{comment.text}</p>
                                <button
                                    className="buttonDelComments"
                                    onClick={() => delComment(comment.id)}
                                >
                                    Удалить комментарий
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default CommentsList;