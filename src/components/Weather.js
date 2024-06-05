import React, { useState } from 'react';
import { fetchWeatherData } from '../api/weatherService';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const data = await fetchWeatherData(city);
            setWeatherData(data);
            setError('');
        } catch (err) {
            setError(err.response ? err.response.data.message : 'City not found');
            setWeatherData(null);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Weather Search</Typography>
            <TextField
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>

            {error && <Typography color="error">{error}</Typography>}

            {weatherData && (
                <List>
                    <ListItem>
                        <ListItemText primary={`Temperature: ${weatherData.main.temp}°C`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Humidity: ${weatherData.main.humidity}%`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Weather: ${weatherData.weather[0].description}`} />
                    </ListItem>
                </List>
            )}
        </Container>
    );
};

export default Weather;
