//Código para o lógica de Java

//console.log(cientistas.nome);

//Função JS
function pesquisar(){

    //Referenciando uma section do HTML pelo seu id 
    let section = document.getElementById("resultados-pesquisa");  

    //Iniciando uma variável que guardará todo o conteúdo que será enviado para o HTML
    let resultados = "";

    //Visando conseguir atribuir à tela todas as informções da lista de dados, faremos um for
    for(let dado of cientistas){
    
        //Somamos, para que as informações, ao invés de se sobreporem, elas se adicionem
        resultados += `
        <div class="item-resultado"> 
            <h2>
                <a href="#">${dado.nome}</a>
            </h2>
            <h5 class="descricao-meta">
                <a href="#">${dado.nascimento} - ${dado.morte} </a>
            </h5>
            <p class="descricao-meta">${dado.descricao} </p>
            <p class="descricao-meta">
                <a href="#">Área de atuação: ${dado.area}</a> 
            </p>
            <a href=${dado.wiki} target="_blank">Mais informações sobre ela.</a>
        </div>
        `;
    }

    //O innerHTML serve para definir o conteúdo HTML interno do elemento, que será toda a nosaa variável resultado
    section.innerHTML = resultados;
}
