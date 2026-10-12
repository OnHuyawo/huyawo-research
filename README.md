# Huyawo Research — Static site (research.huyawo.com)

Site estático para **research.huyawo.com**, com a mesma identidade visual do Huyawo Blog.

## Estrutura

- `index.html` — homepage em **uma única coluna**, com cartões horizontais no desktop e empilhados no mobile.
- `posts/<slug>/index.html` — páginas completas de leitura dos artigos, com o layout editorial preservado.
- `assets/site.css` — estilos da marca.
- `assets/site.js` — menu mobile e compartilhamento.
- `CNAME` — domínio `research.huyawo.com`.
- `.nojekyll`, `404.html`, `robots.txt` e `sitemap.xml` — integração com GitHub Pages.
- `llms.txt` / `llms-full.txt` — descoberta por chatbots de IA (GEO) via o padrão llms.txt.
- `robots.txt` — `index,follow` habilitado para os artigos reais.

## SEO / GEO

Cada artigo inclui, no `<head>` (invisível na interface):

- `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="author">`.
- `<link rel="canonical">` e `<meta name="robots" content="index,follow">`.
- Open Graph (`og:*`) e Twitter Card para compartilhamento social.
- JSON-LD (`BlogPosting`) com `headline`, `keywords`, `datePublished`, autor e imagem.

A homepage expõe JSON-LD `WebSite` e o vínculo para `llms.txt`, e o `sitemap.xml` lista todas as URLs publicadas.

## Publicação

1. Confirme o repositório `OnHuyawo/huyawo-research` como público.
2. Conteúdo deste diretório na raiz da branch `main` (não uma pasta interna).
3. Em `Settings → Pages`: `Deploy from a branch`, `main`, `/ (root)`.
4. Configure o domínio `research.huyawo.com` em `Settings → Pages`.
5. No painel DNS, adicione `CNAME research → onhuyawo.github.io`.
6. Após emissão do certificado, ative `Enforce HTTPS`.

Não há build nem dependências. Ao criar/remover publicações, atualize `index.html`, `sitemap.xml` e `llms.txt`.