import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext/AuthProvider';
import axios from 'axios';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const { authTokens } = useAuth(); 
  const [message, setMessage] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/events/${id}/`);
        setEvent(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvent();
  }, [id]);

  const handleRegister = async () => {
    if (event.capacity > 0 && authTokens?.user?.email) {
      try {
        const response = await axios.post(`${apiUrl}/api/register/event/`, {
          email: authTokens.user.email,
          event_id: id
        });

        if (response.status === 201) {
          setMessage('Successfully registered!');
        } else {
          console.error(response.data);
          setMessage(response.data.detail || 'An error occurred.' || response.data.non_field_errors);
        }
      } catch (error) {
        console.error(error);
        setMessage('An error occurred during registration.');
      }
    } else {
      setMessage('Sorry, this event is fully booked or user email is missing.');
    }
  };

  const handleEdit = () => {
    navigate(`/event/edit/${id}`, { state: { event } });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/api/events/${id}/`);
      navigate('/events');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-600 mb-2">Date: {event.date}</p>
        <p className="text-gray-600 mb-4">Location: {event.location}</p>
        <p className="text-gray-800 mb-4">{event.description}</p>
        <p className="text-gray-600 mb-4">Capacity: {event.capacity}</p>

        {authTokens?.user?.is_superuser ? (
          <>
            <button
              onClick={handleEdit}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </>
        ) : (
          <button
            onClick={handleRegister}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            disabled={event.capacity <= 0}
          >
            Register
          </button>
        )}

        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
}

export default EventDetails;
