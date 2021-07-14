import { useState } from 'react';

const useLogin = () => {
  const getUser = () => {
    try {
      const userString = localStorage.getItem('USER');
      if (userString != null) {
        const userParsed = JSON.parse(userString);
        return userParsed;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const [user] = useState(getUser());

  return { user };
};

export default useLogin;
