import React from 'react';
import style from 'styled-components';

const Wrapper = style.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 992px) {
    max-width: 1200px;
  }
  @media (min-width: 768px) {
    min-width: 720px;
  }
  @media (min-width: 576px) {
    min-width: 540px
  }
`;

const RowDiv = style.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 100px;
`;

const AboutDiv = style.div`
  margin-top: 50px;
  float: left;

  & > h3 {
    border-bottom: 1px solid white;
  }
`;

const Technologies = style.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;

  & > img {
    margin: 15px 15px 15px 0;
  }

`;

const AboutMe = () => {
	return (
		<Wrapper>
			<RowDiv>
				<section>
					<div className="col-lg-12 col-sm-12">
						<AboutDiv>
							<h2 className="section__title section__title--about">Who I am</h2>
							<p>
								I am a <strong>problem solver</strong> who also happens to be an
								aspiring software developer. In my past life, I was a business
								analyst with extensive experience working with both internal and
								external stakeholders, researching and gathering business
								requirements, facilitating workgroup discussions and performing
								user acceptance testing. Through working with system and
								technical anaysts, I became interested in software development.
							</p>
							<a
								href="https://drive.google.com/file/d/1zUeWjUnSgub85sjv9putF1d0SSHAqO4z/view?usp=sharing"
								className="demo_btn btn"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Resume
							</a>
						</AboutDiv>
					</div>
					<div className="col-lg-12 col-sm-12">
						<AboutDiv>
							<h3 className="section__title section__title--about">
								Technologies I have experience With
							</h3>
							<Technologies>
								<img
									src="https://icongr.am/devicon/css3-original.svg?size=50&color=currentColor"
									alt="css3"
								/>
								<img
									src="https://icongr.am/devicon/html5-original.svg?size=50&color=currentColor"
									alt="html5"
								/>

								<img
									src="https://icongr.am/devicon/javascript-original.svg?size=50&color=currentColor"
									alt="javascript"
								/>

								<img
									src="https://icongr.am/devicon/java-original.svg?size=50&color=currentColor"
									alt="java"
								/>

								<img
									src="https://icongr.am/devicon/react-original.svg?size=50&color=currentColor"
									alt="react"
								/>

								<img
									src="https://icongr.am/devicon/nodejs-original.svg?size=50&color=currentColor"
									alt="node"
								/>

								<img
									src="https://icongr.am/devicon/c-original.svg?size=50&color=currentColor"
									alt="c-programming"
								/>

								<img
									src="https://icongr.am/devicon/php-original.svg?size=50&color=currentColor"
									alt="php"
								/>

								<img
									src="https://icongr.am/devicon/mysql-original.svg?size=50&color=currentColor"
									alt="mysql"
								/>

								<img
									src="https://icongr.am/devicon/mongodb-original.svg?size=50&color=currentColor"
									alt="mongodb"
								/>

								<img
									src="https://icongr.am/devicon/postgresql-original.svg?size=50&color=currentColor"
									alt="postgresql"
								/>

								<img
									src="https://icongr.am/devicon/heroku-original.svg?size=50&color=currentColor"
									alt="heroku"
								/>

								<img
									src="https://icongr.am/devicon/amazonwebservices-original.svg?size=50&color=currentColor"
									alt="aws"
								/>

								<img
									src="https://icongr.am/devicon/docker-original.svg?size=50&color=currentColor"
									alt="docker"
								/>

								<img
									src="https://icongr.am/devicon/git-original.svg?size=50&color=currentColor"
									alt="git"
								/>

								<img
									src="https://icongr.am/devicon/github-original.svg?size=50&color=currentColor"
									alt="github"
								/>

								<img
									src="https://icongr.am/devicon/atom-original.svg?size=50&color=currentColor"
									alt="atom"
								/>

								<img
									src="https://icongr.am/devicon/visualstudio-plain.svg?size=50&color=currentColor"
									alt="visual studio"
								/>
							</Technologies>
						</AboutDiv>
					</div>
				</section>
			</RowDiv>
		</Wrapper>
	);
};

export default AboutMe;
