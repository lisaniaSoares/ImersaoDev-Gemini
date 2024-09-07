//Código para o lógica de Java

//console.log(cientistas.nome);

//Função JS
function pesquisar(){

    //Referenciando uma section do HTML pelo seu id 
    let section = document.getElementById("resultados-pesquisa");  

    //Referenciando o campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Verifica se o campo está vazio
    if(!campoPesquisa){
        section.innerHTML = `
            <div class="item-erro"> 
                <p>
                    Busca vazia, pesquise alguma informação!
                </p>
            </div>
            <div>
                <img class="img-aviso" src="img/aviso-1.png" alt="Menina cientista.">
            </div>
            `;
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    //Iniciando uma variável que guardará todo o conteúdo que será enviado para o HTML
    let resultados = "";
    let nome = "";
    let descricao = "";
    let area = "";
    let tags = "";

    //Visando conseguir atribuir à tela todas as informções da lista de dados, faremos um for
    for(let dado of cientistas){
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        area = dado.area.toLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        
        //Verifica se algum item na base de dados corresponde com o que foi pesquisado
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || area.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            console.log(campoPesquisa);

            //Somamos, para que as informações, ao invés de se sobreporem, elas se adicionem
            resultados += `

            <div class="item-resultado">
                <div>
                    <img class="img-resultado" src="${dado.img}" alt="${dado.nome}">
                </div>
                <div> 
                    <h2>
                        <a href="#">${dado.nome}</a>
                    </h2>
                    <h4 class="descricao-meta">
                        <a href="#">${dado.nascimento} - ${dado.morte} </a>
                    </h4>
                    <p class="descricao-meta">${dado.descricao} </p>
                    <p class="descricao-meta">
                        <a href="#">Área de atuação: ${dado.area}</a> 
                    </p>
                    <a href=${dado.wiki} target="_blank">Mais informações sobre ela.</a>
                </div>
            </div>
            `;
        }

    }

    if(!resultados){
        resultados = `
            <div class="item-erro"> 
                <p>
                    Não temos essa informação em nossa base de dados. Desculpe!
                </p>
            </div>
            <div>
                <img class="img-aviso" src="img/aviso-2.png" alt="Menina cientista.">
            </div>
        `;
    }

    //O innerHTML serve para definir o conteúdo HTML interno do elemento, que será toda a nosaa variável resultado
    section.innerHTML = resultados;
}
