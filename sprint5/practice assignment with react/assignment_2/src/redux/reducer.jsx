const initialState = {
    data: [],
    loading: false,
    error: null,
    searchQuery: '',
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'SEARCH_DATA':
        return { ...state, searchQuery: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  