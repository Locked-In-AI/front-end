import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Grid} from "@mui/material";
import {fetchJobApplications} from "../../data";

const columns = [
    {id: 'companyName', label: 'Company Name', minWidth: 170},
    {id: 'contactPerson', label: 'Contact Person', minWidth: 100},
    {id: 'jobTitle', label: 'Job Title', minWidth: 170},
    {id: 'location', label: 'Location', minWidth: 170},
    {id: 'salary', label: 'Salary', minWidth: 170},
    {id: 'url', label: 'URL', minWidth: 170},
    {id: 'applicationStatus', label: 'Application Status', minWidth: 170},
    {id: 'comments', label: 'Comments', minWidth: 170},
    {id: 'dateApplied', label: 'Date Applied', minWidth: 170},
    {id: 'followUpDate', label: 'Follow Up Date', minWidth: 170},
];

function createData(companyName, contactPerson, jobTitle, location, salary, url, applicationStatus, comments, dateApplied, followUpDate) {
    return {
        companyName,
        contactPerson,
        jobTitle,
        location,
        salary,
        url,
        applicationStatus,
        comments,
        dateApplied,
        followUpDate
    };
}

const rows = [
    createData('Company A', 'John Doe', 'Software Engineer', 'Location A', '$100,000', 'http://example.com', 'Applied', 'First round completed', '2022-01-01', '2022-01-15'),
];

export default function JobApplicationTracker() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [applications, setApplications] = useState(rows);


    useEffect(() => {
        fetchJobApplications().then(data => {
            const mappedData = data.map(item => createData(
                item.company_name,
                item.email,
                item.job_title,
                item.website,
                '', // Salary is not provided by the API
                item.job_url,
                item.status,
                item.notes,
                item.created_at,
                '' // Follow Up Date is not provided by the API
            ));
            setApplications(mappedData);
        })
    }, []);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Grid container spacing={2}>
            <TableContainer sx={{maxHeight: 440, width: '100%'}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.companyName}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Grid>
    );
}