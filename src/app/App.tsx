import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Box, Drawer, List, ListItemButton, Typography } from '@mui/material';

import React from "react";

const drawerWidth = 240;


export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Routes>
                        <Route path="/" element={
                            <Typography variant="h3">Show all</Typography>
                        } />
                        <Route path="/batch-processing" element={
                            <Typography variant="h3">Batch Processing</Typography>
                        } />
                        <Route path="/single-url-processing" element={
                            <Typography variant="h3">Single URL Processing</Typography>
                        } />
                    </Routes>
                </Box>
            </Box>
        </BrowserRouter>
    );
}

const Sidebar = () => {
    const location = useLocation();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}>
            <List>
                <ListItemButton component={Link} to="/" selected={location.pathname === '/'}>
                    Show all
                </ListItemButton>

                <ListItemButton component={Link} to="/batch-processing" selected={location.pathname === '/batch-processing'}>
                    Batch Process
                </ListItemButton>

                <ListItemButton component={Link} to="/single-url-processing" selected={location.pathname === '/single-url-processing'}>
                    Single URL Process
                </ListItemButton>
            </List>
        </Drawer>
    );
};
