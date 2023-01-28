import Main from "./pages/Main";
import { Navigate, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<ProductDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
