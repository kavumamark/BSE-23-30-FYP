import './styles.css';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import React, { useState } from 'react';

export const Login = () => {
  const handleSignUp = () => {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  };

  const handleSignIn = () => {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  };

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    // Initialize form fields with default values
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    // Add more fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make API request with formData
    fetch('http://localhost:8000/auth/register/', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow'
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log(data);
        const access_token = data.access_token
        // Store the access token in localStorage
        localStorage.setItem('access_token', access_token);
        // Perform any additional actions based on the response
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };


  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Retrieve the access token from localStorage
    const storedAccessToken = localStorage.getItem('access_token');

    // Make API request with formData
    fetch('http://localhost:8000/auth/login/', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${storedAccessToken}` // Attach the access token as a Bearer token
      },
      redirect: 'follow'
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log(data);
        // Perform any additional actions based on the response
        const access_token = data.access_token
        // Store the access token in localStorage
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('authenticated', true);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/Detect'
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };

  return (
    <div className='body'>
    <div className="container" id="container">
       <div class="form-container sign-up-container">
            
       <form onSubmit={handleSubmit} method='POST'>
        
        
       <h1>Sign Up</h1>
                <div className="social-container">
                
                <a href="#" className='a'>
                        <i class="fab fa-google"></i>
                    </a>
              
                </div>
              
                <div className='span'>Register your account</div>
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        className='input'
        onChange={handleInputChange}
        placeholder="first_name"
      />
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        className='input'
        onChange={handleInputChange}
        placeholder="last_name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        className='input'
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        className='input'
        onChange={handleInputChange}
        placeholder="password"
      />
      
      <button type="submit">Submit</button>
    </form>

        </div>

        <div className="form-container sign-in-container">
            
            
       <form onSubmit={handleLoginSubmit} method='POST'>
        
       <h1>Sign In</h1>
                <div className="social-container">
                
                <a href="#" className='a'>
                        <i class="fab fa-google"></i>
                    </a>
              
                </div>
              
                <span className='span'>Login to your account</span>
      <input
        type="email"
        name="email"
        value={formData.email}
        className='input'
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        className='input'
        onChange={handleInputChange}
        placeholder="password"
      />
      {/* Add more form fields as needed */}
      <button type="submit">Submit</button>
    </form>

        </div> 

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Have an Account Already?</h1>
            <p>Login to connect to the GDS system to carry out your test.</p>
            <button className="ghost" id="signIn" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Create Your Account</h1>
            <p>Enter your personal details and start on the detection journey with us.</p>
            <button className="ghost" id="signUp" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

