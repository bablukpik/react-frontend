import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { ContentArea } from '../pages/style';
import Navbar from '../navbar/Navbar';
import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Private from '../pages/Private';
import ProtectedRoute from './ProtectedRoute';
import AuthProvider from './AuthProvider';
import Signup from '../pages/Signup';

function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <ContentArea>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/private"
              element={(
                <ProtectedRoute>
                  <Private />
                </ProtectedRoute>
            )}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<p>There&apos;s nothing here: 404!</p>} />
          </Routes>
        </ContentArea>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;
