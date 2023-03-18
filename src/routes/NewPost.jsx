import blogFetch from "../axios/config";
import './NewPost.css'; 

import { useState } from "react"; //gerenciar os valorse dos inputs
import { useNavigate } from "react-router-dom"; //simular o redirecionamento para quando o usuario adicionar o postar, ir para a pagina home

const NewPost = () => {

  const navigate = useNavigate()

  const [ title, setTitle ] = useState()
  const [ body, setBody ] = useState()

  const createPost = async (e) => {
    e.preventDefault(); //os "e" e o e.preventDefault, faz com que não recarregue a página após enviar o formulário
    
    const post = {
      title, body, userId: 1
    };

    await blogFetch.post("/posts", {
      body: post,
    }); //metodo http para enviar dados

    navigate("/") // faz com que o usuário vá para a home após enviar o formulário.
  }

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={ (e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder="Digite o título" 
            onChange={(e) => setTitle(e.target.value)} // Altera o valor do title
          />

        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea 
            name="body" 
            id="body" 
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)} // Altera o valor do body
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn"/>
      </form>
    </div>
  )
}

export default NewPost;