import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import MainLayout from "./components/MainLoyaout";
import PreviewCategories from "./components/mainLoyaoutComponents/PreviewCategories";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<PreviewCategories/>}></Route>
        </Route>
      </Routes>
    </Router>

  )
}

export default App
