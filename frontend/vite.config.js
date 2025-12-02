import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
    outDir: 'src/dist'  // Builds to frontend/src/ instead of frontend/dist/
  },
	server: {
		port: "https://insta-chat-frontend.onrender.com",
		proxy: {
			"/api": {
				target: "https://insta-chat-backend.onrender.com",
			},
		},
	},
});
