import React, { Fragment } from 'react';
import style from 'styled-components';

const EmailContact = style.a`
  margin: 15px 0;
`;

const ContactMe = () => {
	return (
		<Fragment>
			<footer className="footer" id="contact">
				<h3>My Contact: </h3>
				<EmailContact
					href="mailto:ny2514@gmail.com"
					target="blank"
					className="footer__link"
				>
					ny2514@gmail.com
				</EmailContact>
			</footer>
		</Fragment>
	);
};

export default ContactMe;
