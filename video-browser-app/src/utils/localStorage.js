export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const addTokenToLocalStorage = (token) => {
  localStorage.setItem('refreshToken', JSON.stringify(token));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('refreshToken');
};
