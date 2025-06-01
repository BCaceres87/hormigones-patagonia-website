import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const CookiesContext = createContext();

export const CookiesProvider = ({ children }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(null);

  useEffect(() => {
    const consent = Cookies.get('cookies_accepted');
    if (consent === 'true') setCookiesAccepted(true);
    else if (consent === 'false') setCookiesAccepted(false);
    else setCookiesAccepted(null);
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookies_accepted', 'true', { expires: 365, path: '/' });
    setCookiesAccepted(true);
    toast.success('¡Cookies aceptadas!');
  };

  const rejectCookies = () => {
    Cookies.set('cookies_accepted', 'false', { expires: 365, path: '/' });
    setCookiesAccepted(false);
    toast.info('Has rechazado las cookies no esenciales.');
  };

  return (
    <CookiesContext.Provider value={{ cookiesAccepted, acceptCookies, rejectCookies }}>
      {children}
    </CookiesContext.Provider>
  );
};
