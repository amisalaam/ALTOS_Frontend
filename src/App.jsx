import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from './routes/PrivateRoutes';
import PublicRoute from './routes/PublicRoutes';
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
        </Routes>
      </Router>
  );
}

export default App;
