import React from 'react';
import {Typography, Box} from '@mui/material';

const ExperiencePreview = ({ experience }) => {
    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}} gutterBottom>
                Experience
            </Typography>
            <hr/>
            {experience.map((exp, index) => (
                <Box key={index} sx={{mb: 2}}>
                    <Typography variant="body1" component="div">
                        {exp.jobTitle}, {exp.companyName}
                    </Typography>
                    <Typography variant="body2">
                        {exp.startYear} - {exp.endYear}
                    </Typography>
                    <Typography variant="body2">
                        {exp.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default ExperiencePreview;