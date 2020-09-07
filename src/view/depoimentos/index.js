import React from 'react';
import './depoimentos.css';
import {Link} from 'react-router-dom';
import Encontro from '../encontro/index';

function Depoimentos(){
    return(
      <>
     <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand text-white" href="#">Segura Minha Mão</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-end" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item text-white">
            <a class="nav-link text-white" href="#">Depoimentos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Assistência</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Contatos</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>

<div class="container mt-5">

<div class="row justify-content-center">

  
  <div class="col-md-8">

    <h1 class="my-4 text-center"> Depoimentos </h1>

    
    <div class="card mb-4 text-center d-flex">
      <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
      <div class="card-body">
        <h2 class="card-title">Post Title</h2>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
        <button className="botao btn btn-lg "><Link to='encontro' style={{ textDecoration: 'none', color: 'white' }}>Posso segurar sua mão?</Link></button>
      </div>
    </div>

    
    <div class="card mb-4 text-center d-flex">
      <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
      <div class="card-body">
        <h2 class="card-title">Post Title</h2>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
        <button className="botao btn btn-lg "><Link to='encontro' style={{ textDecoration: 'none', color: 'white' }}>Posso segurar sua mão?</Link></button>
      </div>
    </div>

   
    <div class="card mb-4 text-center d-flex">
      <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
      <div class="card-body">
        <h2 class="card-title">Post Title</h2>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
        <button className="botao btn btn-lg "><Link to='encontro' style={{ textDecoration: 'none', color: 'white' }}>Posso segurar sua mão?</Link></button>
      </div>
    </div>

    
    <ul class="pagination justify-content-center mb-4">
      <li class="page-item">
        <a class="page-link" href="#">&larr; Voltar</a>
      </li>
      <li class="page-item disabled">
        <a class="page-link" href="#">Seguinte &rarr;</a>
      </li>
    </ul>

  </div>

    </div>

  </div>

  <footer class="rodape py-5">
    <div class="container">
      <p class="m-0 text-center text-white">© 2020 SeguraMinhaMão, Todos os direitos reservados.</p>
    </div>
    
  </footer>

      </>
    )
};

export default Depoimentos;