import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { UserAccountProvider } from "./components/contexts/UserAccount.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <UserAccountProvider>
                <App />
            </UserAccountProvider>
        </BrowserRouter>
    </StrictMode>
);
