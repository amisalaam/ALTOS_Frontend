import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function EventForm() {
  const { state } = useLocation();
  const event = state ? state.event : null;
  
  const [title, setTitle] = useState(event ? event.title : '');
  const [date, setDate] = useState(event ? event.date : '');
  const [eventLocation, setEventLocation] = useState(event ? event.location : ''); // Renamed
  const [capacity, setCapacity] = useState(event ? event.capacity : '');
  const [description, setDescription] = useState(event ? event.description : '');
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDate(event.date);
      setEventLocation(event.location);
      setCapacity(event.capacity);
      setDescription(event.description);
    }
  }, [event]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (event) {
        await axios.put(`${apiUrl}/api/events/${event.id}/`, {
          title,
          date,
          location: eventLocation, // Updated
          capacity,
          description,
        });
      } else {
        await axios.post(`${apiUrl}/api/events/`, {
          title,
          date,
          location: eventLocation, // Updated
          capacity,
          description,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{event ? 'Edit Event' : 'Create Event'}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              value={eventLocation} // Updated
              onChange={(e) => setEventLocation(e.target.value)} // Updated
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Capacity</label>
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {event ? 'Save Changes' : 'Create Event'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventForm;
