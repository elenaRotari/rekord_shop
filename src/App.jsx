import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main.jsx";
import Page404 from "./components/products/Page404.jsx";
import Products from "./components/products/Products.jsx";
import SignUp from "./components/products/SignUp.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Products />} />
          <Route path="/login" element={<SignUp />} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
