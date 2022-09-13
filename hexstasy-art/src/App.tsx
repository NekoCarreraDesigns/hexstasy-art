import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./pages/Store";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className='mb-5'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/store' element={<Store />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
