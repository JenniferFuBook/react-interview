import { useState } from 'react';
import IconButton from '../icon-button/IconButton';
// import IconButton from '../icon-button-with-sc/IconButton'; // enable to try the styled-components version
// import IconButton from '../icon-button-with-cm/IconButton'; // enable to try the CSS modules version
// import IconButton from '../icon-button-with-tw/IconButton'; // enable to try the Tailwind CSS version
import Comment from './Comment';
import { CommentProps } from './types';
import submitIcon from './submit.svg';
import './index.css';

type PostCommentsProps = {
  comments: CommentProps[];
};

// Can dynamically retrieves the comments for a post
// Additionally, updates to the comments should be stored on the server
const PostComments = ({ comments }: PostCommentsProps) => {
  const [text, setText] = useState<string>('');
  const handleClick = (e: React.FormEvent<HTMLInputElement>) =>
    setText((e.target as HTMLInputElement).value);
  const handleSubmit = () => setText('');
  return (
    <div className="post-comments">
      <h2>{comments.length} comments:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <Comment {...comment} />
          </li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          value={text}
          placeholder="Write a comment..."
          onChange={handleClick}
        />
        <IconButton
          className="submit-button"
          type="submit"
          icon={submitIcon}
          handleClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default PostComments;
