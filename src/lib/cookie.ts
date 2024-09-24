import { jwtDecode } from 'jwt-decode';
const setUserToken = (accessToken: string) => {
  localStorage.setItem('idm_user_tkn', accessToken);
};
const setAuthUser = (userData: any) => {
  localStorage.setItem('i_user', JSON.stringify(userData));
};
const getUserToken = () => {
  return localStorage.getItem('idm_user_tkn') ?? null;
};
const getAuthUser = () => {
  const user = typeof window !== 'undefined' && localStorage.getItem('i_user');

  if (user) {
    try {
      return JSON.parse(user); 
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }

  return null;
};
const deleteUserToken = () => {
  localStorage.removeItem('idm_user_tkn');
};
const deleteAuthUser = () => {
  localStorage.removeItem('i_user');
};
const logout = () => {
  localStorage.removeItem('idm_user_tkn');
  localStorage.removeItem('i_user');
  localStorage.removeItem('i_cart');
};
const isAuthTokenExpired = (expirationTime: number) => {
  const currentTime = Math.floor(Date.now() / 1000);
  console.log('CurrentTime: ', currentTime);
  console.log('TokenExpirationTime: ', expirationTime);
  console.log('Time to live: ', expirationTime - currentTime);
  return expirationTime < currentTime;
};
const decodeToken = (token: any) => {
  return jwtDecode(token);
};
const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('idm_user_tkn') ?? null;
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken.exp !== undefined) {
        const isTokenExpired = isAuthTokenExpired(decodedToken.exp);
        return !isTokenExpired;
      }
    }
  }
  return false;
};
export {
  setUserToken,
  isAuthenticated,
  getUserToken,
  deleteUserToken,
  setAuthUser,
  getAuthUser,
  deleteAuthUser,
  logout
};