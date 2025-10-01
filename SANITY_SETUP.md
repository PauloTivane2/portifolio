# 📋 INSTRUÇÕES PARA CONECTAR O SANITY CMS

## 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
```

### Como obter o Project ID:
1. Vá para [sanity.io/manage](https://sanity.io/manage)
2. Selecione seu projeto
3. Copie o "Project ID" (formato: abc123def456)
4. Cole no arquivo `.env.local`

## 2. Iniciar o Sanity Studio

```bash
# Na raiz do projeto
npx sanity start
```

O Sanity Studio estará disponível em: `http://localhost:3333`

## 3. Criar Conteúdo no Sanity

No Sanity Studio, você verá estas seções:

### 📝 **Documentos para Criar:**

1. **Profile** - Seus dados pessoais e métricas
2. **Services** - Serviços que oferece
3. **Projects** - Seus projetos (marque alguns como "Featured")
4. **Expertise** - Suas habilidades técnicas por categoria
5. **Contact** - Informações de contato
6. **Site Settings** - Configurações gerais e referências

## 4. Testar a Conexão

Acesse: `http://localhost:3000/sanity-example`

Esta página demonstra como buscar e exibir dados do Sanity.

## 5. Usar em Suas Páginas

```typescript
// Exemplo de uso em qualquer componente
import { getProfile, getFeaturedProjects } from '@/lib/sanity-utils'

export default async function HomePage() {
  const profile = await getProfile()
  const projects = await getFeaturedProjects()

  return (
    <div>
      <h1>{profile.name}</h1>
      {/* Use os dados... */}
    </div>
  )
}
```

## 6. Variáveis de Ambiente Necessárias

Certifique-se de que estas variáveis estão definidas:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Seu Project ID do Sanity
- `NEXT_PUBLIC_SANITY_DATASET` - Geralmente "production"

## 7. Comandos Úteis

```bash
# Iniciar Sanity Studio
npx sanity start

# Deploy do Sanity Studio (quando estiver pronto)
npx sanity deploy

# Ver logs
npx sanity debug

# Backup dos dados
npx sanity dataset export
```

## 8. Estrutura dos Dados

Cada schema retorna dados estruturados:

- **Profile**: Dados pessoais, métricas, botões de ação
- **Services**: Lista de serviços com descrições
- **Projects**: Projetos com imagens, links e tecnologias
- **Expertise**: Categorias de habilidades técnicas
- **Contact**: Métodos de contato e localização

## 🚀 Pronto!

Após configurar as variáveis de ambiente e criar conteúdo no Sanity Studio, seu portfólio estará conectado ao CMS e você poderá gerenciar todo o conteúdo através da interface web do Sanity!
