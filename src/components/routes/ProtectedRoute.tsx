import {
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useAuth } from '../../util/auth';

function ProtectedRoute({
  redirectPath = '/login',
  children,
}: any) {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children || <Outlet />;
}

export default ProtectedRoute;
