import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import MainLayout from "./components/layout/MainLayout";
import ShowAllProducts from "./pages/ShowAllProducts";
import MainContent from './components/layout/MainContent'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          
          <Route 
            path="/" 
            element={<MainContent/>}></Route>
          
          <Route 
            path="/categorias/:slug" 
            element={<ShowAllProducts 
            type="categorias" />} />
          <Route 
            path="/ocasiones/:slug" 
            element={<ShowAllProducts 
            type="ocasiones" />} />
          <Route 
            path="/anchetas" 
            element={<ShowAllProducts 
            type="anchetas" />} />
          <Route 
            path="/flores/:slug" 
            element={<ShowAllProducts 
            type="flores" />} />
          <Route 
            path="/condolencias" 
            element={<ShowAllProducts 
            type="condolencias" />} />
            
        </Route>
      </Routes>
    </Router>

  )
}

export default App
