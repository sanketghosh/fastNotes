import App from "@/App.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import "@/index.css";
import { AuthContextProvider } from "@/providers/auth-provider";
import { ThemeProvider } from "@/providers/theme-provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthContextProvider>
  </StrictMode>,
);
