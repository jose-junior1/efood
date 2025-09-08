# 🛒 eFood - e-commerce de restaurantes

Este repositório contém o código-fonte do meu projeto feito no curso da EBAC, desenvolvido com **React**, **TypeScript**, **styled-components**, entre outras ferramentas. O objetivo é representar o fluxo de um e-commerce, onde o usuário visualiza os restaurantes disponíveis, acessam seus respectivos cardápios e os adicionam no carrinho.

Para demonstar o fluxo tempos a seção de checkout, onde o usuário digita os dados de endereço de entrega, a forma de pagamento, e, se estiver tudo ok finaliza o pedido com um orderId único.

🔗 [Acesse o e-commerce online](https://efood-six-pearl.vercel.app/)

---

## ✨ Funcionalidades

- Página **Restaurantes** com destaque para os restaurantes.
- Página do **Restaurante** listandoo cardápio do restaurante que é passado via id.
- Aside global para fluxo completo de carrinho de compras > endereço de entrega > dados de pagamento > confirmação de pedido
- Layout **responsivo** para desktop e mobile.
- Estilização com **styled-components**.
- Integração com api extena.
- Código limpo, modularizado e reutilizável.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Styled-components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- Redux
- RTK Query
- Formik
- Yup
- React Spinners

---

## 📁 Estrutura do Projeto

```bash
efood/
├── public/
├── src/
│   ├── assets/              # Logos, imagens e arquivo de definição de tipos de imagem
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/               # Páginas Home e Restaurant
|   ├── services/            # Requisição da API com RTK Query
|   ├── store/               # Store contendo os reducers e middlewares
|       ├── reducers/        # Reducer do carrinho (adicionar, remover, abrir aside, avançar etapas, limpar fluxo)
│   ├── styles/              # Estilos globais e arquivo de cores
|   ├── utils/               # Função de conversão de moeda para BRL
│   ├── App.tsx              # Definição das rotas
│   └── index.tsx            # Ponto de entrada do app
|   └── routes.tsx           # Rotas do React Router
|   └── types.d.ts           # Arquivos de declaração de tipos (todos os tipos utilizados no projeto estão aqui)
├── .gitignore
├── .hintrc
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
```

---

## 📌 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/jose-junior1/efood
cd efood
```
2. Instale as dependências:

```
    npm install
```

3. Inicie o servidor de desenvolvimento:

```
    npm run start
```

4. Acesse o navegador:

```
    http://localhost:3000
```

---



## 🚀 Deploy
Este projeto está hospedado gratuitamente via Vercel:

🌍 https://efood-six-pearl.vercel.app/

---

> Desenvolvido com 💙 por José Junior
