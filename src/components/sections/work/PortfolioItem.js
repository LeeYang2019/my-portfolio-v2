import React, { Component } from 'react';
import axios from 'axios';
import Learn from '../../../resources/images/projectLearn.png';

class PortfolioItem extends Component {
  sate = {
    img: '',
    tech: [],
    loading: false,
  };

  async componentWillMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/repos/LeeYang2019/${this.props.repo.name}/readme`
    );

    const decodedContent = window.atob(res.data.content);
    const techString = decodedContent
      .split('\n')
      .filter((line) => line.includes('Tech'));
    //.map((item) => item.substr(item.indexOf(':') + 2));

    const tech = techString[0] ? techString[0] : null;

    const imgSrc = decodedContent
      .split('\n')
      .filter((line) => line.includes('png'))
      .map((src) => {
        return src.substr(src.indexOf('(') + 1).replace(')', '');
      })[0];

    this.setState({ img: imgSrc, tech, loading: false });
  }

  render() {
    const { img, tech, loading } = this.state;

    if (loading) {
      return <div>loading...</div>;
    }

    const codeMentoring =
      'A community project I am a part of, working with other software developers to create a learning platform for coding. Note: the project is still in-progress.';
    const codeMentoringTech =
      'Tech: TypeScript, React, Nodejs, Nestjs, Apollo-Graphql, PostgreSQL';

    const inviteCode = `Invitecode: "blm"`;

    return (
      <div className="portfolio-item">
        <div className="portfolio-item-left">
          <div className="portfolio-item-body">
            <div className="portfolio-item-name">{this.props.repo.name}</div>
            <div className="portfolio-item-description">
              {this.props.repo.name === 'learn'
                ? codeMentoring
                : this.props.repo.description}
              {this.props.repo.name && this.props.repo.name === 'dscrt.ly' ? (
                <div className="portfolio-item-description-inviteCode">
                  {inviteCode}
                </div>
              ) : null}
            </div>
            {tech ? (
              <div className="portfolio-item-technologies">{tech}</div>
            ) : this.props.repo.name === 'learn' ? (
              <div className="portfolio-item-technologies">
                {codeMentoringTech}
              </div>
            ) : null}
            <div className="portfolio_btns">
              <a
                href={this.props.repo.homepage}
                className="demo_btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.repo.name === 'Card-Database'
                  ? 'View Video'
                  : 'View Live'}
              </a>
              {this.props.repo.name === 'dscrt.ly' ? null : (
                <a
                  href={this.props.repo.html_url}
                  className="demo_btn btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              )}
            </div>
            {/* <div className="technology">
              <span
                className="tag"
                style={{
                  backgroundColor:
                    this.props.repo.language === 'JavaScript'
                      ? 'rgba(104, 0, 107)'
                      : this.props.repo.language === 'Java'
                      ? '#fcbf1e'
                      : this.props.repo.language === 'TypeScript'
                      ? '#99b898'
                      : '#fe91ca',
                }}
              >
                {this.props.repo.name === 'learn'
                  ? 'TypeScript'
                  : this.props.repo.language}
              </span>
            </div> */}
          </div>
        </div>
        <div className="portfolio-item-right">
          <div className="portfolio-item-header">
            <img
              src={this.props.repo.name === 'learn' ? Learn : img}
              alt="portfolio project"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
