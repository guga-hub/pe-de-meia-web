# Guia Rápido - Pé de Meia Frontend

## 🎯 Início Rápido

### 1. **Clonar e Instalar**
```bash
cd pe-de-meia-web
npm install
```

### 2. **Configurar Variáveis de Ambiente**
```bash
cp .env.example .env.local
```

Editar `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
NEXTAUTH_SECRET=dev-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### 3. **Executar em Desenvolvimento**
```bash
npm run dev
```

Abra http://localhost:3000 no navegador.

---

## 📂 Estrutura Principal

```
app/
├── (public)/           # Rotas públicas (sem autenticação)
│   ├── page.tsx        # Home
│   ├── login/          # Login
│   └── onboarding/     # Fluxo pré-login
├── (private)/          # Rotas protegidas (com autenticação)
│   └── dashboard/      # Dashboard logado
├── layout.tsx          # Root layout
├── globals.css         # Estilos globais
└── providers.tsx       # QueryClient + Zustand

components/
├── ui/                 # Componentes base (Button, Input, etc)
├── onboarding/         # Componentes do onboarding
├── dashboard/          # Componentes do dashboard
└── Layout.tsx          # Container, PageHeader, Card

lib/
├── api.ts              # Axios com interceptors JWT
├── hooks/
│   ├── useAuth.ts      # Login, Register, Logout
│   └── useOnboarding.ts # Fluxo de onboarding
└── store/
    ├── authStore.ts    # Estado de autenticação
    └── onboardingStore.ts # Estado do onboarding

types/
├── auth.ts             # TokenVO, UserProfileVO, etc
├── onboarding.ts       # GuideVO, AllocationVO, etc
├── transaction.ts      # TransactionVO, AccountVO, etc
└── index.ts            # Exports centralizados
```

---

## 🔑 Fluxos Principais

### **Autenticação (useAuth.ts)**

```tsx
// Login
const { mutate: login } = useLogin()

login(
  { email: 'user@test.com', password: '123456' },
  {
    onSuccess: () => router.push('/dashboard'),
  }
)

// Register
const { mutate: register } = useRegister()

register({
  name: 'João',
  email: 'joao@test.com',
  password: '123456',
  sessionToken: onboardingSessionToken,
})

// Logout
const { mutate: logout } = useLogout()
logout()
```

### **Onboarding (useOnboarding.ts)**

```tsx
// Iniciar onboarding
const { mutate: startOnboarding } = useStartOnboarding()

startOnboarding({ salary: 5000 })

// Recuperar sessão
const { data: session } = useOnboardingSession(sessionToken)
```

### **Estado Global (Zustand)**

```tsx
// Auth Store
const { user, setAuth, logout } = useAuthStore()

// Onboarding Store  
const { sessionToken, guide, setSessionToken } = useOnboardingStore()
```

---

## 🎨 Componentes UI

### **Button**
```tsx
<Button>Click me</Button>
<Button variant="outline">Outline</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>
```

### **Card**
```tsx
<Card>
  <h3>Título</h3>
  <p>Conteúdo</p>
</Card>

<Card hover className="p-4">
  Hover card
</Card>
```

### **Container & PageHeader**
```tsx
<Container>
  <PageHeader 
    title="Dashboard"
    subtitle="Bem-vindo"
    action={<Button>Novo</Button>}
  />
</Container>
```

---

## 🚀 Deploy na Vercel

### **Passo 1: GitHub**
```bash
git add .
git commit -m "feat: initial setup"
git push origin main
```

### **Passo 2: Vercel**
1. Acesse https://vercel.com/new
2. Importar repositório GitHub
3. Definir variáveis de ambiente:
   - `NEXT_PUBLIC_API_URL` = sua API em produção
   - `NEXTAUTH_SECRET` = gerar com: `openssl rand -base64 32`
   - `NEXTAUTH_URL` = https://seu-dominio.vercel.app

### **Passo 3: Deploy**
Vercel automaticamente detecta, constrói e faz deploy a cada push!

---

## 📝 Adicionando Novas Páginas

### **1. Criar arquivo em app/**
```tsx
// app/(private)/investimentos/page.tsx
'use client'

import { PageHeader, Container } from '@/components/Layout'

export default function InvestmentsPage() {
  return (
    <Container>
      <PageHeader title="Investimentos" />
      <p>Conteúdo aqui</p>
    </Container>
  )
}
```

### **2. Criar hook customizado**
```tsx
// lib/hooks/useInvestments.ts
export function useInvestments() {
  return useQuery({
    queryKey: ['investments'],
    queryFn: () => api.get('/investments'),
  })
}
```

### **3. Usar na página**
```tsx
const { data, isLoading } = useInvestments()
```

---

## 🔒 Proteção de Rotas

### **Middleware.ts (Automático)**
- Rotas em `app/(public)/` → sem autenticação
- Rotas em `app/(private)/` → com autenticação obrigatória
- Redireciona automaticamente para `/login` se sem token

### **Componente ProtectedRoute**
```tsx
import { ProtectedRoute } from '@/components/ProtectedRoute'

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>Conteúdo protegido</div>
    </ProtectedRoute>
  )
}
```

---

## 🛠️ Comandos Úteis

```bash
# Dev
npm run dev

# Build produção
npm run build

# Prod local
npm start

# Lint
npm run lint

# Format com Prettier
npm run format

# Instalar pacote
npm install package-name

# Atualizar pacotes
npm update
```

---

## 📊 API Integration Example

```tsx
// Exemplo: Listar transações
import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { TransactionVO } from '@/types'

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const { data } = await api.get<TransactionVO[]>('/transactions')
      return data
    },
  })
}

// Usar no componente
function TransactionsList() {
  const { data, isLoading, error } = useTransactions()

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro: {error.message}</div>

  return (
    <ul>
      {data?.map((t) => (
        <li key={t.id}>{t.description} - R$ {t.amount}</li>
      ))}
    </ul>
  )
}
```

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| 401 Unauthorized | Limpar localStorage e fazer login novamente |
| CORS Error | Verificar CORS no backend |
| Build falha | Executar `npm run lint` para verificar erros |
| Página em branco | Verificar console do browser (F12) |

---

## 📞 Próximos Passos

1. **Criar componentes do Dashboard** (Saldo, Gráficos, etc)
2. **Integrar Recharts** para visualizações
3. **Implementar formulários** com React Hook Form
4. **Adicionar testes** com Jest
5. **Otimizar imagens** e performance

---

Bom desenvolvimento! 🎉
