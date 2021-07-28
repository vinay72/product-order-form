import React from 'react';
import { Container, Typography, IconButton } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';

const Footer = () => (
  <footer>
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="caption">
        Code & Design by{' '}
        <a href="https://github.com/vinay72">
          <b>Vinay Sagar Sharma</b>
        </a>
      </Typography>
      
    </Container>
  </footer>
);

export default Footer;
