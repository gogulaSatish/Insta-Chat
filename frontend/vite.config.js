import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: "https://insta-chat-frontend.onrender.com",
		proxy: {
			"/api": {
				target: "https://insta-chat-backend.onrender.com",
			},
		},
	},
});
