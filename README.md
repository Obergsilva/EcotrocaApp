# EcotrocaApp 🌱

Uma plataforma de troca sustentável onde usuários podem compartilhar e trocar itens, promovendo o consumo consciente e a reutilização de produtos.

## 📋 Sobre o Projeto

O EcotrocaApp é uma aplicação web desenvolvida em React que conecta pessoas interessadas em trocar itens ao invés de descartá-los. A plataforma promove a sustentabilidade através da economia circular, permitindo que objetos tenham uma segunda vida útil.

### ✨ Funcionalidades

- 🏠 **Página Inicial**: Visualização de todos os itens disponíveis para troca
- 🔐 **Sistema de Autenticação**: Login e cadastro de usuários
- 📦 **Cadastro de Itens**: Adicione itens que você deseja trocar
- 👤 **Perfil do Usuário**: Gerencie suas informações pessoais
- 🔍 **Detalhes do Item**: Visualize informações completas de cada item
- 📱 **Design Responsivo**: Interface adaptada para diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

- **Frontend:**

  - React 19.1.0
  - React Router DOM 7.6.3
  - vite 7.1.2
  - Bootstrap 5.3.7
  - Bootstrap Icons 1.13.1
  - Axios

- **Backend:**

  - prisma 6.15.0
  - cors 2.8.5
  - express 5.1.0

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
# Clonar o repositório principal
git clone https://github.com/Obergsilva/EcotrocaApp.git

# Entrar na pasta EcotrocaApp
cd EcotrocaApp
```

2. Instale as dependências:

```bash
cd backend
npm install
cd ..
cd frontend
npm install
cd ..
```

3. Criar o banco de dados:

```bash
CREATE DATABASE nome_do_banco;

```

4. Criar e configurar o arquivo .env do backend:

```bash
DATABASE_URL="postgresql://<usuario>:<senha>@localhost:5432/<nome_do_banco>?schema=public"

```

5. Criar e configurar o arquivo .env do frontend:

```bash
VITE_API_URL=http://localhost:3001/api

```

6. Gerar o cliente Prisma

```bash
cd backend
npx prisma generate
```

7. Executar as migrações

```bash
cd backend
npx prisma migrate dev --name init
```

8. Popular o banco automaticamente

```bash
cd backend
npx prisma db seed
```

9. Inicie o servidor:

```bash
cd backend
npm start
```

O servidor será executado em `http://localhost:3001`

10. Em outro terminal, inicie a aplicação React:

```bash
cd frontend
npm start
```

A aplicação será aberta automaticamente em `http://localhost:5173`

## 🌐 Rotas da Aplicação

- `/` - Página inicial com listagem de itens
- `/login` - Página de login
- `/cadastrarUsuario` - Cadastro de novos usuários
- `/cadastrarItem` - Formulário para adicionar novos itens
- `/perfil` - Página do perfil do usuário
- `/item/:id` - Detalhes específicos de um item

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Orientadores

- **Fernanda Nascimento** - [GitHub](<[https://github.com/Obergsilva](https://github.com/FernandaNascimento26)>)
- **Luiz Carlos** - [GitHub](<[https://github.com/Obergsilva](https://github.com/LuizGup)>)

## 👥 Autores

- **Francisco Gutemberg** - [GitHub](https://github.com/Obergsilva)
- **Keyse Paulo** - [GitHub](https://github.com/keysepaulo)
- **Erika Mayara** - [GitHub](https://github.com/erikapimentel-dev)
- **Heloisa Rodrigues** - [GitHub](https://github.com/hisarod)
