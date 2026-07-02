# Real Center — Site Institucional (Next.js)

Site institucional **premium** da **Real Center Materiais de Construção e Acabamentos**.
Desenvolvido em **Next.js (App Router) com React**, configurado para **export estático**
(`output: 'export'`) — gera HTML puro, com ótima performance e hospedagem direta no
**GitHub Pages** ou em qualquer servidor estático.

---

## 🚀 Como rodar

```bash
npm install        # instala as dependências (1ª vez)
npm run dev        # ambiente de desenvolvimento → http://localhost:3000
npm run build      # gera o site estático na pasta /out
npm run lint       # checa qualidade do código
```

> Após o `build`, a pasta **`/out`** contém o site pronto para publicar.
> Para visualizar o build localmente: `npx serve out` ou
> `python -m http.server 8080 -d out`.

---

## 📁 Estrutura do projeto

```
landing-page-real-center/
├── app/
│   ├── layout.jsx        # Layout raiz: <html>, SEO (Metadata API), fontes, JSON-LD
│   ├── page.jsx          # Página inicial (compõe as seções)
│   └── globals.css       # Estilos globais (design tokens no topo)
├── components/
│   ├── Header.jsx        # Cabeçalho + menu (client component)
│   ├── Hero.jsx          # Banner principal
│   ├── About.jsx         # Sobre a empresa
│   ├── Values.jsx        # Missão, Visão e Valores
│   ├── Differentials.jsx # Diferenciais
│   ├── Products.jsx       # Categorias de produtos
│   ├── Showroom.jsx      # Galeria / ambientes
│   ├── CtaBand.jsx       # Faixa de chamada para ação
│   ├── Contact.jsx       # Contato + formulário + mapa
│   ├── Footer.jsx        # Rodapé completo
│   ├── WhatsappFloat.jsx # Botão flutuante do WhatsApp
│   └── SiteScripts.jsx   # Animações (reveal + contadores) — client component
├── public/
│   ├── assets/img/       # Imagens (logo, fotos, og-image, ícones)
│   ├── robots.txt        # Diretrizes para robôs de busca
│   ├── sitemap.xml       # Mapa do site
│   ├── site.webmanifest  # Manifesto PWA
│   └── .nojekyll         # Evita que o GitHub Pages ignore a pasta _next
├── next.config.mjs       # Configuração (export estático, basePath)
├── jsconfig.json         # Alias de importação "@/"
└── package.json
```

---

## 🎨 Como trocar as CORES da marca

Todas as cores estão centralizadas em **variáveis CSS** no topo de
[`app/globals.css`](app/globals.css), no bloco `:root`. Edite os valores — o site
inteiro se atualiza:

```css
:root {
  --color-ink:      #262422;  /* texto (grafite)             */
  --color-accent:   #bf5a3e;  /* DESTAQUE (terracota da logo)*/
  --color-accent-2: #a4482f;  /* destaque hover              */
  --color-cream:    #f7f5f2;  /* off-white                   */
  /* ... */
}
```

---

## ✏️ Conteúdo a substituir (placeholders)

Procure pelo marcador **`TROCAR`** no código. Principais pontos:

| Onde | O que trocar |
|------|--------------|
| `app/layout.jsx` | Meta title/description, domínio, Schema (endereço, telefone, geo, horários, redes) |
| `components/Contact.jsx` | Endereço, telefone/WhatsApp, e-mail, horário, mapa do Google |
| `components/Footer.jsx` | Dados de contato, CNPJ, redes sociais |
| `components/WhatsappFloat.jsx` | Número do WhatsApp |
| `app/globals.css` (`.hero__visual-img`, `.about__img--1`) | Trocar gradientes por fotos reais |
| `public/robots.txt` / `public/sitemap.xml` | Domínio final |
| `public/assets/img/og-image.jpg` | Imagem 1200×630 para redes sociais |

### Imagens a adicionar em `public/assets/img/`
- `og-image.jpg` — 1200×630 px (compartilhamento social)
- `apple-touch-icon.png` — 180×180 px
- `icon-192.png` / `icon-512.png` — ícones PWA
- Fotos reais da loja, fachada e ambientes (exportar em **WebP**, otimizadas)

---

## 🔎 SEO técnico já implementado

- ✅ Headings hierárquicos (um único `H1`, `H2`/`H3`)
- ✅ Meta Title/Description via **Metadata API** do Next
- ✅ Open Graph + Twitter Cards
- ✅ Schema Markup `LocalBusiness`/`HardwareStore` (JSON-LD)
- ✅ `sitemap.xml`, `robots.txt`, `canonical`, `lang="pt-BR"`
- ✅ Fontes auto-hospedadas via `next/font` (sem render-blocking)
- ✅ HTML semântico e acessível (landmarks, `aria-*`, skip-link)

### Após publicar — checklist de indexação
1. Publique o conteúdo da pasta `/out`.
2. Adicione a propriedade no **[Google Search Console](https://search.google.com/search-console)**.
3. Envie o `sitemap.xml` e use "Inspeção de URL" → "Solicitar indexação".
4. Configure o **Google Analytics 4** (ver abaixo).
5. Crie/valide o **Google Meu Negócio** (essencial para SEO local).

### Google Analytics 4
Adicione no `app/layout.jsx`, dentro de `<body>`, usando o componente `next/script`:
```jsx
import Script from "next/script";
// ...
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
<Script id="ga4" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
`}</Script>
```

### Google Search Console
Adicione no objeto `metadata` do `app/layout.jsx`:
```js
verification: { google: "SEU_CODIGO" },
```

---

## 🌐 Publicação no GitHub Pages

1. Envie o projeto para um repositório no GitHub.
2. **Repositório de projeto** (`usuario.github.io/real-center`): faça o build com o caminho base:
   ```bash
   BASE_PATH=/real-center npm run build
   ```
   **Domínio próprio** ou `usuario.github.io`: apenas `npm run build` (sem `BASE_PATH`).
3. Publique o conteúdo da pasta `/out`. Opções:
   - **GitHub Actions** (recomendado) com o workflow oficial de deploy do Pages, ou
   - Branch `gh-pages` apontando para os arquivos de `/out`.
4. O arquivo `.nojekyll` (já incluído) garante que a pasta `_next` seja servida.

> Ao usar domínio próprio, atualize as URLs absolutas em `app/layout.jsx`
> (`metadataBase`), `public/sitemap.xml` e `public/robots.txt`, e adicione um arquivo `CNAME` em `public/`.

---

## ⚡ Performance

- Export 100% estático (sem servidor) — carregamento muito rápido.
- Fontes otimizadas e auto-hospedadas via `next/font`.
- JS mínimo; animações respeitam `prefers-reduced-motion`.
- Imagens devem ser exportadas em **WebP/AVIF** com dimensões definidas.

---

© Real Center Materiais de Construção e Acabamentos.
