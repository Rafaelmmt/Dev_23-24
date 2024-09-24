const { createApp } = Vue

createApp({

    data() {
        return {
            projetos: [
                {
                    "print": "../../media/C00_Prj00.png",
                    "link":"../../projects/C00_Prj/index.html",
                    "name": "Apresentação HTML, CSS e JS",
                    "description": "Site simples exemplicando as funções e interações entre arquivos HTML, CSS e JavaScript."
                },
                {
                    "print": "../../media/C01_Prj00a.png",
                    "link":"../../projects/C01_Prj01/index.html",
                    "name": "Proj01 - HTML e CSS",
                    "description": "Projeto de site estilo blog apresentando princípios básicos de HTML e CSS."
                },
                {
                    "print": "../../media/C01_Prj00.png",
                    "link":"../../projects/C01_Prj02/index.html",
                    "name": "Proj02 - HTML e CSS",
                    "description": "Projeto apresentando conceitos de HTML semântico e design responsivo."
                },
                {
                    "print": "../../media/C01_Prj01.png",
                    "link":"../../projects/C01_Prj03/index.html",
                    "name": "Proj03 - Introdução JavaScript",
                    "description": "Projeto utilizando JavaScript para tornar um site dinâmico e interativo."
                },
                {
                    "print": "../../media/C01_Prj02.png",
                    "link":"../../projects/C01_Prj04/index.html",
                    "name": "Proj04 - Introdução VUE JS",
                    "description": "Self Service Machine - Projeto simulando aplicativo de self service de lanchonete."
                },
                {
                    "print": "../../media/C01_Prj02b.png",
                    "link":"../../projects/C01_Prj05/index.html",
                    "name": "Proj05 - Introdução VUE JS",
                    "description": "Aplicação simples apresentando funcionalidades de Input do Usuário e Two-way Data Binding."
                },
                {
                    "print": "../../media/C01_Prj03.png",
                    "link":"../../projects/C01_Prj06/index.html",
                    "name": "Proj06 - To Do List",
                    "description": "Projeto realizado em forma de desafio, buscando cumprir as especificações passadas pelo instrutor."
                },
                {
                    "print": "../../media/C01_Prj05.png",
                    "link":"https://proj07-vuecli.vercel.app/",
                    "name": "Proj07 - Trivia Game",
                    "description": "Aplicação utilizando VUE CLI e API (opentdb.com) para a criação de um jogo de perguntas."
                },
                {
                    "print": "../../media/C01_Prj06.png",
                    "link":"https://proj08-vuecli.vercel.app/#/",
                    "name": "Proj08 - Fake Store",
                    "description": "Projeto utilizando VUE CLI e a API (fakestoreapi.com) para simular um site de e-commerce."
                },
                {
                    "print": "../../media/C01_Prj07.png",
                    "link":"https://proj09-vite.vercel.app/",
                    "name": "Proj09 - Estante Virtual",
                    "description": "Projeto utilizando VITE para criação de aplicação de adição e acompanhamento de leituras."
                },
                {
                    "print": "../../media/C02_Prj01.png",
                    "link":"https://frasesapp.vercel.app/",
                    "name": "QUASAR - Frases App",
                    "description": "Projeto utilizando o framework QUASAR para a criação de uma aplicação simples. Ao clicar no ícone uma nova frase é exibida."
                },
                {
                    "print": "../../media/C02_Prj02.png",
                    "link":"https://github.com/Rafaelmmt/cursos2023/tree/main/3.%20Forma%C3%A7%C3%A3o%20programador%20frontend%20-%20VueJS/Proj02",
                    "name": "QUASAR - Instagram",
                    "description": "Projeto utilizando o framework QUASAR para replicar o layout e algumas funcionalidades do Instagram."
                },
                {
                    "print": "../../media/C04_Prj01.png",
                    "link":"",
                    "name": "Note App",
                    "description": "Projeto de um aplicativo completo utilizando VUE-JS, composition API, Pinia e Firebase."
                }
            ],
        }
    }

}).mount('#app')