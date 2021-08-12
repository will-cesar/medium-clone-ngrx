## Comandos iniciais

- yarn add @ngrx/store
  - comando para instalar o NgRx no projeto
  - para correta configuração é necessário declarar o "StoreModule" dentro do app.module.ts
  - no app.module.ts colocar o ".forRoot([])" por ser um arquivo na raiz do projeto

- yarn add @ngrx/store-devtools
  - comando para instalar a ferramenta de desenvolvimento do NgRx
  - é necessário declarar o módulo "StoreDevtoolsModule"dentro do app.module.ts
  - também é necessário instalar a extensão do navegador para ter acesso a ferramenta de desenvolvimento

## Estrutura

- Store
  - centro das informações
  - sempre que um componente precise de algumal informação, ele deve consultar o store

- Selector
  - permite fazer consultas na aplicação de forma customizada

- Action
  - é uma ação que é enviada para ao estado da aplicação

- Reducer
  - é o gerenciador das actions
  - captura a "Action" para fazer uma mutação no store

## Métodos

- dispatch
  - despacha uma action para o reducer para que ele faça a mutação no store
  - é necessário passar como parâmetro o nome da action para ser ativada