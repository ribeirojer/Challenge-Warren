# Desafio Warren

### Considerações sobre Design

O design foi inspirado numa anúncio que vi no Youtube, sobre a Warren Edu, observei na propaganda duas telas a primeira inspirou a tabela e alguns itens do modal(sombras), O formato do modal foi inspirado na segunda tela e no logo da Warren.
Além disso, ambos os elementos são fortemente inspirados nas telas disponibilizadas no desafio.

### Considerações sobre implementação

- Vite para construção do projeto
- React
- React Router para navegação e filtros
- Fetch API para requisição dos dados
- estilização com CSS Modules
- TypeScript

O cabeçalho da página, filtros e cabeçalho da tabela são elementos que não se alteram, o principal componente é o Table, ele realiza a requisição e envia a informação completa para o modal.
O componente que faz a navegação é o Filter, e a busca dos resultados é feita utilizando informações passadas pela (URL).
Nomenclatura de CSS BEM. Preocupação com usabilidade se dá atraves do loader.

![imagem-do-desafio](https://warren.com.br/assets/desafio-web/home-desafio-web.png)
![imagem-da-solução](http://eduardojer.tech/assets/imagem-warren.png)

Dificuldades e problemas: apesar das tentativas com Jest, Cypress e Playwright, não consegui realizar nenhum teste automatizado. Um problema bem aparente é que o filtro de status só funciona combinado com o filtro de título.
