export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const addTokenToLocalStorage = (token) => {
  localStorage.setItem('refreshToken', JSON.stringify(token));
};
