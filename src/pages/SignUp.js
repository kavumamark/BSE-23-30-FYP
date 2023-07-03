import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useNavigate, Redirect } from 'react-router-dom';



const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedUp, setSignedUp] = useState(false);
  
    const handleSignUp = (e) => {
      e.preventDefault();
      // Perform sign-up logic here, e.g., send data to backend API
      setSignedUp(true);
    };
  
    if (signedUp) {
      return <navigate to="/login" />;
    }
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
        <Button
                    label="Sign In"
                    onClick={() => {
                        navigate('/Login');
                    }}
                />
      </div>
    );
  };
  export default SignUp;