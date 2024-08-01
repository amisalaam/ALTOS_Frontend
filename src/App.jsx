import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from './routes/PrivateRoutes';
import PublicRoute from './routes/PublicRoutes';
import EventList from './components/events/EventList';
import EventForm from './components/events/EventForm';
import EventDetails from './components/events/EventDetails';
function App() {
  return (
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<PublicRoute element={<Login />} restricted={true} />}
          />
          <Route
            path="/register"
            element={<PublicRoute element={<Register />} restricted={true} />}
          />
          <Route
            path="/"
            element={<PrivateRoute element={<Home />} />}
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path='/admin/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
          <Route path='/events' element={<PrivateRoute element={<EventList />} />} />
          <Route path='/event/create' element={<PrivateRoute element={<EventForm />} />} />
          <Route path='/event/:id' element={<PrivateRoute element={<EventDetails />} />} />
          <Route path='/event/edit/:id' element={<PrivateRoute element={<EventForm />} />} />
          
        </Routes>
      </Router>
  );
}

export default App;
