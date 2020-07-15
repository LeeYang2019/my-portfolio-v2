import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioItems = ({ repos }) => {
  return repos
    .filter((repo) => repo.stargazers_count > 0)
    .map((repo) => <PortfolioItem repo={repo} id={repo.id} />);
};

export default PortfolioItems;
