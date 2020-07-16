import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { GET_REPOS, GET_REPO, SET_LOADING } from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  console.log('in development');
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  console.log('in production');
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    repos: [],
    repo: '',
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //search user repos
  const searchUserRepos = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/LeeYang2019/repos?per_page=50&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    const repos = res.data.filter((repo) => repo.stargazers_count > 0);

    dispatch({
      type: GET_REPOS,
      payload: repos,
    });
  };

  //search user repo
  const searchUserRepo = async (repoName) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/repos/LeeYang2019/${repoName}/readme`
    );

    const decodedContent = window.atob(res.data.content);
    const imgSrc = decodedContent
      .split('\n')
      .filter((line) => line.includes('png'))
      .map((src) => {
        return src.substr(src.indexOf('(') + 1).replace(')', '');
      })[0];

    dispatch({
      type: GET_REPO,
      payload: imgSrc,
    });
  };

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        repo: state.repo,
        loading: state.loading,
        searchUserRepos,
        searchUserRepo,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
