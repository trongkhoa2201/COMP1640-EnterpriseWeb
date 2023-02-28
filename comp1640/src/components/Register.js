import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import logo from '../assets/images/greenwich.png'

import '../style/register.css'
 
const Register = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // As explained in the Login page.
 const { emailPasswordRegister } = useContext(UserContext);
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 
 // As explained in the Login page.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 
 // As explained in the Login page.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }
 
 // As explained in the Login page.
 const onSubmit = async () => {
   try {
     const user = await emailPasswordRegister(form.email, form.password);
     if (user) {
       redirectNow();
     }
   } catch (error) {
     alert(error);
   }
 };
 
 return <div>
        <div className='logo'>
            <img src={logo} alt="logo"></img>
        </div>
        <form className="input-form">
        <h1>Register</h1>
        <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={form.email}
            onInput={onFormInputChange}
            style={{ marginBottom: "1rem" }}
        />
        <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={form.password}
            onInput={onFormInputChange}
            style={{ marginBottom: "1rem" }}
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
            Register
        </Button>
        <p>Have an account already? <Link to="/login">Login</Link></p>
        </form>
 </div>
}
 
export default Register;