import React, { Fragment, useContext, useEffect } from 'react';
import PortfolioItems from './work/PortfolioItems';
import GithubContext from '../../components/context/github/githubContext';

const MyWork = () => {
  const githubContext = useContext(GithubContext);
  const { searchUserRepos, repos } = githubContext;

  useEffect(() => {
    searchUserRepos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <section className="my-work">
        <div className="wrapper"></div>
        <h2 className="section__title">Portfolio</h2>
        <div className="portfolio">
          <PortfolioItems repos={repos} />
        </div>
      </section>
    </Fragment>
  );
};

export default MyWork;
