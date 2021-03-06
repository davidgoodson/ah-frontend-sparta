import axios from '../helpers/axiosInstance';
import { ERROR, USER } from './types';

const { baseURL } = process.env;
export const fetchProfileActions = username => dispatch => axios
  .get(`${baseURL}/profiles/${username}`)
  .then((response) => {
    dispatch({ type: USER, payload: response.data.profile });
    localStorage.setItem('username', response.data.user.username);
  })
  .catch(() => {
    dispatch({
      type: ERROR,
      payload: 'Can not fetch your data, please login again',
    });
  });

export const updateProfileActions = (updatedProfile, history) => (dispatch) => {
  const username = localStorage.getItem('username');
  return axios
    .put(`${baseURL}/profiles/${username}`, updatedProfile)
    .then((response) => {
      dispatch({ type: USER, payload: response.data.profile });
      history.push('/profile');
    })
    .catch(() => {
      dispatch({
        type: ERROR,
        payload: 'Can not update your data, please login again',
      });
    });
};

export const saveImageActions = (url, username) => (dispatch) => {
  const data = {
    image: url,
  };
  return axios
    .put(`${baseURL}/profiles/${username}`, data)
    .then(() => {
      localStorage.setItem('image', url);
      location.reload();
    })
    .catch(() => {
      dispatch({
        type: 'ERROR',
        payload: 'Image could not be processed',
      });
    });
};
