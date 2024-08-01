import React from 'react';

const registeredEvents = [
  { id: 1, title: 'Tech Conference', date: '2024-08-20' },
  // Add more registered events here
];

function RegisteredEvents() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Registered Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registeredEvents.map(event => (
          <div key={event.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600">Date: {event.date}</p>
            <a
              href={`/events/${event.id}`}
              className="mt-4 block text-blue-500 hover:underline"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisteredEvents;
