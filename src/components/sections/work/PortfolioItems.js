import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioItems = ({ repos }) => {
  return repos.map((repo) => <PortfolioItem repo={repo} key={repo.id} />);
};

export default PortfolioItems;
