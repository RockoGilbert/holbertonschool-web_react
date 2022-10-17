import { createContext } from 'react';

// Default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Default logOut function
const defaultLogOut = () => {};

// Create context object with default values
// Context used to pass/consume data through the application/between components without using props
const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export { defaultUser, defaultLogOut, AppContext };
