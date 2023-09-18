import React, { useState } from 'react';
import { auth, provider } from '../firebase';

const Authentication: React.FC = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      setUser(result.user);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Authentication;