import React, { useState } from 'react'

const Register = () => {
  
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
  
    return (
    <>
    <div className="alt-Register">
      </div>
      <h1 className="text-Register">Create new Account</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="Email" placeholder='Email'></input>
      <select>
        <option>select a role</option>
        <option>role</option>
        <option>role</option>
        <option>role</option>
      </select>

      <div className='register-btn'>Register</div>
    </>
  )
}

export default Register