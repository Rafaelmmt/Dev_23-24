const { createApp } = Vue

createApp({

    data() {
        return {
            openC01: false,
            projetos: [
                {
                    "print": "../../media/C01_Prj00.png",
                    "link":"projects/C01_Prj02/index.html",
                    "name": "HTML e CSS",
                    "description": "Projeto apresentando conceitos de HTML semântico e design responsivo.",
                },
                {
                    "print": "../../media/C01_Prj01.png",
                    "link":"projects/C01_Prj03/index.html",
                    "name": "Introdução JS",
                    "description": "Projeto utilizando JavaScript para tornar site dinâmico e interativo.",
                },
                {
                    "print": "../../media/C01_Prj02.png",
                    "link":"projects/C01_Prj04/index.html",
                    "name": "Introdução VUE JS",
                    "description": "Self Service Machine - Projeto simulando aplicativo de self service de lanchonete.",
                },
                {
                    "print": "../../media/C01_Prj03.png",
                    "link":"projects/C01_Prj06/index.html",
                    "name": "To Do List",
                    "description": "Projeto realizado em forma de desafio, buscando cumprir as especificações passadas pelo instrutor.",
                },
                {
                    "print": "../../media/C01_Prj05.png",
                    "link":"https://proj07-vuecli.vercel.app/",
                    "name": "Trivia Game",
                    "description": "Aplicação utilizando VUE CLI e API para a criação de um jogo de perguntas.",
                },
                {
                    "print": "../../media/C01_Prj06.png",
                    "link":"https://proj08-vuecli.vercel.app/#/",
                    "name": "Fake Store",
                    "description": "Projeto utilizando VUE CLI e a API (fakestoreapi.com) para simular um site de e-commerce.",
                },
                {
                    "print": "../../media/C01_Prj07.png",
                    "link":"https://proj09-vite.vercel.app/",
                    "name": "Estante Virtual",
                    "description": "Projeto utilizando VITE para criação de aplicação de adição e acompanhamento de leituras.",
                }
            ],
        }
    }

}).mount('#app')