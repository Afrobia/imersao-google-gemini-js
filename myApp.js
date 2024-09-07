// adicionando funcionalidades com JS
//console.log(dados);

function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let sections = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {
      // Constrói o HTML para cada resultado, formatando os dados
      resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>`;
    }
  
    // Atribui a string com os resultados ao conteúdo da seção HTML
    sections.innerHTML = resultados;
  }
