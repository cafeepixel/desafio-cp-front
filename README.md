![Logo](http://cafeepixel.com.br/assinaturas/logo_color_git.png)
# Desafio CP - Frontend

A **Café e Pixel** é uma empresa que oferece diversos serviços, desde consultoria de software ao desenvolvimento completo de uma aplicação robusta.

Nossos desenvolvedores procuram estar sempre em aprendizado contínuo, pois amam o que fazem. Nossos processos de desenvolvimento ágil e nossa busca por melhores práticas de desenvolvimento nos proporcionam um ótimo ambiente para profissionais que gostam de criar softwares de qualidade em boa companhia.

Estamos sempre procurando por profissionais que gostam de otimizar seu trabalho, por isso damos preferência a times pequenos com profissionais qualificados, ao invés de times grandes com profissionais medianos.

Este repositório contém um problema usado para avaliar as skills do candidato. É importante ressaltar que resolver o desafio de forma satisfatória é apenas parte do que será avaliado. Nós consideramos disciplinas como documentação, testing, linha do tempo dos commits, tempo de entrega e melhores práticas de design e desenvolvimento.

### Dicas

- Leia cuidadosamente as especificações, se não compreender algo, sinta-se livre para falar com a gente;
- Observe as recomendações e materiais de referência;
- Apreciamos a simplicidade, então defina bem o setup do projeto para nos auxiliar na sua avaliação;
- Se possível faça testes, eles fazem do mundo um lugar melhor :D

## Como participar

1. Faça um fork desse repositório no github e adicione permissão de leitura para **todos** os usuários abaixo:
- [Marcelo](https://github.com/marcelomoreles)
- [Édipo](http://github.com/shuhikari)
- [Jailton](https://github.com/jlandim)
- [Manoel](https://github.com/Manogel)

2. Siga as instruções do README.md (este arquivo);
3. Faça o deploy do seu projeto em algum serviço de hospedagem (Heroku, Firebase, etc);
4. Ao finalizar uma das entregas, abra **um pull request nesse repositório para cada etapa das entregas** com o título da mesma;
5. Códigos plagiados serão desclassificados;
5. Não se preocupe com o PR sendo rejeitado, usaremos ele como referência, mas não podemos fazer o merge para não comprometer a resposta de outros candidatos.

## Prazo para entrega
O projeto deverá ser entregue até 20:00 de domingo (06/09).

# Especificações - Frontend

Você deve implementar as telas de um ecommerce de livros, disponibilzadas [neste link](https://www.figma.com/file/umDLjMwMnxe4N68mQnucBN/ecommerce-desafio-cp?node-id=0%3A1).

O principal objetivo desse desafio é **construir o fluxo de um usuário que deseja comprar um livro nessa store**.


### 1. Histórias
1. O usuário pode visualizar os livros na home
2. O usuário pode buscar os livros pelo título e filtrar por categoria
3. O usuário pode adicionar um livro ao carrinho

### 2. Dados dos livros
Os dados dos livros estão disponibilizados em um `json-server` neste repositório. Há instruções para rodá-lo no fim dessa página.


### 3. Requerimentos do projeto

- Deixar a aplicação disponível online (Heroku, Firebase, ou outro de sua preferência);
- A aplicação deve ser escrita usando `reactjs`;
- Escreva no readme do seu projeto uma breve documentação de como rodá-lo localmente;
- Quaisquer outras funcionalidades extras podem contribuir para sua avaliação. Mas lembre-se: Qualidade > Quantidade;
- As telas **devem ser navegáveis**;
- **Todos os commits deverão estar em inglês**;
- **O nome das variáveis internas, funções e métodos da API deve ser escritas em inglês**.


# Recomendações

- Escreva testes;
- Use boas práticas de programação;
- Utilize os princípios [SOLID](https://en.wikipedia.org/wiki/SOLID);
- Não se esqueça de ler com atenção aos requerimentos, cada detalhe conta :wink:.

---

# JSON SERVER


Para rodar um server json 'fake' e conseguir consumir os dados no endereço `http://localhost:3333/books`, basta seguir os passos abaixo:

### Rodar o server localmente para consumir os dados

Considerando que já tenha o `node` na versão mais atualizada, rode o seguinte comando

`npx json-server server.json -p 3333`

---

# ❗❗❗ Para os candidatos à vaga de Fullstack ❗❗❗

Caso você esteja concorrendo à vaga de fullstack, **não utilize o json, mas integre a API do desafio de backend com este repositório na listagem de livros.**

O fluxo de adicionar o livro ao carrinho será controlado localmente.

[Desafio de Backend](https://github.com/cafeepixel/desafio-cp-back)


