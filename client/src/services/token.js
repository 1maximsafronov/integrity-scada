const TOKENT_KEY_NAME = `integrity-scada-auth-token`;

export const getToken = ()=> {
  const token = localStorage.getItem(TOKENT_KEY_NAME);
  return token || ``;
};

export const saveToken = (token) => {
  localStorage.setItem(TOKENT_KEY_NAME, token);
};

export const dropToken = () => {
  localStorage.removeItem(TOKENT_KEY_NAME);
};
