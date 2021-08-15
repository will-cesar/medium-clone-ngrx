## Comandos iniciais

- yarn add @ngrx/store
  - comando para instalar o NgRx no projeto
  - para correta configuração é necessário declarar o "StoreModule" dentro do app.module.ts
  - no app.module.ts colocar o ".forRoot([])" por ser um arquivo na raiz do projeto

- yarn add @ngrx/store-devtools
  - comando para instalar a ferramenta de desenvolvimento do NgRx
  - é necessário declarar o módulo "StoreDevtoolsModule"dentro do app.module.ts
  - também é necessário instalar a extensão do navegador para ter acesso a ferramenta de desenvolvimento

- yarn add @ngrx/effects
  - comando para instalar a lib de Effects
  - é necessário a declaração no app.module.ts e importar o "EffectsModule.forRoot([])"
  - também é necessário importar dentro do modulo filho onde está sendo utilizado o state

## Estrutura

- Diagrama:
  - Service -> Effects -> Action -> Reducer -> Store -> Selector -> Component
  - https://ngrx.io/guide/store

- Effects
  - utilizado para prover para as actions dados obtidos por requests de api externas
  - tem como responsabilidade isolar a requisição do componente
  - normalmente fazemos a requisição para um endpoint dentro do componente, mas com o effects
  ele se torna responsável por isso, repartindo as responsabilidades, fazendo o componente
  ser mais limpo

- Action
  - é uma ação que é enviada para ao state da aplicação
  - são eventos únicos que são despachados por componentes e serviços

- Reducer
  - é o gerenciador das actions
  - captura a "Action" para fazer uma mutação no store
  - ele pega o state atual e o último state anterior para computar um novo state
  - createReducer:
    - sempre é necessário passar um state inicial e as ações daquele reducer
    - operador "on"
      - ele diz quando a Action acontece

- Store
  - centro das informações, onde o state se localiza
  - sempre que um componente precise de algumal informação, ele deve consultar o store

- Selector
  - é uma função de ajuda a criar um get do state
  - permite fazer consultas na aplicação de forma customizada
  - são funções usadas para selecionar, obter e compor pedaços do state

## Passo a passo estruturação no projeto
  - criar uma Action
  - criar o Reducer que irá receber essa Action e fazer as modificações do state
  - dentro do módulo onde se encontra a manipulação do state, colocar declarar o "StoreModule.forFeature()"
    - o primeiro parâmetro é o nome do state
    - o segundo é o Reducer
      - nesse caso a função que exporta todos os reducers

## Métodos
- dispatch
  - despacha uma action para o reducer para que ele faça a mutação no store
  - é necessário passar como parâmetro o nome da action para ser ativada
