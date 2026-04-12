import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
