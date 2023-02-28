import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import logo from '../assets/images/greenwich.png'

import '../style/login.css'
import { red } from "@mui/material/colors";
 
const Login = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);
 
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 

 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 

 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }
 
 
 const loadUser = async () => {
   if (!user) {
     const fetchedUser = await fetchUser();
     if (fetchedUser) {
       redirectNow();
     }
   }
 }
 
 useEffect(() => {
   loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 
 const onSubmit = async (event) => {
   try {
     const user = await emailPasswordLogin(form.email, form.password);
     if (user) {
       redirectNow();
     }
   } catch (error) {
       if (error.statusCode === 401) {
          alert("Invalid username/password. Try again!");
      } else {
          alert(error);
      }
 
   }
 };
 
 return (
  <div className="cover">
      <div className='logo'>
          <img src={logo} alt="logo"></img>
      </div>
      <form className="input-form">
          <h1>Login</h1>
          <TextField
            className="input-box"
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={form.email}
            onChange={onFormInputChange}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            className="input-box"
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={form.password}
            onChange={onFormInputChange}
            style={{ marginBottom: "1rem" }}
          />
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Login
          </Button>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
  </div>
 )
}
 
export default Login;