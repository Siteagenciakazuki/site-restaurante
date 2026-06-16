# ZEN SUSHI — Vite + React (pronto para o Lovable)

Versão do site institucional do ZEN SUSHI (Cotia/SP) convertida para um projeto
**Vite + React**, importável e editável no **Lovable** (ou em qualquer ambiente
Node). Mesma identidade visual, SEO e páginas do template original.

## Rodar localmente

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # build de produção em dist/
npm run preview  # serve o build de produção
```

## Como importar no Lovable

1. Suba este projeto para um repositório no GitHub.
2. No Lovable, use **GitHub → Import / Connect repository** e selecione o repo.
3. O Lovable detecta o Vite + React e roda `npm install` + `npm run dev`.

## Estrutura

- `index.html` — HTML raiz (meta SEO + GA) e ponto de montagem `#root`.
- `src/main.jsx` — entry: carrega estilos → globais → design system → dados/SEO → app.
- `src/lib/globals.js` — expõe React/ReactDOM/Lenis no `window` (o código usa esses globais).
- `src/lib/ds_bundle.js` — design system (componentes Crest, Button, Card, etc.).
- `src/app/zen-app.jsx` — componentes + páginas + router (Home, Cardápio, Reservas, Delivery, Localização, Blog, Admin).
- `src/app/data.js` — **conteúdo do restaurante** (nome, endereço, telefone, cardápio, blog). Edite aqui para personalizar.
- `src/app/seo.js` — títulos/metas/schema por rota. Troque `ORIGIN` e o GA4 (`G-KAZUKICOTIA`).
- `src/styles/` — tokens de design + estilos do site (`site.css`).
- `public/assets/` — logos e imagens da marca.

## Personalizar para um cliente

- Dados do negócio e cardápio: `src/app/data.js`.
- SEO/domínio/Analytics: `src/app/seo.js` e `index.html`.
- Logos/imagens: `public/assets/`.

> Observação: os componentes e páginas estão reunidos em `src/app/zen-app.jsx`
> para preservar 100% o comportamento do site original. Dá para dividir em
> arquivos menores depois, se quiser, sem mudar a aparência.
