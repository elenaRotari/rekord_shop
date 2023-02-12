import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main.jsx";
import Products from "./components/products/Products.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="api/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
