import { GET_REPOS, GET_REPO, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_REPO:
      return {
        ...state,
        repo: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
