import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "./providers/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReduxProvider store={store}>
        <AppRoutes />
      </ReduxProvider>
    </ThemeProvider>
  </BrowserRouter>
);
