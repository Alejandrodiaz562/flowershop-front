import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import MainLayout from "./components/layout/MainLayout";

import MainContent from './components/layout/MainContent'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<MainContent/>}></Route>
        </Route>
      </Routes>
    </Router>

  )
}

export default App
