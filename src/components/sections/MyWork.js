import React, { Fragment, useContext, useEffect } from 'react';
import PortfolioItems from './work/PortfolioItems';
import GithubContext from '../../components/context/github/githubContext';

const MyWork = () => {
  const githubContext = useContext(GithubContext);
  const { searchUserRepos, repos } = githubContext;

  useEffect(() => {
    console.log('useEffect in myWork executes');

    searchUserRepos();
    // eslint-disable-next-line
  }, []);

  console.log('myWork executes');
  console.log(repos.length);

  return (
    <Fragment>
      <section className="my-work">
        <h2 className="section__title">My Portfolio</h2>
        <p className="section__subtitle section__subtitle--work">
          A range of my work
        </p>

        <div className="portfolio">
          <PortfolioItems repos={repos} />
        </div>
      </section>
    </Fragment>
  );
};

export default MyWork;
