import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Wishlist from './components/Wishlist';
import { ThemeProvider } from './ThemeContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} >
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="Wishlist" element={<Wishlist />} />
              <Route path="product-detail" element={<ProductDetail />} >
                <Route path=":id" element={<ProductDetail />} />
              </Route>
            </Route>
            <Route path="*" element={<div>Route Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
)
