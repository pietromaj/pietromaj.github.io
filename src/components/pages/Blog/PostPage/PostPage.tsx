import React from 'react';
import { useParams } from 'react-router-dom';
import blogPostsData from '../../../../data/blogPostsData'; // ou onde você armazenar o array de posts

function PostPage() {
  const { postId } = useParams();

  // Convertemos postId para número, pois é uma string na URL
  const post = blogPostsData.find((post) => post.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>; // Exibe mensagem caso não encontre o post
  }

  return (
    <div className="py-4">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p><strong>{post.date}</strong></p>
    </div>
  );
}

export default PostPage;
