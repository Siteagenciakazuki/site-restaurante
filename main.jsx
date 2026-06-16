/* ZEN SUSHI — entry do Vite.
   Ordem importa: estilos → globais (React/ReactDOM/Lenis) → design system →
   dados/SEO → app (monta em #root) → rolagem suave. */

// Estilos globais (ds-styles.css já importa os tokens de cor/tipografia/etc.)
import "./styles/ds-styles.css";
import "./styles/site.css";

// React/ReactDOM/Lenis no window (precisa vir antes do DS e do app)
import "./lib/globals.js";

// Design system (define window.KAZUKIDesignSystem_63706c)
import "./lib/ds_bundle.js";

// Conteúdo + engine de SEO + slots de imagem arrastáveis
import "./app/data.js";
import "./app/seo.js";
import "./app/image-slot.js";

// App: componentes, páginas e router (faz ReactDOM.createRoot em #root)
import "./app/zen-app.jsx";

// Rolagem suave (desktop) / nativa (mobile) — depois do mount
import "./app/smooth-scroll.js";
