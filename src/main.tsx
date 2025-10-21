import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ReduxProvider store={store}>
      <AppRoutes />
    </ReduxProvider>
  </BrowserRouter>
);
