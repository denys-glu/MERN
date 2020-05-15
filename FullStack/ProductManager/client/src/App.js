import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <div className="App container">
        <Router>
            <ProductForm path="/" />
            <ProductDetail path="/products/detail/:id" />
        <ProductEdit path="/products/edit/:id" />
        </Router>
    </div>
  );
}

export default App;
