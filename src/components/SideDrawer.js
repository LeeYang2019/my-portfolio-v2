import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({ open, onClose }) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    onClose(false);
  };
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => scrollToElement('aboutMe')}>
          About Me
        </ListItem>
        <ListItem button onClick={() => scrollToElement('myWork')}>
          My Portfolio
        </ListItem>
        <ListItem button onClick={() => scrollToElement('contactMe')}>
          Contact Me
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
