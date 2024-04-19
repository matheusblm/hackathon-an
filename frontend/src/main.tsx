// main.tsx
import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './routes/root';
import CadastroForm from './components/CadastroForm';
import LoginForm from './components/LoginForm';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Root>
          <Routes>
            <Route path="/cadastro" element={<CadastroForm />} />
            <Route exact path="/" element={<LoginForm />} />
          </Routes>
        </Root>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

