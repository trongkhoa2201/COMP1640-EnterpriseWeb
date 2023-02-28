import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./routers/Routers";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </UserProvider>
  </BrowserRouter>
  );
}

export default App;
