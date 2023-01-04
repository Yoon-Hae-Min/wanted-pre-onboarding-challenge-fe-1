export const setLocalStorage = (key: string, item: any) => {
  localStorage.setItem(key, item);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
