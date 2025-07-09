## NLW Agents

Projeto desenvolvido durante o **NLW (Next Level Week) 2025** da Rocketseat, focado em criar uma aplicação de agentes inteligentes.

## 🚀 Tecnologias

### Backend

- **Node.js** com TypeScript
- **Fastify** - Framework web rápido
- **Drizzle ORM** - ORM type-safe para PostgreSQL
- **PostgreSQL** com pgvector para embeddings
- **Zod** - Validação de schemas
- **Biome** - Linter e formatter

### Frontend

- **React 19** com TypeScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento
- **TanStack Query** - Gerenciamento de estado do servidor
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
nlw2025/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── schema/     # Schemas do Drizzle
│   │   │   └── migrations/ # Migrações do banco
│   │   ├── http/
│   │   │   └── routes/     # Rotas da API
│   │   └── server.ts       # Servidor Fastify
│   ├── docker-compose.yml  # Configuração do PostgreSQL
│   └── drizzle.config.ts   # Configuração do Drizzle
└── frontend/
    ├── src/
    │   ├── components/     # Componentes React
    │   ├── pages/         # Páginas da aplicação
    │   └── lib/           # Utilitários
    └── vite.config.ts     # Configuração do Vite
```

## 🛠️ Setup

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

### Backend

1. **Instalar dependências:**

```bash
cd backend
npm install
```

2. **Configurar variáveis de ambiente:**

```bash
# Criar arquivo .env na raiz do backend
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"
```

3. **Subir banco de dados:**

```bash
docker-compose up -d
```

4. **Executar migrações:**

```bash
npx drizzle-kit migrate
```

5. **Popular o banco de dados:**

```bash
npm run db:seed
```

5. **Iniciar servidor:**

```bash
npm run dev
```

### Frontend

1. **Instalar dependências:**

```bash
cd frontend
npm install
```

2. **Iniciar servidor de desenvolvimento:**

```bash
npm run dev
```

## 🗄️ Banco de Dados

### Schema

- **Rooms**: Tabela para salas de agentes
  - `id`: UUID (chave primária)
  - `name`: Nome da sala
  - `description`: Descrição da sala
  - `cratedAt`: Timestamp de criação

### Tecnologias de Banco

- **PostgreSQL** com extensão pgvector
- **Drizzle ORM** para type-safety
- Migrações automáticas

## 🎨 Padrões de Projeto

### Backend

- **Arquitetura REST** com Fastify
- **Type-safe** com TypeScript e Zod
- **ORM** com Drizzle para queries type-safe
- **Validação** de dados com Zod
- **Linting** com Biome

### Frontend

- **Componentes** funcionais com hooks
- **Roteamento** com React Router
- **Estado do servidor** com TanStack Query
- **Styling** com Tailwind CSS
- **TypeScript** para type-safety

## 📱 Funcionalidades

- ✅ Criação de salas de agentes
- ✅ Navegação entre páginas
- ✅ Interface responsiva
- ✅ API REST type-safe
- ✅ Banco de dados PostgreSQL

## 🔧 Scripts Disponíveis

### Backend

- `npm run dev` - Servidor de desenvolvimento
- `npm start` - Servidor de produção
- `npm run db:seed` - Executar seed do banco

### Frontend

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build

## 🚀 Deploy

### Backend

- Configurar variáveis de ambiente
- Executar migrações do banco
- Build com `npm start`

### Frontend

- Build com `npm run build`
- Servir arquivos estáticos

---

Desenvolvido com 💜 durante o **NLW 2025** da Rocketseat
