import './BlogPost.css';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  headline: string;
  body: string;
  date: string;
}

function BlogPost({ post }: { post: BlogPost }) {
  return (
    <Link to={`/post/${post.id}`} className="blog-post mb-3 p-3">
      <h2>{post.title}</h2>
      <p>{post.headline}</p>
      <small>{post.date}</small>
    </Link>
  );
}

export default BlogPost;
