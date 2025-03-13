import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
