import "bootstrap/dist/css/bootstrap.min.css";
import CRUD from "./Page/CRUD";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/home' element={<CRUD />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
