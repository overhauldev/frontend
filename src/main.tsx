// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./AppRouter";
import "./index.css"; // Tailwind styles

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);
