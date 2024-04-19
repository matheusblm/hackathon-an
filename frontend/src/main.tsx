// main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./Pages/Home";
import CadastroForm from "./components/CadastroForm";
import LoginForm from "./components/LoginForm";
import Root from "./routes/root";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Root>
          <Routes>
            <Route path="/cadastro" element={<CadastroForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Root>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
