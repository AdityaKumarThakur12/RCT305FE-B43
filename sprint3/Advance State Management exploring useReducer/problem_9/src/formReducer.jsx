
const initialState = {
    email: '',
    password: '',
  };
  
  const formReducer = (state, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      case 'RESET':
        return initialState;
      default:
        throw new Error('Invalid action type');
    }
  };
  
  export { initialState, formReducer };