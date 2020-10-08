import React, { Fragment, useContext, useEffect } from 'react';
import style from 'styled-components';
import PortfolioItems from './work/PortfolioItems';
import GithubContext from '../../components/context/github/githubContext';

const Wrapper = style.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 768px) {
    min-width: 720px;
  }
  @media (min-width: 576px) {
    min-width: 540px
  }
`;

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
        <h2 className="section__title">Portfolio</h2>
        <Wrapper>
          <PortfolioItems repos={repos} />
        </Wrapper>
      </section>
    </Fragment>
  );
};

export default MyWork;
