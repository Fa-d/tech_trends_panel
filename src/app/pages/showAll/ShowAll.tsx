import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Checkbox
} from '@mui/material';
import { ArrowBack, ArrowRight, ArrowRightAlt } from '@mui/icons-material';



interface UrlListData {
    id: number;
    title: string;
    url: string;
    last_updated: string;
    update: boolean,
    categories: string
}

const data: UrlListData[] = [
    { id: 1, title: 'Project Alpha', url: 'http://google.com', last_updated: '2023-07-15', update: false, categories: "" },
    { id: 2, title: 'Marketing Site', url: 'http://yahoo.com', last_updated: '2023-07-14', update: true, categories: "" },
    { id: 3, title: 'User Dashboard', url: 'http://duckduckgo.com', last_updated: '2023-07-13', update: false, categories: "" },
];


export const ShowAll: React.FC = () => {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >
                            <Typography variant="h6">Title</Typography>
                        </TableCell>

                        <TableCell align="center">
                            <Typography variant="h6">URL</Typography>
                        </TableCell>

                        <TableCell align="center">
                            <Typography variant="h6">Last Updated</Typography>
                        </TableCell>

                        <TableCell align="center">
                            <Typography variant="h6">Update</Typography>
                        </TableCell>

                        <TableCell align="center">
                            <Typography variant="h6">Categories</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id} >

                            <TableCell component="th" scope="row">
                                <Typography variant="body1">{row.title}</Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography variant="body2">{row.url}</Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography variant="caption">
                                    {new Date(row.last_updated).toLocaleDateString()}
                                </Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Checkbox defaultChecked={row.update} />
                            </TableCell>

                            <TableCell align="center">
                                <ArrowRightAlt />
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}