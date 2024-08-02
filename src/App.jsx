import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PageNotFound from './components/PageNotFound';

// Components
import EventList from './components/events/EventList';
import EventForm from './components/events/EventForm';
import EventDetails from './components/events/EventDetails';

// Routes
import PrivateRoute from './routes/PrivateRoutes';
import PublicRoute from './routes/PublicRoutes';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={<PublicRoute element={<Login />} restricted={true} />}
        />
        <Route
          path="/register"
          element={<PublicRoute element={<Register />} restricted={true} />}
        />

        {/* Private Routes */}
        <Route
          path="/"
          element={<PrivateRoute element={<Home />} />}
        />
        <Route
          path="/events"
          element={<PrivateRoute element={<EventList />} />}
        />
        <Route
          path="/event/create"
          element={<PrivateRoute element={<EventForm />} />}
        />
        <Route
          path="/event/:id"
          element={<PrivateRoute element={<EventDetails />} />}
        />
        <Route
          path="/event/edit/:id"
          element={<PrivateRoute element={<EventForm />} />}
        />

        {/* Catch-All Route */}
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
