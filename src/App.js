import React from 'react';
import { Container, Typography } from '@mui/material';
import Weather from './components/Weather';

const App = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom align="center">React Weather App</Typography>
            <Weather />
        </Container>
    );
};

export default App;
