import React, { useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';
import Learn from '../../../resources/images/projectLearn.png';

const PortfolioItem = ({
  repo: { name, language, description, homepage, html_url },
}) => {
  const githubContext = useContext(GithubContext);
  const { searchUserRepo, repo, loading } = githubContext;

  useEffect(() => {
    console.log('useEffect in portfolioItem executes');
    console.log(name);
    searchUserRepo(name);
    // eslint-disable-next-line
  }, [name]);

  console.log('portfolioItem renders');
  console.log(repo);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="portfolio-item">
      <div className="portfolio-item-header">
        <img
          src={name === 'learn' ? Learn : repo ? repo : 'no image'}
          alt="portfolio project"
        />
      </div>
      <div className="portfolio-item-body">
        <span
          className="tag"
          style={{
            backgroundColor:
              language === 'JavaScript'
                ? 'rgba(104, 0, 107)'
                : language === 'Java'
                ? '#fcbf1e'
                : language === 'TypeScript'
                ? '#99b898'
                : '#fe91ca',
          }}
        >
          {language}
        </span>
        <div className="portfolio-item-name">{name}</div>
        <div className="portfolio-item-description">{description}</div>
      </div>
      <div className="portfolio_btns">
        <a
          href={homepage}
          className="demo_btn btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name === 'managingMyTradingCards' ? 'View Video' : 'View Live'}
        </a>
        {name === 'dscrt.ly' ? null : (
          <a
            href={html_url}
            className="demo_btn btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Info
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
