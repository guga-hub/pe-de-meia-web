<div align="center">

<img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge" />
<img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Framer%20Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-Deploy-black?style=for-the-badge&logo=vercel&logoColor=white" />

<br/><br/>

# 🪙 Pé de Meia — Web

### A interface que transforma um salário em um plano de vida.

Frontend da plataforma **Pé de Meia** — uma experiência web pensada para ser simples, fluida e acessível para qualquer pessoa. O usuário informa seu salário, recebe um guia personalizado com simulações reais de investimento, e é convidado a criar uma conta para acompanhar sua evolução.

<br/>

[🌐 Ver Demo ao Vivo](https://pedemeia.vercel.app) · [🔌 Repositório do Backend](https://github.com/seuusuario/pe-de-meia-api) · [📖 API Docs](https://api-pedemeia.onrender.com/swagger-ui.html) · [🐛 Reportar Bug](https://github.com/seuusuario/pe-de-meia-web/issues)

</div>

---

## 🎯 A Experiência

O grande diferencial do Pé de Meia é o **fluxo de onboarding sem cadastro**. O usuário recebe valor real antes de criar uma conta:

```
🏠 Landing Page
      ↓
💬 "Quanto você ganha por mês?" (única pergunta)
      ↓
⚡ Animação de carregamento — "Calculando seu plano..."
      ↓
📊 Guia personalizado aparece progressivamente
   ├── Alocação do salário (regra 50/30/20)
   ├── Quanto você precisa de reserva de emergência
   ├── Simulações: CDB, Tesouro Selic, Tesouro IPCA+, FIIs, ETFs
   └── Seu passo a passo para começar a investir
      ↓
🔐 "Salve seu plano" → Cadastro com Google ou email
      ↓
📈 Dashboard de acompanhamento de investimentos
```

Sem jargão financeiro. Sem formulário de cadastro logo de cara. Só o que importa.

---

## 🗂️ Repositórios do Projeto

| Repositório | Tecnologia | Deploy | Status |
|-------------|------------|--------|--------|
| [`pe-de-meia-web`](https://github.com/seuusuario/pe-de-meia-web) ← *você está aqui* | Next.js 14 + TypeScript | Vercel | ![status](https://img.shields.io/badge/online-brightgreen) |
| [`pe-de-meia-api`](https://github.com/seuusuario/pe-de-meia-api) | Java 21 + Spring Boot 3 | Render.com | ![status](https://img.shields.io/badge/online-brightgreen) |

---

## ✨ Funcionalidades

- **Onboarding animado** com Framer Motion — storytelling progressivo que prende o usuário
- **Guia personalizado** consumido da API Spring Boot com dados reais do Banco Central e Tesouro Direto
- **Autenticação completa** — Login com Google OAuth e email/senha, JWT em `httpOnly cookie`
- **Proteção de rotas** via `middleware.ts` do Next.js
- **Dashboard financeiro** com gráficos de evolução mensal e resumo de investimentos
- **Dark mode** nativo via Tailwind
- **100% responsivo** — experiência idêntica no desktop e no celular
- **SEO otimizado** com Open Graph para preview bonito ao compartilhar o link

---

## 🛠️ Stack Tecnológica

### Core
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Next.js | 14 (App Router) | Framework React com SSR e SSG |
| TypeScript | 5 | Tipagem estática em todo o projeto |
| React | 18 | Biblioteca base |

### Estilo & Animação
| Tecnologia | Uso |
|------------|-----|
| Tailwind CSS | Estilização utility-first — design system consistente |
| Framer Motion | Animações do onboarding e transições de página |
| Shadcn/ui | Componentes acessíveis (Radix UI + Tailwind) |
| Lucide React | Ícones |

### Estado & Dados
| Tecnologia | Uso |
|------------|-----|
| TanStack Query | Cache e sincronização de dados do servidor |
| Zustand | Estado global (sessionToken, usuário logado) |
| Axios | Cliente HTTP com interceptors para JWT automático |

### Formulários & Validação
| Tecnologia | Uso |
|------------|-----|
| React Hook Form | Formulários performáticos |
| Zod | Validação de schemas TypeScript-first |

### Gráficos & Dashboard
| Tecnologia | Uso |
|------------|-----|
| Recharts | Gráficos de evolução de investimentos |
| Tremor | Componentes de dashboard financeiro prontos |

### Deploy
| Tecnologia | Uso |
|------------|-----|
| Vercel | Deploy automático a cada push na `main` |
| Vercel Analytics | Métricas de acesso |

---

## 📁 Estrutura de Pastas

```
pe-de-meia-web/
├── app/                              # App Router (Next.js 14)
│   ├── (public)/                     # Rotas sem autenticação
│   │   ├── page.tsx                  # Landing + onboarding (input do salário)
│   │   ├── guia/
│   │   │   └── page.tsx              # Guia personalizado (resultado animado)
│   │   └── login/
│   │       └── page.tsx              # Login / Cadastro / Google OAuth
│   ├── (private)/                    # Rotas protegidas por JWT
│   │   ├── dashboard/
│   │   │   └── page.tsx              # Dashboard principal
│   │   ├── investimentos/
│   │   │   └── page.tsx              # Gestão de investimentos
│   │   └── perfil/
│   │       └── page.tsx              # Perfil e configurações
│   ├── layout.tsx                    # Layout raiz (fontes, providers)
│   └── globals.css                   # Estilos globais + Tailwind
│
├── components/
│   ├── onboarding/                   # Fluxo pré-login
│   │   ├── SalaryInput.tsx           # Input animado do salário
│   │   ├── LoadingGuide.tsx          # Animação "calculando seu plano"
│   │   └── GuideResult.tsx           # Exibição progressiva do guia
│   ├── dashboard/                    # Componentes do app logado
│   │   ├── BalanceCard.tsx
│   │   ├── EvolutionChart.tsx
│   │   └── InvestmentList.tsx
│   └── ui/                           # Componentes base (shadcn)
│
├── lib/
│   ├── api.ts                        # Instância Axios + interceptors JWT
│   ├── hooks/                        # Custom hooks
│   │   ├── useGuide.ts               # Busca e cache do GuideVO
│   │   └── useSession.ts             # Gerencia sessionToken anônimo
│   └── store/
│       ├── sessionStore.ts           # Zustand — sessão anônima
│       └── userStore.ts              # Zustand — usuário autenticado
│
├── types/                            # Tipos TypeScript (espelham VOs do backend)
│   ├── guide.ts                      # GuideVO, AllocationVO, SimulationVO...
│   └── auth.ts                       # TokenVO, UserProfileVO...
│
├── middleware.ts                     # Proteção de rotas privadas
├── next.config.ts
├── tailwind.config.ts
└── .env.example
```

---

## ⚡ Rodando Localmente

### Pré-requisitos

- Node.js 20+
- npm ou pnpm
- Backend rodando ([pe-de-meia-api](https://github.com/seuusuario/pe-de-meia-api))

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/pe-de-meia-web.git
cd pe-de-meia-web
```

### 2. Instale as dependências

```bash
npm install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite o `.env.local`:

```env
# URL do backend (local ou Render.com)
NEXT_PUBLIC_API_URL=http://localhost:8080

# Google OAuth (obtenha em console.cloud.google.com)
GOOGLE_CLIENT_ID=seu-client-id
GOOGLE_CLIENT_SECRET=seu-client-secret

# Next Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua-chave-secreta
```

### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000` 🚀

---

## 🔐 Autenticação

O fluxo de autenticação foi implementado com segurança em mente:

- **JWT armazenado em `httpOnly cookie`** — não acessível via JavaScript, protegido contra XSS
- **Refresh token automático** via interceptor do Axios
- **Middleware Next.js** redireciona rotas privadas para `/login` se não autenticado
- **Google OAuth** integrado via next-auth

```
Usuário faz login
      ↓
Backend retorna { accessToken, refreshToken }
      ↓
Next.js salva em httpOnly cookie (não no localStorage!)
      ↓
Axios interceptor injeta Bearer token em toda requisição
      ↓
Token expirado → interceptor chama /auth/refresh automaticamente
```

---

## 🌐 Telas e Rotas

| Rota | Acesso | Descrição |
|------|--------|-----------|
| `/` | Público | Landing page + input do salário (onboarding) |
| `/guia` | Público | Resultado animado do guia personalizado |
| `/login` | Público | Login e cadastro (email ou Google) |
| `/dashboard` | Privado 🔒 | Visão geral de investimentos e evolução |
| `/investimentos` | Privado 🔒 | Lista e gestão de investimentos |
| `/perfil` | Privado 🔒 | Dados pessoais e perfil de investidor |

---

## 🔄 CI/CD

```
Push na main
      ↓
Vercel detecta automaticamente
      ├── Build (next build)
      ├── Type check (tsc --noEmit)
      └── Deploy → pedemeia.vercel.app

Pull Request
      ↓
Vercel gera URL de preview único
      └── pedemeia-git-nome-da-branch.vercel.app
```

Cada PR tem sua própria URL de preview — facilitando revisão sem precisar rodar localmente.

---

## 📸 Screenshots

> *Em breve — projeto em desenvolvimento.*

---

## 📬 Contato

**Seu Nome** — [LinkedIn](https://linkedin.com/in/seuusuario) · [GitHub](https://github.com/seuusuario) · seuemail@email.com

<div align="center">

Feito com ⚡ Next.js e muito café.

</div>