import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import SideDrawer from '../SideDrawer';
import { scroller } from 'react-scroll';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class Header extends Component {
	state = {
		drawerOpen: false,
		headerShow: false,
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		if (window.scrollY > 0) {
			this.setState({
				headerShow: true,
			});
		} else {
			this.setState({
				headerShow: false,
			});
		}
	};

	//toggle to true or false
	toggleDrawer = (value) => {
		this.setState({
			drawerOpen: value,
		});
	};

	scrollToElement = (element) => {
		scroller.scrollTo(element, {
			duration: 0,
			smooth: true,
		});
	};

	render() {
		const logoText = '<nhialeeyang>';
		const flexContainer = {
			display: 'flex',
			flexDirection: 'row',
			padding: '0',
		};
		return (
			<AppBar
				position="static"
				style={{
					backgroundColor: this.state.headerShow ? '#1f4068' : '#1f4068',
					height: '75px',
					boxShadow: 'none',
					padding: '5px 0px',
					fontFamily: ['Source Code Pro', 'monospace'],
				}}
			>
				<Toolbar style={{ displa: 'flex', justifyContent: 'space-between' }}>
					<div className="contact_links">
						<ul className="social-list">
							<li className="social-list__item">
								<a
									className="social-list__link"
									href="https://github.com/LeeYang2019"
									target="blank"
								>
									<i className="fab fa-github fa-2x"></i>
								</a>
							</li>
							<li className="social-list__item">
								<a
									className="social-list__link"
									href="https://www.linkedin.com/in/nhialee-yang-b07649181/"
									target="blank"
								>
									<i className="fab fa-linkedin fa-2x"></i>
								</a>
							</li>
						</ul>
					</div>
					<List component="nav" style={flexContainer}>
						<ListItem button onClick={() => this.scrollToElement('myWork')}>
							Portfolio
						</ListItem>
						<ListItem button onClick={() => this.scrollToElement('contactMe')}>
							Contact
						</ListItem>
					</List>
				</Toolbar>
			</AppBar>
		);
	}
}
export default Header;
