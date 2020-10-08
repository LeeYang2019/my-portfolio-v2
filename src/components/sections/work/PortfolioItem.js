import { PictureAsPdfSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Learn from '../../../resources/images/projectLearn.png';

const fetchRepos = async (name) => {
  const res = await fetch(
    `https://api.github.com/repos/LeeYang2019/${name}/readme`
  );
  return res.json();
}

const PortfolioItem = ({repo}) => {

  const [repository, setRepo] = useState({
    img: '',
    tech: [],
  });

  const {data, status} = useQuery(repo.name, fetchRepos);

  useEffect(() => {
    if (data) {
      const decodedContent = window.atob(data.content);
      console.log(decodedContent);
      const techString = decodedContent
        .split('\n')
        .filter((line) => line.includes('Tech'));

      const tech = techString[0] ? techString[0] : null;

      const imgSrc = decodedContent
        .split('\n')
        .filter((line) => line.includes('png'))
        .map((src) => {
          return src.substr(src.indexOf('(') + 1).replace(')', '');
        })[0];
      setRepo({img: imgSrc, tech: tech});
    }
  }, [data]);

  const {img, tech} = repository;

  const codeMentoring =
  'A community project I am a part of, working with other software developers to create a learning platform for coding. Note: the project is still in-progress.';
  
  const codeMentoringTech =
  'Tech: TypeScript, React, Nodejs, Nestjs, Apollo-Graphql, PostgreSQL';

  const inviteCode = `Invitecode: "blm"`;

  return (<div className="portfolio-item">
    <div className="portfolio-item-left">
      <div className="portfolio-item-body">
        <div className="portfolio-item-name">{repo.name}</div>
        <div className="portfolio-item-description">
          {repo.name === 'learn'
            ? codeMentoring
            : repo.description}
          {repo.name && repo.name === 'dscrt.ly' ? (
            <div className="portfolio-item-description-inviteCode">
              {inviteCode}
            </div>
          ) : null}
        </div>
        {tech ? (
          <div className="portfolio-item-technologies">{tech}</div>
        ) : repo.name === 'learn' ? (
          <div className="portfolio-item-technologies">
            {codeMentoringTech}
          </div>
        ) : null}
        <div className="portfolio_btns">
          <a
            href={repo.homepage}
            className="demo_btn btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.name === 'Card-Database'
              ? 'View Video'
              : 'View Live'}
          </a>
          {repo.name === 'dscrt.ly' ? null : (
            <a
              href={repo.html_url}
              className="demo_btn btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="portfolio-item-right">
      <div className="portfolio-item-header">
        <img
          src={repo.name === 'learn' ? Learn : img}
          alt="portfolio project"
        />
      </div>
    </div>
  </div>);
}

export default PortfolioItem;
