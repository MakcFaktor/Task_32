import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, task]);
        setTask('');
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Todo List
            </Typography>
            <TextField
                label="New Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={addTask} style={{ marginTop: '10px' }}>
                Add Task
            </Button>
            <List>
                {tasks.map((t, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={t} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Todo;
