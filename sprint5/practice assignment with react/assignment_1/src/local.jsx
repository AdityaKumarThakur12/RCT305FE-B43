const localStorageMiddleware = ({ getState }) => {
    return (next) => (action) => {
      const result = next(action);
      localStorage.setItem('todos', JSON.stringify(getState().todos));
      return result;
    };
  };
  
  const reHydrateStore = () => {
    if (localStorage.getItem('todos') !== null) {
      return JSON.parse(localStorage.getItem('todos'));
    }
    return [];
  };
  
  export { localStorageMiddleware, reHydrateStore };
  