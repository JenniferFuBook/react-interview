import { CommentProps } from './types';
import './index.css';

const Comment = ({ username, comment }: CommentProps) => (
  <div className="comment">
    <span className="username">{username}</span>
    <p className="comment-text">{comment}</p>
  </div>
);

export default Comment;
