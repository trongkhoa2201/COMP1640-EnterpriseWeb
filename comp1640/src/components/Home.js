import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
 
export default function Home() {
 const { logOutUser } = useContext(UserContext);
 

 const logOut = async () => {
   try {
     const loggedOut = await logOutUser();
     if (loggedOut) {
       window.location.reload(true);
     }
   } catch (error) {
     alert(error)
   }
 }
 
 return (
   <>
     <h1>Welcome to Expengo</h1>
     <Button variant="contained" onClick={logOut}>Logout</Button>
   </>
 )
}