import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RecipeId from "./pages/RecipeId";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import NaviBar from "./components/NavigationBar/NaviBar";

function App() {
  return (
    <BrowserRouter>
    <NaviBar/>
        <Routes>
          <Route path="/recipeId" element={<RecipeId/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="*" element={<Navigate to="recipes" />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
