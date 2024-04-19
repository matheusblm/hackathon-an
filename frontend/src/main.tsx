// main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./Pages/Home";
import CadastroForm from "./components/CadastroForm";
import LoginForm from "./components/LoginForm";
import Root from "./routes/root";
import RankingPage from "./Pages/Ranking";
import ArchivesPage from "./Pages/Archive";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Root>
          <Routes>
            <Route path="/cadastro" element={<CadastroForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/acervos" element={<ArchivesPage />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Root>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
