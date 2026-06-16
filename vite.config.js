import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// JSX no modo "classic" (React.createElement) — o código original usa o React
// global (definido em src/lib/globals.js), sem import em cada arquivo.
export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" })],
});
