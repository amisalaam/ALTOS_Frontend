import React from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/authContext/AuthProvider';

function Home() {
  const { authTokens } = useAuth();

  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      {authTokens && authTokens.user ? (
        <div>
          {/* Render user properties individually */}
          <p><strong>Email:</strong> {authTokens.user.email}</p>
          <p><strong>Name:</strong> {authTokens.user.name}</p>
          <p><strong>Is Superuser:</strong> {authTokens.user.is_superuser.toString()}</p>
          <p><strong>Access Token:</strong> {authTokens.accessToken}</p>
        </div>
      ) : (
        <p>Please log in to see your information.</p>
      )}
    </div>
  );
}

export default Home;
