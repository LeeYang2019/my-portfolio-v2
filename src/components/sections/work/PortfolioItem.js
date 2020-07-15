import React, { Component } from 'react';
import axios from 'axios';

class PortfolioItem extends Component {
  sate = {
    img: '',
    loading: false,
  };

  async componentWillMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/repos/LeeYang2019/${this.props.repo.name}/readme`
    );

    const decodedContent = window.atob(res.data.content);
    const imgSrc = decodedContent
      .split('\n')
      .filter((line) => line.includes('png'))
      .map((src) => {
        return src.substr(src.indexOf('(') + 1).replace(')', '');
      })[0];

    this.setState({ img: imgSrc, loading: false });
  }

  render() {
    const { img, loading } = this.state;

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <div className="portfolio-item">
        <div className="portfolio-item-header">
          <img src={img} alt="portfolio project" />
        </div>
        <div className="portfolio-item-body">
          <span
            className="tag"
            style={{
              backgroundColor:
                this.props.repo.language === 'JavaScript'
                  ? 'rgba(104, 0, 107)'
                  : '#fcbf1e',
            }}
          >
            {this.props.repo.language}
          </span>
          <div className="portfolio-item-name">{this.props.repo.name}</div>
          <div className="portfolio-item-description">
            {this.props.repo.description}
          </div>
        </div>
        <div className="portfolio_btns">
          <a
            href={this.props.repo.homepage}
            className="demo_btn btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live
          </a>
          <a
            href={this.props.repo.html_url}
            className="demo_btn btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Info
          </a>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
