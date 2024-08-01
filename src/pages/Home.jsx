import React from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/authContext/AuthProvider';
import EventList from '../components/events/EventList';
import RegisteredEvents from '../components/events/RegisteredEvents';

function Home() {
  const { authTokens } = useAuth();

  return (
    <>
      <Navbar />
      <EventList/>
      <RegisteredEvents/>

    </>
  );
}

export default Home;
