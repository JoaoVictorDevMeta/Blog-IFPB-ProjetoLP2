# Projeto para Disciplina LP2 - Blog IFPB

Esse projeto contem o trabalho de cinco estudantes do curso técnico integrado em informática do IFPB, campus João Pessoa, e contempla a nota anual da disciplina LP2(linguagens de programação 2).

## Setup Geral

O projeto se trata do Front End feito em ReactJS

### Como utilizar

1. Faça dowload do cógido e ente em sua pasta principal

2. Faça download das dependencias utilzando o comando abaixo:
```shell
npm install
```
2.1 Caso tudo ocorra bem deverá aparecer as seguintes mensagens
```shell
up to date, audited 275 packages in 2s

98 packages are looking for funding
  run `npm fund` for details       

found 0 vulnerabilities
```

3. Crie um arquivo no diretorio src/pages/search/db.json e adicione o conteudo abaixo:
```json
{
    "blogs": [
        {
            "title": "My first blog post",
            "description": "This is my first blog, please enjoy it and give some feedback. I love programming, this is my area of activity, its wonderful",
            "category": "Informação",
            "image": "https://media.istockphoto.com/id/1334436084/pt/foto/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=RADkpRxqLuKNRojQHMbRqcyiuqjt3BJ2Nj8DPgvrTAs="
        },
        {
            "title": "Seja bem vindo ao Blog do IFPB",
            "description": "Titulo do Blog em especifico, tratando o teTitulo do Blog em especifico, tratando o tema......Titulo do Blog em especifico, tratando o tema......ma......",
            "category": "Informação",
            "image": "https://files.tecnoblog.net/wp-content/uploads/2022/05/blog.png"
        },
        {
            "title": "Como construir um Blog",
            "description": "Titulo do Blog em especifico, tratando o teTitulo do Blog em especifico, tratando o tema......Titulo do Blog em especifico, tratando o tema......ma......",
            "category": "Informação",
            "image": "https://files.tecnoblog.net/wp-content/uploads/2022/05/o-que-e-blog-destaque-1536x864.png"
        },
        {
            "title": "Os melhores Jogos de 2024",
            "description": "Em uma pesquisa feita na internet, constatou-se a liderança do Xadrez no Ranking de jogos, alem de Gorila Voador e Temple Run...",
            "category": "Informação",
            "image": "https://media.wired.com/photos/62855b1bb6cfd378a30c474a/master/pass/Build-Game-Watch-It-Die-Hyper-Scape-Games.jpg"
        },
        {
            "title": "Titulo do Blog em especifico, tratando o tema......",
            "description": "Titulo do Blog em especifico, tratando o teTitulo do Blog em especifico, tratando o tema......Titulo do Blog em especifico, tratando o tema......ma......",
            "category": "Informação",
            "image": "https://t4.ftcdn.net/jpg/04/25/74/29/360_F_425742955_QH2nJTiyl7N0YWzbCjQoH6fEGyNaiFrz.jpg"
        }
    ]
}
```

4. Execute no mesmo terminal em que fez a instalação o seguinte comando:
```shell
npm run dev
```
5. Caso tudo ocorra bem a mensagem abaixo irá aparecer
```shell
> scrumweb@0.0.0 dev
> vite


  VITE v4.4.9  ready in 1817 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
6. Agora que o site está rondando basta abrir o link >>> http://localhost:5173

7. Divirta-se

Obs: 1. Para parar o site aperte Ctrl + C. 2. O site só estara disponivel para sua máquina, dito isso, outros dispositivos são incapazes de acessá-lo.

## Módulos

### Funcionalidades