import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/authContext/AuthProvider';
import { Link } from 'react-router-dom';

function RegisteredEvents() {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const { authTokens } = useAuth(); 
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchRegisteredEvents = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/register/event/`, {
          params: { email: authTokens.user.email }
        });
        setRegisteredEvents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRegisteredEvents();
  }, [apiUrl, authTokens.user.email]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Registered Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registeredEvents.map(event => (
          <div key={event.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600">Date: {event.date}</p>
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisteredEvents;
