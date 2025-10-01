# Sanity CMS Schemas - Paulo Tivane Portfolio

Este diretório contém os schemas do Sanity CMS para gerenciar o conteúdo do portfólio profissional.

## 📁 Estrutura dos Schemas

### 1. Profile (`profile.js`)
Gerencia informações pessoais e profissionais:
- **Campos**: Nome, título profissional, foto, biografia, botões de ação, métricas
- **Uso**: Página "Sobre Mim"

### 2. Services (`services.js`)
Define serviços oferecidos:
- **Campos**: Título da seção, descrição geral, lista de serviços com nome e descrição
- **Uso**: Página "O Que Eu Faço"

### 3. Projects (`projects.js`)
Portfólio de projetos:
- **Campos**: Nome, descrição, imagem, links para demo/código, tecnologias utilizadas
- **Uso**: Página "Projetos em Destaque"

### 4. Expertise (`expertise.js`)
Competências técnicas organizadas por categoria:
- **Campos**: Categoria, tecnologias com nível de proficiência e experiência
- **Uso**: Página "Expertise Técnica"

### 5. Contact (`contact.js`)
Informações de contato:
- **Campos**: Lista de métodos de contato, localização
- **Uso**: Página "Contato"

### 6. Site Settings (`siteSettings.js`)
Configurações gerais do site:
- **Campos**: SEO, referências para todas as seções, tema, redes sociais

## 🚀 Como Usar

### 1. Instalação do Sanity
```bash
npm install -g @sanity/cli
sanity init
```

### 2. Configuração
1. Configure seu `projectId` e `dataset` no arquivo `sanity.config.js`
2. Execute `sanity start` para iniciar o Sanity Studio
3. Acesse `http://localhost:3333` para gerenciar o conteúdo

### 3. Integração com Next.js
Para conectar com seu portfólio Next.js, você precisará:
1. Instalar o Sanity client: `npm install @sanity/client`
2. Configurar as queries GROQ para buscar dados
3. Criar páginas dinâmicas baseadas no conteúdo do CMS

## 📊 Características dos Schemas

### ✅ Flexibilidade
- Arrays expansíveis para serviços, projetos e tecnologias
- Campos opcionais onde apropriado
- Estrutura preparada para escalabilidade futura

### ✅ Validações
- Campos obrigatórios marcados com `validation: Rule => Rule.required()`
- Tipos de dados adequados (string, text, image, url, number)

### ✅ Preview
- Visualizações no Sanity Studio para facilitar identificação
- Informações contextuais nos previews

### ✅ Organização
- Ordenação personalizada para categorias e projetos
- Referências cruzadas entre documentos
- Estrutura hierárquica clara

## 🔧 Personalização

Para modificar os schemas:
1. Edite os arquivos `.js` correspondentes
2. Reinicie o Sanity Studio: `sanity start`
3. As mudanças aparecerão automaticamente

## 📝 Campos em Inglês

Todos os campos seguem a convenção em inglês conforme solicitado:
- `name`, `title`, `description`, `image`, `url`
- Arrays nomeados como plurais: `services`, `projects`, `technologies`

## 🎯 Próximos Passos

1. **Queries GROQ**: Criar consultas para buscar dados do Sanity
2. **Páginas Dinâmicas**: Implementar páginas que usam o conteúdo do CMS
3. **Deploy**: Configurar deploy do Sanity Studio para produção
4. **Webhooks**: Configurar atualizações automáticas quando o conteúdo muda
