// Header.js

import React from 'react';
import { Typography } from '@mui/material';

const Header = () => {
    return (
        <>
            <Typography variant="h3" align="center" gutterBottom style={{ color: '#3f51b5', fontWeight: 'bold', marginTop: '50px' }}>
                React Weather App
            </Typography>
        </>
    );
};

export default Header;
