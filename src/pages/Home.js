import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1" paragraph>
                I am a software developer with experience in React, Node.js, and other modern web technologies...
            </Typography>
            <Typography variant="h6">Skills:</Typography>
            <List>
                <ListItem>
                    <ListItemText primary="JavaScript" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="React" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Node.js" />
                </ListItem>
            </List>
        </Container>
    );
};

export default Home;
