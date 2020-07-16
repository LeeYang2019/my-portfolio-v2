import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioItems = ({ repos }) => {
  console.log('repos are passed from mywork to portfolioItems');

  return (
    repos
      // .filter((repo) => repo.stargazers_count > 0)
      .map((repo) => <PortfolioItem repo={repo} key={repo.id} />)
  );
};

export default PortfolioItems;
