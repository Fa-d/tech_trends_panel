import { Box, TextField } from '@mui/material';
import React from 'react';


export const SingleUrl: React.FC = () => {
    return (
        <div>
            <h1>Submit Single URL</h1>

            <Box 
                justifySelf={'center'}
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}>
                <label>URL</label>
                
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Box>


        </div>
    );
}   