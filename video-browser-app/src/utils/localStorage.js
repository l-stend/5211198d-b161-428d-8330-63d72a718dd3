export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const addTokenToLocalStorage = (token) => {
  localStorage.setItem('refreshToken', JSON.stringify(token));
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  const user = result !== 'undefined' ? JSON.parse(result) : null;
  return user;
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('refreshToken');
};
