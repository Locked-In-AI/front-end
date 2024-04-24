import React, {useEffect, useState} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Chip,
} from '@mui/material';
import {fetchJobApplications} from "../../data";
import ApplicationDetailsDialog from "./components/ApplicationDetailsDialog";

const columns = [
    {id: 'companyName', label: 'Company Name'},
    {id: 'contactPerson', label: 'Contact Person'},
    {id: 'jobTitle', label: 'Job Title'},
    {id: 'applicationStatus', label: 'Application Status'},
    {id: 'dateApplied', label: 'Date Applied'},
    {id: 'followUpDate', label: 'Follow Up Date'},
];

export default function JobApplicationTracker() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [applications, setApplications] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState(null);

    const handleRowClick = (application) => {
        setSelectedApplication(application);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchJobApplications().then(data => {
            const mappedData = data.map(item => ({
                companyName: item.company_name,
                contactPerson: item.email,
                jobTitle: item.job_title,
                cv: item.cv,
                location: item.website,
                salary: item.salary,
                url: item.job_url,
                applicationStatus: item.status,
                comments: item.notes,
                dateApplied: item.created_at,
                followUpDate: item.followUpDate
            }));
            setApplications(mappedData);
        })
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Accepted':
                return 'success';
            case 'Rejected':
                return 'error';
            case 'Pending':
                return 'warning';
            default:
                return 'info';
        }
    };

    return (
        <>
            <TableContainer sx={{maxHeight: 440, width: '100%'}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>{column.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.companyName} onClick={() => handleRowClick(row)}>
                                {columns.map((column) => (
                                    column.id === 'applicationStatus' ?
                                    <TableCell key={column.id}><Chip color={getStatusColor(row[column.id])} label={row[column.id]} /></TableCell> :
                                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    <ApplicationDetailsDialog open={open} handleClose={handleClose} application={selectedApplication} />
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={applications.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(+event.target.value);
                    setPage(0);
                }}
            />
            </>
    );
}