import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import blogfetch from '../axios/config';
import './Home.css';


const Home = () => {

  const [ posts, setPosts ] = useState([]) //array vazio

  const getPosts = async () => {
    
    try { //try tentar receber a responsa, se não receber o catch mostrara um error.

      const response = await blogfetch.get("/posts"); //buscando os dados da api e armazenando em response

      const data = response.data; //guardando um dado especifico do response

      setPosts(data) //modificando o posts

    } catch(error) {
      console.log(error);
    }

  };

  useEffect(() => {

    getPosts() //executar da vez ao recarregar a página

  }, [])

  return (
    <div className="home">
      <h1>
        Últimos posts
      </h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => (
          <div className="posts" key={post.id}> 
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${posts.id}`} className="btn">Ler mais</Link>
          </div>
        ))
      )} {/* if ternario ... () para entender que é um objeto, para fazer mais de uma linha jsx...*/}
    </div>
  )
}

export default Home;