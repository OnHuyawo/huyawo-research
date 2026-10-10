# Huyawo Research — Static site (design preview)

Site estático para **research.huyawo.com**, adaptado diretamente do Huyawo Blog com a mesma identidade visual.

## Estrutura

- `index.html` — homepage em **uma única coluna**, com cartões horizontais no desktop e empilhados no mobile.
- `posts/<slug>/index.html` — seis páginas completas de leitura, com o layout de artigo original preservado (somente a marca mudou para Research).
- `assets/site.css` — estilos originais do Blog + regras adicionais limitadas à homepage Research.
- `assets/site.js` — menu mobile e compartilhamento original.
- `assets/cover-*.svg` — seis capas geométricas de demonstração, com o nome Huyawo Research.
- `CNAME` — domínio `research.huyawo.com`.
- `.nojekyll`, `404.html`, `robots.txt` e `sitemap.xml` — integração com GitHub Pages.

## Conteúdo de exemplo

**Todos os títulos, resumos e textos das seis publicações são Lorem Ipsum**, apenas placeholders de interface, e não pesquisas reais. As páginas preservam `noindex,follow` para evitar indexação prematura. Retirar `noindex` quando houver publicações aprovadas.

## Publicação

1. Crie `OnHuyawo/huyawo-research` como repositório público, se ainda não existir.
2. Publique o conteúdo deste ZIP diretamente na raiz da branch `main` (não uma pasta interna).
3. Em `Settings → Pages`, selecione `Deploy from a branch`, `main`, `/ (root)`.
4. Configure o domínio `research.huyawo.com` em `Settings → Pages`.
5. No painel DNS do domínio, adicione `CNAME research → onhuyawo.github.io` (sem alterar os demais registros).
6. Após propagação e emissão do certificado, ative `Enforce HTTPS`.

Não há build, dependências npm ou backend. Os links dos cards abrem diretamente os `index.html` de cada artigo, funcionando também ao testar arquivos localmente.

## Edição futura

- Edite os cards em `index.html` e o conteúdo de cada artigo em `posts/<slug>/index.html`.
- Atualize `sitemap.xml` ao criar/remover publicações.
- Para ajustar somente a homepage Research, edite os estilos `.research-home` no fim de `assets/site.css`.
- As páginas de leitura mantêm a composição editorial e o sistema visual originais.
