import {
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  AuthContext,
  IAuthContext,
} from '../../contexts/AuthContext';
import {
  TUser,
  clearUserData,
  getAccessToken,
  getRefreshToken,
  setUserData,
  updateAccessToken,
} from '../../util/auth';
import {
  endpoints,
  fetchWrapper,
} from '../../util/api';

interface LocationState {
  from: {
    pathname: string;
  };
}

const ACCESS_TOKEN_EXPIRES_TIME = 1000 * 60 * 9; // 9 min

function AuthProvider({ children }: any) {
  const localAccessToken = getAccessToken() || null;
  const refreshToken = getRefreshToken() || null;
  const navigate = useNavigate();
  const location = useLocation();
  const [isFirstMounted, setIsFirstMounted] = useState(true);

  const handleLogin = (userData: Partial<TUser>) => {
    setUserData(userData);
    const origin = (location.state as LocationState)?.from?.pathname || '/home';
    navigate(origin);
  };

  const handleLogout = async () => {
    clearUserData();
    // Also remove user's refresh token from server
    await fetchWrapper(endpoints.logout, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: { refreshToken },
    });
    navigate('/login');
  };

  async function updateRefreshtoken() {
    const response = await fetchWrapper(endpoints.token, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { refreshToken },
    });

    if (response.ok) {
      const { accessToken } = await response.json();
      updateAccessToken(accessToken);
    } else {
      clearUserData();
      navigate('/login');
      window.location.reload();
    }
    if (isFirstMounted) {
      setIsFirstMounted(false);
    }
  }

  useEffect(() => {
    if (refreshToken) {
      // Check on the first render
      if (isFirstMounted) {
        updateRefreshtoken();
      }

      // Keep checking after a certain time
      const intervalId = setInterval(() => {
        updateRefreshtoken();
      }, ACCESS_TOKEN_EXPIRES_TIME);
      return () => clearInterval(intervalId);
    }
    return undefined;
  }, [localAccessToken]);

  const value = useMemo(() => ({
    token: localAccessToken,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }), [localAccessToken]) as IAuthContext;

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
