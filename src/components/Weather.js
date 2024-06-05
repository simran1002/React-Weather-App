import React, { useState } from 'react';
import { fetchWeatherData } from '../api/weatherService';
import { Container, TextField, Button, Typography, Card, CardContent, Grid } from '@mui/material';

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
            <Typography variant="h4" align="center" gutterBottom>Weather Search</Typography>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <TextField
                        label="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={2} style={{ textAlign: 'center' }}>
                    <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
                </Grid>
            </Grid>

            {error && <Typography color="error" align="center">{error}</Typography>}

            {weatherData && (
                <Card variant="outlined" style={{ marginTop: 20 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" align="center">
                            {weatherData.name}, {weatherData.sys.country}
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            {weatherData.weather[0].description}
                        </Typography>
                        <Typography variant="h3" align="center" style={{ margin: 20 }}>
                            {Math.round(weatherData.main.temp)}°C
                        </Typography>
                        <Typography variant="body1" align="center">
                            Humidity: {weatherData.main.humidity}%
                        </Typography>
                        <Typography variant="body1" align="center">
                            Wind: {weatherData.wind.speed} m/s
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default Weather;
