
const initialState = {
    isVisible: false, 
  };
  
  const visibilityReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_VISIBILITY':
        return {
          ...state,
          isVisible: !state.isVisible, 
        };
      default:
        return state;
    }
  };
  
  export { initialState, visibilityReducer };