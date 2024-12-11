import './BlogPost.css';

function BlogPost({ post }) {
  return (
    <div className="blog-post mb-3 p-3">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small>{post.date}</small>
    </div>
  );
}

export default BlogPost;
