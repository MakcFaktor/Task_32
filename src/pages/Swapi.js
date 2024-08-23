import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const Swapi = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(response => setCharacters(response.data.results))
            .catch(error => console.error(error));
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Star Wars Characters
            </Typography>
            <List>
                {characters.map((character, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={character.name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Swapi;
