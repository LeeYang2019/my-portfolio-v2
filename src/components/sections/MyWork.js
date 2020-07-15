import React, { Fragment, Component } from 'react';
import axios from 'axios';
import PortfolioItems from './work/PortfolioItems';

class MyWork extends Component {
  state = {
    repos: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `http://api.github.com/users/LeeYang2019/repos?per_page=40&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  }

  render() {
    return (
      <Fragment>
        <section className="my-work">
          <h2 className="section__title">My Portfolio</h2>
          <p className="section__subtitle section__subtitle--work">
            A range of my work
          </p>

          <div className="portfolio">
            <PortfolioItems repos={this.state.repos} />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default MyWork;
