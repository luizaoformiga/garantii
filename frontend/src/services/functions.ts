export const Logout = (redirect: string): string => {
  const response = [localStorage.removeItem("current_user")];

  return response && redirect;
};
