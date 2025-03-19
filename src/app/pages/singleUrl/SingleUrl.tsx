import { Box, Button, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


export const SingleUrl: React.FC = () => {
    const [isShowing, setIsShowing] = useState(false)

    const handleButtonClick = () => {
        setIsShowing(true);
        setTimeout(() => {
            setIsShowing(false);
        }, 2000);
    }
    return (
        <>
            <h1>Submit Single URL</h1>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                width: '100%',
            }}>

                <Typography variant="subtitle1" sx={{ minWidth: 100 }}>
                    Title:
                </Typography>

                <TextField
                    placeholder="Enter text..."
                    sx={{
                        flex: 1
                    }}
                />

                <Button onClick={() => {
                    handleButtonClick()
                }} variant="contained">
                    Submit
                </Button>
            </Box>

            <Box display="flex" justifyContent="flex-end" my={2} />

            {isShowing && <LinearProgress />}
        </>
    );
}   