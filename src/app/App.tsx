import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

import React from "react";
import { BatchProcess } from './pages/batchProcess/BatchProcess';
import { Home } from './pages/home/Home';
import { SingleUrl } from './pages/singleUrl/SingleUrl';
import { ShowAll } from './pages/showAll/ShowAll';

const drawerWidth = 240;


export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/show-all" element={<ShowAll />} />
                        <Route path="/batch-processing" element={<BatchProcess />} />
                        <Route path="/single-url-processing" element={<SingleUrl />} />
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

                    <ListItemIcon>
                        <HomeIcon color='primary' />
                    </ListItemIcon>
                    <ListItemText
                        primary= {<Typography variant="body2" color="primary" fontWeight="medium">Home</Typography>}        
                
                    />

                </ListItemButton>
                <Divider />

                <ListItemButton component={Link} to="/show-all" selected={location.pathname === '/show-all'}>
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
