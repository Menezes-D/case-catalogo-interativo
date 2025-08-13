# Catálogo Interativo - React Native + Expo

## Descrição

Este projeto é um aplicativo móvel de catálogo de produtos, desenvolvido com React Native e Expo, consumindo uma API REST pública para exibir produtos masculinos e femininos. O app conta com funcionalidades de login simples, navegação entre telas, e exibição de detalhes dos produtos.

---

## Funcionalidades

- Tela de login com validação básica.
- Abas para seleção de categoria (Masculino / Feminino).
- Listagem dos produtos consumidos da API [dummyjson.com](https://dummyjson.com/).
- Tela de detalhes do produto com imagem, descrição e preço.
- Botões de navegação: Home (voltar para a lista) e Logout (voltar para login).
- Feedback visual de carregamento com `ActivityIndicator`.
- Navegação usando `expo-router`.

---

## Tecnologias usadas

- React Native
- Expo
- Axios (para consumo da API REST)
- TypeScript
- Expo Router (para navegação)

---

## Pré-requisitos

- Node.js (versão LTS recomendada)
- Axios - (npm install axios)
- Emulador Android/iOS ou dispositivo físico com Expo Go instalado
- Navegador

---

## Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/catalogo-interativo.git
   cd catalogo-interativo

2. Instale as dependências:

    ```bash
    npm install

3. Inicie o Expo:

    ```bash
    npm run start
    # ou
    npx expo start

4. Execute no dispositivo ou emulador:

- No celular, abra o app Expo Go e escaneie o QR Code exibido.
- No Terminal, aperte W para abrir o navegador.
- No emulador, selecione rodar no Android/iOS pelo menu do Expo.


5. Estrutura do projeto
    ```bash
    /app
    ├── index.tsx          # Tela de login
    ├── products.tsx       # Tela de listagem de produtos
    ├── products/[id].tsx  # Tela de detalhes do produto
    /styles
    ├── login-style.ts
    ├── products-style.ts
    ├── product-details-style.ts


## Como funciona a navegação <-
- Login com usuário e senha fixos (Admin / Admin).
- Tela de produtos com abas para categorias Masculino e Feminino.
- Clicar no produto leva para a tela de detalhes.
- Na tela de detalhes, botões para voltar à lista (Home) ou fazer logout.


## Consumo da API <-
Listagem por categoria:
- https://dummyjson.com/products/category/mens-shirts
- https://dummyjson.com/products/category/womens-dresses

Detalhes do produto:
- https://dummyjson.com/products/{id}



## Conexão com os conceitos aprendidos <-
Este projeto integra os seguintes conceitos:
- Consumo de APIs REST com Axios em React Native.
- Gerenciamento de estado e efeitos colaterais com React Hooks (useState, useEffect).
- Navegação baseada em rotas dinâmicas com expo-router.
- Validação simples e controle de fluxo para melhorar UX.
- Estilização responsiva com StyleSheet.