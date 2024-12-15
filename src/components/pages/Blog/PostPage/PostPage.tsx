import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import blogPostsData from '../../../../data/blogPostsData'; // Onde você armazena os posts

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null); // Estado para armazenar o post
  const [loading, setLoading] = useState(true); // Estado para mostrar se está carregando
  const [error, setError] = useState(null); // Para lidar com erros de carregamento

  // Verificar se postId é válido e convertê-lo para número
  const postIdParsed = postId ? parseInt(postId, 10) : NaN;

  useEffect(() => {
    if (!isNaN(postIdParsed)) {
      const currentPost = blogPostsData.find((post) => post.id === postIdParsed);
      if (currentPost) {
        setPost(currentPost);
        fetchPostContent(currentPost.bodyPath); // Carrega o conteúdo do arquivo HTML
      }
    }
  }, [postIdParsed]);

  // Função para buscar o conteúdo do arquivo HTML
  const fetchPostContent = async (bodyPath) => {
    try {
      const response = await fetch(bodyPath); // Faz o fetch do arquivo HTML
      if (!response.ok) {
        throw new Error('Failed to load content');
      }
      const text = await response.text(); // Lê o conteúdo do arquivo HTML
      setPost((prevPost) => ({ ...prevPost, body: text }));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Mostra uma mensagem de carregamento
  }

  if (error) {
    return <div>Error: {error}</div>; // Mostra uma mensagem de erro
  }

  if (!post) {
    return <div>Post not found</div>; // Exibe mensagem caso não encontre o post
  }

  return (
    <div className="py-4">
      <h1 className="mt-5">{post.title}</h1>
      <h3 className="my-3">{post.headline}</h3>
      <p>Pietro Majowka, <strong>{post.date}</strong></p>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
      
    </div>
  );
}

export default PostPage;
