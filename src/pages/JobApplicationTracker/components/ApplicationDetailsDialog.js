import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ApplicationDetailsDialog = ({ open, handleClose, application }) => {
    if (!application) {
        return null;
    }

    const statuses = {
        'draft': '📝',
        'submitted': '📤',
        'interview': '🤝',
        'second interview': '🤝',
        'test/assignment': '📝',
        'offer extended': '🎉',
        'accepted': '✅',
        'rejected': '❌',
        'withdrawn': '🔙',
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Application Details</DialogTitle>
            <DialogContent>
                <TextField label="Company Name" value={application.companyName} fullWidth margin="normal" />
                <TextField label="Contact Person" value={application.contactPerson} fullWidth margin="normal" />
                <TextField label="Job Title" value={application.jobTitle} fullWidth margin="normal" />
                <TextField label="Location" value={application.location} fullWidth margin="normal" />
                <TextField label="Salary" value={application.salary || 'Not provided'} fullWidth margin="normal" />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Application Status</InputLabel>
                    <Select value={application.applicationStatus}>
                        {Object.entries(statuses).map(([status, emoji]) => (
                            <MenuItem key={status} value={status}>
                                {emoji} {status.toUpperCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField label="Comments" value={application.comments} fullWidth margin="normal" />
                <TextField label="Date Applied" value={new Date(application.dateApplied).toLocaleDateString()} fullWidth margin="normal" />
                <TextField label="Follow Up Date" value={application.followUpDate ? new Date(application.followUpDate).toLocaleDateString() : 'Not set'} fullWidth margin="normal" />
                <TextField label="URL" value={application.url} fullWidth margin="normal" />
                <Button href={application.cv.id} variant="contained" color="primary" fullWidth>Check CV</Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ApplicationDetailsDialog;