import React from 'react';
import {Typography, Box} from '@mui/material';

const ExperiencePreview = ({ experience=[] }) => {
    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
                Experience
            </Typography>
            <hr/>
            {experience.map((exp, index) => (
                <Box key={index} sx={{mb: 2}}>
                    <Typography variant="body1" component="div">
                        {exp.job_title}, {exp.company_name}
                    </Typography>
                    <Typography variant="body2">
                        {exp.start_year} - {exp.end_year}
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