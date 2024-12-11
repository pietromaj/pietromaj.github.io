import './BlogPost.css';
import { Link } from 'react-router-dom';

function BlogPost({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="blog-post mb-3 p-3">
      <h2>{post.title}</h2>
      <p>{post.headline}</p>
      <small>{post.date}</small>
    </Link>
  );
}

export default BlogPost;
