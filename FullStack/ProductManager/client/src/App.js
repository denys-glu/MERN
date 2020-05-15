import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App container">
        <Router>
            <ProductForm path="/products/add-product" />
            <ProductDetail path="/products/detail/:id" />
        </Router>
    </div>
  );
}

export default App;
