// main.tsx
import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.tsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
