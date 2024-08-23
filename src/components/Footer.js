import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container style={{ marginTop: 'auto', padding: '20px 0', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                Contact: your-email@example.com
            </Typography>
        </Container>
    );
};

export default Footer;
