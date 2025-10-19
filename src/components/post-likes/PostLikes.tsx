import { useState } from 'react';
import IconButton from '../icon-button/IconButton';
// import IconButton from '../icon-button-with-sc/IconButton'; // enable to try the styled-components version
// import IconButton from '../icon-button-with-cm/IconButton'; // enable to try the CSS modules version
// import IconButton from '../icon-button-with-tw/IconButton'; // enable to try the Tailwind CSS version
import likeIcon from './like.svg';
import './index.css';

interface PostLikesProps {
  initLikes: number;
}

// Can dynamically retrieves the initial number of likes for a post
// Additionally, updates to the likes should be stored on the server
const PostLikes = ({ initLikes = 0 }: PostLikesProps) => {
  const [likes, setLikes] = useState<number>(initLikes);
  const handleLike = () => setLikes(likes + 1);
  return (
    <div className="post-likes">
      <IconButton icon={likeIcon} handleClick={handleLike} />
      <span className="like-count">{likes} likes</span>
    </div>
  );
};

export default PostLikes;
