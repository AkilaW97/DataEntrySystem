import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    try {
      const response = await axios.post('http://localhost:8080/api/users', {
        name,
        email,
      });
      setMessage(`User created with ID: ${response.data.id}`);
      setName(''); //clear the name field
      setEmail(''); //clear the email field 
    } catch (error) {
      if(error.response){
        // The request was made, but the server responded with an error
        setMessage(`Error: ${error.response.data.message || 'Something went wrong'}`);
      }else if(error.request){
        // The request was made, but no response was received
        setMessage('Error: No response from the server');
      }else{
        // Something else happened
        setMessage('Error: Something went wrong');

      }
    
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Data Entry System</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserForm;