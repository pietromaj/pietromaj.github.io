import blogPostsData from '../../../data/blogPostsData';
import BlogPost from './BlogPost/BlogPost';
import './Blog.css';

function Blog() {
  return (
    <div>
      <header className="blog-header my-3">
        <h1>Blog</h1>
        <p>Exploring ideas, tutorials, and more</p>
      </header>
      <div className="blog-grid">
        {blogPostsData.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}


export default Blog;
