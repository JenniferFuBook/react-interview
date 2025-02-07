import { useState } from 'react';
import IconButton from '../icon-button/IconButton';
import likeIcon from './like.svg';
import './index.css';

interface PostLikesProps {
  initLikes: number;
}

// Can dynamically retrieves the initial number of likes for a post
// Additionally, updates to the likes should be stored on the server
const PostLikes: React.FC<PostLikesProps> = ({ initLikes = 0 }) => {
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
