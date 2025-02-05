import { CommentProps } from './types';

const Comment: React.FC<CommentProps> = ({ username, comment }) => (
  <div className="comment">
    <span className="username">{username}</span>
    <p className="comment-text">{comment}</p>
  </div>
);

export default Comment;
