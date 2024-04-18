import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default defineConfig({
    plugins: [react()],
});
