import React from 'react';
import Navbar from '../components/Navbar';
import EventList from '../components/events/EventList';
import RegisteredEvents from '../components/events/RegisteredEvents';

function Home() {

  return (
    <>
      <Navbar />
      <EventList/>
      <RegisteredEvents/>

    </>
  );
}

export default Home;
