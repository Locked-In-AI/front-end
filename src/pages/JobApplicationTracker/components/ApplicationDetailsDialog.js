import React, {useState, useEffect} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import {pushJobApplications} from "../../../data";
const ApplicationDetailsDialog = ({ open, handleClose, application }) => {
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [formData, setFormData] = useState(application);


    useEffect(()=>{
        if( application ){
            setFormData(application);
        }
    }, [application])

    if (!formData) {
        return null;
    }

    const statuses = {
        'draft': '📝',
        'applied': '📤',
        'interview': '🤝',
        'second interview': '🤝',
        'test/assignment': '📝',
        'offer extended': '🎉',
        'accepted': '✅',
        'rejected': '❌',
        'withdrawn': '🔙',
    };

    const handleChange = (event)=>{
        const{ name, value } = event.target;
        setFormData({...formData, [name]:value})
        setShowSaveButton(true);
    }

    const handleSave = ()=>{
        pushJobApplications(formData).then(()=>{
            handleClose()
        }).catch((error)=>{
            console.log('Error', error)
        })
    }


    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Application Details</DialogTitle>
            <DialogContent>
                <TextField label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Contact Person" name="contactPerson" value={formData.contactPerson} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Location" name="location" value={formData.location} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Salary" name="salary" value={formData.salary || 'Not provided'} onChange={handleChange} fullWidth margin="normal" />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Application Status</InputLabel>
                    <Select name="applicationStatus" value={formData.applicationStatus} onChange={handleChange}>
                        {Object.entries(statuses).map(([status, emoji]) => (
                            <MenuItem key={status} value={status}>
                                {emoji} {status.toUpperCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField label="Comments" name="comments" value={formData.comments} fullWidth margin="normal" />
                <TextField label="Date Applied" name="dateApplied" value={new Date(formData.dateApplied).toLocaleDateString()} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Follow Up Date" name="followUpDate" value={formData.followUpDate ? new Date(application.followUpDate).toLocaleDateString() : 'Not set'} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="URL" name="url" value={formData.url} fullWidth margin="normal" />
                <Button href={"cv/"+formData.cv.id} variant="contained" color="primary" fullWidth>Check CV</Button>
            </DialogContent>
            <DialogActions>
                {showSaveButton && <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>}
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ApplicationDetailsDialog;