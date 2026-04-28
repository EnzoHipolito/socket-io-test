# 💬 rl-chat

Aplicação de **chat em tempo real** com autenticação de usuários, construída com Node.js e Socket.IO.

Permite que usuários se registrem, façam login e troquem mensagens instantaneamente, com exibição do número de pessoas online em tempo real.

---

## ✨ Funcionalidades

- Troca de mensagens em tempo real via WebSocket
- Registro e login de usuários
- Senha criptografada com bcrypt
- Autenticação via JWT
- Contagem de usuários online ao vivo
- Notificações de entrada e saída de usuários

---

## 🚀 Tecnologias

| Tecnologia | Uso |
|---|---|
| [Node.js](https://nodejs.org/) | Ambiente de execução do servidor |
| [Express](https://expressjs.com/) | Framework HTTP para as rotas da API |
| [Socket.IO](https://socket.io/) | Comunicação em tempo real via WebSocket |
| [Sequelize](https://sequelize.org/) | ORM para interação com o banco de dados |
| [MySQL](https://www.mysql.com/) | Banco de dados relacional |
| [JWT](https://jwt.io/) | Autenticação via tokens |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | Hash e verificação de senhas |
| [Docker](https://www.docker.com/) | Containerização da aplicação e do banco |

---

## 🛠️ Como rodar

### Com Docker (recomendado)

```bash
docker-compose up --build
```

A aplicação estará disponível em `http://localhost:3000`.

### Sem Docker

1. Configure as variáveis de ambiente (ou edite `db/conn.js` com os dados do seu MySQL):

```env
DB_HOST= 
DB_USER= 
DB_PASS= 
DB_NAME= 
```

2. Instale as dependências e inicie o servidor:

```bash
npm install
npm start
```

---

## 📁 Estrutura do projeto

```
rl-chat/
├── controller/        # Lógica dos endpoints (registro, login)
├── db/                # Conexão com o banco de dados
├── models/            # Model do usuário (Sequelize)
├── public/            # Frontend (HTML, CSS, JS)
│   └── scripts/       # Scripts do cliente
├── service/           # Serviços de JWT e bcrypt
├── server.js          # Entrada da aplicação
└── docker-compose.yml # Configuração Docker
```
