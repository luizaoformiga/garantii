export const isAuthenticated = (): boolean => {
  const user = localStorage.getItem("current_user");
  if (!user) return false;

  return true;
};
