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
    } catch (error) {
      setMessage('Error creating user');
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