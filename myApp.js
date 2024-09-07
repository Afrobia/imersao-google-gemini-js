// adicionando funcionalidades com JS
//console.log(dados);
let sections = document.getElementById("resultados-pesquisa");
console.log(sections);

for(let dado of dados){
    sections.innerHTML += `
    <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}
          </p>
          <a
            href=${dado.link}
            target="_blank"
            >Mais Informações</a
          >
    </div>`;
}

