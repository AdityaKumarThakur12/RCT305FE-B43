import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./action";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = () => ({ type: LOGOUT });

const initialState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { isAuthenticated: true, token: action.payload, loading: false };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case LOGOUT:
      return { isAuthenticated: false, token: null };
    default:
      return state;
  }
};

export default authReducer;
