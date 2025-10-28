import BlogPost from '../components/blog-post/BlogPost';
import PostComments from '../components/post-comments/PostComments';
import PostLikes from '../components/post-likes/PostLikes';
import { samplePost, sampleComments } from './data';

const BlogPostExample2 = () => (
  <>
    <BlogPost post={samplePost} />
    <PostLikes initLikes={0} />
    <PostComments initComments={sampleComments} />
  </>
);

export default BlogPostExample2;
