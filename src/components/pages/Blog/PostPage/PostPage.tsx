import { useParams } from 'react-router-dom';
import blogPostsData from '../../../../data/blogPostsData'; // ou onde você armazenar o array de posts

function PostPage() {
  const { postId } = useParams();

  // Verificar se postId é válido e convertê-lo para número
  const postIdParsed = postId ? parseInt(postId) : NaN;

  // Verificar se o postIdParsed é um número válido
  const post = !isNaN(postIdParsed)
    ? blogPostsData.find((post) => post.id === postIdParsed)
    : undefined;

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
