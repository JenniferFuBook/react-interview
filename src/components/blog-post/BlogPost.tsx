import { PostProps } from './types';
import './index.css';

type BlogPostProps = {
  post: PostProps;
};

const BlogPost: React.FC<BlogPostProps> = ({post}) => {
  return (
    <>
      <title>{post.title}</title>
      <meta name="author" content={post.author} />
      <meta name="keywords" content={post.keywords.join(', ')} />
      <link rel="publisher" href={`https://x.com/${post.publisher}/`} />
      {/* <link rel="stylesheet" href="https://www.w3.org/Style/CSS/w3c-2010/main" precedence="default" />
      <link rel="stylesheet" href="https://www.w3.org/Style/CSS/twocolumn-print" precedence="high" /> */}
      <main>
        <article>
          <header>
            <h1 className="heading">{post.title}</h1>
            <h2>{post.subtitle}</h2>
          </header>
          {post.sections.map((section, index) => (
            <section key={index}>
              <h3>{section.title}</h3>
              {section.subsections.map((subsection, subIndex) => (
                <section key={subIndex}>
                  <h4>{subsection.title}</h4>
                  <p>{subsection.content}</p>
                </section>
              ))}
            </section>
          ))}
        </article>
      </main>
      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </>
  );
};

export default BlogPost;
