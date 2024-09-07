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
        wiki: "https://pt.wikipedia.org/wiki/Marie_Curie",
        img: "img/cientistas/marie-curie.jpeg",
        tags: "quimica química física fisica radioatividade marrie currie"
    },
    {
        nome: "Rosalind Franklin",
        descricao: "Cristalografa britânica, Rosalind Franklin produziu a famosa 'Foto 51', uma imagem por difração de raios X que revelou a estrutura helicoidal do DNA. Seu trabalho foi fundamental para a compreensão da molécula da vida, embora seu papel tenha sido subestimado em vida.",
        area: "Biofísica",
        nascimento: "1920",
        morte: "1958",
        wiki: "https://pt.wikipedia.org/wiki/Rosalind_Franklin",
        img: "img/cientistas/rosalind-franklin.jpg",
        tags: "fotografia biologia fisica física molecula DNA dna rna"
    },
    {
        nome: "Ada Lovelace",
        descricao: "Ada Lovelace, nascida Augusta Ada Byron, foi uma matemática e escritora inglesa que revolucionou o mundo da computação. Considerada a primeira programadora da história, ela trabalhou com a Máquina Analítica de Charles Babbage, antecessora dos computadores modernos.",
        area: "Matemática",
        nascimento: "1815",
        morte: "1852",
        wiki: "https://pt.wikipedia.org/wiki/Ada_Lovelace",
        img: "img/cientistas/ada-lovelace.webp",
        tags: "programação programaçao programacao computaçao computacao programadora analise maquina matematica computacão tech tecnologia tecnologica tecnológica"
    },
    {
        nome: "Elizabeth Blackwell",
        descricao: "Elizabeth Blackwell foi a primeira mulher a se formar em medicina nos Estados Unidos. Ela enfrentou inúmeros obstáculos para alcançar seu objetivo e se tornou uma defensora dos direitos das mulheres na área da saúde.",
        area: "Medicina",
        nascimento: "1821",
        morte: "1910",
        wiki: "https://pt.wikipedia.org/wiki/Elizabeth_Blackwell",
        img: "img/cientistas/elizabeth-blackwell.jpg",
        tags: "medicina medica médica saude"
    },
    {
        nome: "Katherine Clerk Maxwell",
        descricao: "Katherine Clerk Maxwell foi uma física teórica que fez contribuições significativas para a teoria eletromagnética. Ela trabalhou em estreita colaboração com seu marido, James Clerk Maxwell, um dos cientistas mais importantes do século XIX.",
        area: "Física e Matemática",
        nascimento: "1831",
        morte: "1907",
        wiki: "https://pt.wikipedia.org/wiki/Katherine_Clerk_Maxwell",
        img: "img/cientistas/katherine-clerk.jpeg",
        tags: "fisica matematica matemática teorica eletromagnetismo eletron elétron eletromagnetica"
    },
    {
        nome: "Mary Anning",
        descricao: "Mary Anning foi uma paleontóloga amadora que fez importantes descobertas de fósseis de dinossauros. Suas descobertas contribuíram significativamente para a compreensão da vida pré-histórica.",
        area: "Paleontologia",
        nascimento: "1799",
        morte: "1847",
        wiki: "https://pt.wikipedia.org/wiki/Mary_Anning",
        img: "img/cientistas/mary-anning.jpg",
        tags: "fossil fosseis paleontologa pre historia"
    },
    {
        nome: "Grace Hopper",
        descricao: "Almirante da Marinha dos Estados Unidos e pioneira em ciência da computação, Grace Hopper desenvolveu o primeiro compilador e popularizou a linguagem de programação COBOL. Seus trabalhos foram fundamentais para a criação de softwares mais acessíveis e eficientes.",
        area: "Ciência da Computação",
        nascimento: "1906",
        morte: "1992",
        wiki: "https://pt.wikipedia.org/wiki/Grace_Hopper",
        img: "img/cientistas/grace-hopper.jpg",
        tags: "ciencia computacao computacão computaçao programação programaçao programacao robotica robô robótica lingua tech tecnologia tecnologica tecnológica"
    },
    {
        nome: "Lise Meitner",
        descricao: "Física austríaca, Lise Meitner foi uma das principais cientistas envolvidas na descoberta da fissão nuclear. Seus trabalhos teóricos foram fundamentais para a compreensão desse fenômeno e suas implicações para a energia nuclear.",
        area: "Física Nuclear",
        nascimento: "1878",
        morte: "1968",
        wiki: "https://pt.wikipedia.org/wiki/Lise_Meitner",
        img: "img/cientistas/lise.jpeg",
        tags: "fisica nucleo fissao teorica"
    },
    {
        nome: "Frances Allen",
        descricao: "Cientista da computação americana, Frances Allen foi a primeira mulher a ganhar o Prêmio Turing, considerado o Nobel da computação. Seus trabalhos pioneiros em otimização de compiladores e análise de programas tiveram um impacto profundo na indústria de software.",
        area: "Ciência da Computação",
        nascimento: "1932",
        morte: "2020",
        wiki: "https://en.wikipedia.org/wiki/Frances_Allen", // Ainda não há página na Wikipédia em português
        img: "img/cientistas/frances-allen.jpg",
        tags: "ciencia computacao computacão computaçao programação programaçao programacao robotica robô robótica lingua industria premio tech tecnologia tecnologica tecnológica"
    },
    {
        nome: "Chien-Shiung Wu",
        descricao: "Física experimental chinesa que realizou experimentos cruciais que levaram à refutação da lei de conservação da paridade, um princípio fundamental da física.",
        area: "Física",
        nascimento: "1912",
        morte: "1997",
        wiki: "https://pt.wikipedia.org/wiki/Chien-Shiung_Wu",
        img: "img/cientistas/chien-shiung.jpg",
        tags: "fisica conservacao conservacão principio"
    },
    {
        nome: "Gladys West",
        descricao: "Matemática americana que contribuiu significativamente para o desenvolvimento do sistema de posicionamento global (GPS). Seus cálculos precisos e meticulosos foram essenciais para a criação de um modelo matemático da Terra, que serviu como base para o funcionamento do GPS.",
        area: "Matemática",
        nascimento: "1930",
        morte: "Dias atuais",
        wiki: "https://pt.wikipedia.org/wiki/Gladys_West",
        img: "img/cientistas/gladys-west.jpeg",
        tags: "matematica calculo matematico tech tecnologia tecnologica tecnológica"
    },
    {
        nome: "Jaqueline Goes de Jesus",
        descricao: "Bióloga molecular brasileira que liderou a equipe que sequenciou o genoma do vírus SARS-CoV-2 no Brasil em tempo recorde. Seu trabalho foi fundamental para o desenvolvimento de testes e vacinas contra a COVID-19 e a compreensão da evolução do vírus.",
        area: "Biologia Molecular",
        nascimento: "1989", 
        morte: "Dias atuais",
        wiki: "https://www.uol.com.br/universa/noticias/redacao/2020/05/14/jaqueline-goes-de-jesus-a-cientista-que-desvendou-o-coronavirus-no-brasil.htm",
        img: "img/cientistas/jaqueline-goes.png",
        tags: "virus saude saúde covid biologa biologica rna"
    },
    {
        nome: "Katherine Johnson",
        descricao: " Foi uma matemática, física e cientista espacial norte-americana de renome mundial. Seus cálculos precisos foram cruciais para o sucesso das primeiras missões espaciais dos Estados Unidos, incluindo os projetos Mercury, Gemini e Apollo, realizou cálculos complexos para as missões espaciais da NASA.",
        area: "Matemática",
        nascimento: "1928",
        morte: "Dias atuais",
        wiki: "https://pt.wikipedia.org/wiki/Katherine_Johnson",
        img: "img/cientistas/katherine-jhonson.jpg",
        tags: "calculo calculos fisica matematica missoes EUA"
    },
    {
        nome: "Jennifer Anne Doudna",
        descricao: " Bioquímica americana, pioneira na técnica de edição genética CRISPR-Cas9. Seus trabalhos revolucionários na área de biologia molecular abriram novas possibilidades para a cura de doenças genéticas e a engenharia genética.",
        area: "Bioquímica e Genética",
        nascimento: "1964",
        morte: "Dias atuais",
        wiki: "https://pt.wikipedia.org/wiki/Jennifer_Doudna",
        img: "img/cientistas/jennifer-anne.jpg",
        tags: "biologia quimica bioquimica química genetica"
    },
    {
        nome: "Joy Buolamwini",
        descricao: "Cientista da computação e ativista digital ganense-americana. Buolamwini é conhecida por seu trabalho pioneiro na detecção de vieses algorítmicos em sistemas de reconhecimento facial, especialmente em relação a pessoas negras e mulheres.",
        area: "Ciência da computação e Inteligência Artificial",
        nascimento: "1989",
        morte: "Dias atuais",
        wiki: "https://en.wikipedia.org/wiki/Joy_Buolamwini",
        img: "img/cientistas/joy-buolamwini.jpeg",
        tags: "ciencia computacao computacão computaçao programação programaçao programacao tech tecnologia tecnologica tecnológica ia ai deteccao deteccão inteligencia"
    },
    {
        nome: "Carol Shaw",
        descricao: "Pioneira na indústria de videogames, programadora e designer de jogos.Ela é frequentemente reconhecida como a primeira programadora de jogos profissional e sua contribuição mais famosa é o clássico River Raid para o Atari 2600.",
        area: "Desenvolvimento de Jogos Eletrônicos",
        nascimento: "1955",
        morte: "Dias atuais",
        wiki: "https://movimentomulheresnati.labbs.com.br/carol-shaw/",
        img: "img/cientistas/carol-shaw.jpg",
        tags: "computacao computacão computaçao programação programaçao programacao tech tecnologia tecnologica tecnológica eletronico jogo videogame game video industria desenvolvedora"
    }
];


