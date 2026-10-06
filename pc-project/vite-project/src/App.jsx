import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { CatalogPage } from './pages/CatalogPage'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
