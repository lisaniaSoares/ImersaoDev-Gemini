//VARIÁVEL

// let variavel_JS = "variável"; -- Dessa forma, definimos uma variável em JS sem a propriedade hoisting (pois usamos let), o var possui o hoisting, e o const, são para variáveis que não mudem seus valores

//LISTA

//let lista = ["item-0", "item-1"]; -- Dessa forma, definimos uma lista em JS (da mesma forma que uma variável, entretanto com [] como valor, com itens dentro), seu índice é o índice padrão das listas

//OBJETOS

//Dentro de um objeto, podemos armazenar diversas instâncias, organizadas com suas próprias variáveis e informações (desde que sigam um padrão), como por exemplo um objeto atleta: armazenará diversas instansias de atletas com suas respectivas informações

//let objeto = {
//              titulo: "";
//              valor_numerico: ;
//              descricao: "";
//};

//Para nossa base de dados, usaremos uma lista de objetos, com cada uma das cientistas 

//BASE DE DADOS

let cientistas = [

    {
        nome: "Marie Curie",
        descricao: "Marie Curie foi uma física e química polonesa, naturalizada francesa, pioneira no estudo da radioatividade. Ela foi a primeira mulher a ganhar um Prêmio Nobel, e a única a ganhar em duas áreas científicas diferentes: Física e Química.",
        area: "Física e Química",
        nascimento: "1867",
        morte: "1934",
        wiki: "https://pt.wikipedia.org/wiki/Marie_Curie"
    },
    {
        nome: "Rosalind Franklin",
        descricao: "Cristalografa britânica, Rosalind Franklin produziu a famosa 'Foto 51', uma imagem por difração de raios X que revelou a estrutura helicoidal do DNA. Seu trabalho foi fundamental para a compreensão da molécula da vida, embora seu papel tenha sido subestimado em vida.",
        area: "Biofísica",
        nascimento: "1920",
        morte: "1958",
        wiki: "https://pt.wikipedia.org/wiki/Rosalind_Franklin"
    },
    {
        nome: "Ada Lovelace",
        descricao: "Ada Lovelace, nascida Augusta Ada Byron, foi uma matemática e escritora inglesa que revolucionou o mundo da computação. Considerada a primeira programadora da história, ela trabalhou com a Máquina Analítica de Charles Babbage, antecessora dos computadores modernos.",
        area: "Matemática",
        nascimento: "1815",
        morte: "1852",
        wiki: "https://pt.wikipedia.org/wiki/Ada_Lovelace"
    },
    {
        nome: "Elizabeth Blackwell",
        descricao: "Elizabeth Blackwell foi a primeira mulher a se formar em medicina nos Estados Unidos. Ela enfrentou inúmeros obstáculos para alcançar seu objetivo e se tornou uma defensora dos direitos das mulheres na área da saúde.",
        area: "Medicina",
        nascimento: "1821",
        morte: "1910",
        wiki: "https://pt.wikipedia.org/wiki/Elizabeth_Blackwell"
    },
    {
        nome: "Katherine Clerk Maxwell",
        descricao: "Katherine Clerk Maxwell foi uma física teórica que fez contribuições significativas para a teoria eletromagnética. Ela trabalhou em estreita colaboração com seu marido, James Clerk Maxwell, um dos cientistas mais importantes do século XIX.",
        area: "Física e Matemática",
        nascimento: "1831",
        morte: "1907",
        wiki: "https://pt.wikipedia.org/wiki/Katherine_Clerk_Maxwell"
    },
    {
        nome: "Mary Anning",
        descricao: "Mary Anning foi uma paleontóloga amadora que fez importantes descobertas de fósseis de dinossauros. Suas descobertas contribuíram significativamente para a compreensão da vida pré-histórica.",
        area: "Paleontologia",
        nascimento: "1799",
        morte: "1847",
        wiki: "https://pt.wikipedia.org/wiki/Mary_Anning"
    },
    {
        nome: "Grace Hopper",
        descricao: "Almirante da Marinha dos Estados Unidos e pioneira em ciência da computação, Grace Hopper desenvolveu o primeiro compilador e popularizou a linguagem de programação COBOL. Seus trabalhos foram fundamentais para a criação de softwares mais acessíveis e eficientes.",
        area: "Ciência da Computação",
        nascimento: "1906",
        morte: "1992",
        wiki: "https://pt.wikipedia.org/wiki/Grace_Hopper"
    },
    {
        nome: "Lise Meitner",
        descricao: "Física austríaca, Lise Meitner foi uma das principais cientistas envolvidas na descoberta da fissão nuclear. Seus trabalhos teóricos foram fundamentais para a compreensão desse fenômeno e suas implicações para a energia nuclear.",
        area: "Física Nuclear",
        nascimento: "1878",
        morte: "1968",
        wiki: "https://pt.wikipedia.org/wiki/Lise_Meitner"
    },
    {
        nome: "Frances Allen",
        descricao: "Cientista da computação americana, Frances Allen foi a primeira mulher a ganhar o Prêmio Turing, considerado o Nobel da computação. Seus trabalhos pioneiros em otimização de compiladores e análise de programas tiveram um impacto profundo na indústria de software.",
        area: "Ciência da Computação",
        nascimento: "1932",
        morte: "2020",
        wiki: "https://en.wikipedia.org/wiki/Frances_Allen" // Ainda não há página na Wikipédia em português
    }
];


