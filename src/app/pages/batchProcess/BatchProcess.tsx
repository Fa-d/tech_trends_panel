import { Box, Button, CircularProgress, LinearProgress, Typography } from '@mui/material';
import React, { useState } from 'react';


export const BatchProcess: React.FC = () => {
    const [isShowing, setIsShowing] = useState(false)

    const handleButtonClick = () => {
        setIsShowing(true);
        setTimeout(() => {
            setIsShowing(false);
        }, 2000);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <h1>Batch Process</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                    width: '100%'
                }}>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        gap: 2,
                        border: '2px dashed #ccc',
                        padding: 15,
                        borderRadius: 8,
                        width: 'fit-content'
                    }}>
                        
                    <Typography variant='body1'>Upload File</Typography>
                    <Button variant='outlined'>Select</Button>
                </Box>

                <Button onClick={handleButtonClick} variant='contained'>Submit</Button>
                <Box sx={{ gap: 2 }} />
            </Box>
            <Box sx={{ height: 40, mt: 3 }}>
                <CircularProgress sx={{ visibility: isShowing ? 'visible' : 'hidden' }} />
            </Box>
        </div>
    );
}   