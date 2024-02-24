import React from 'react';
import {Typography, Box} from '@mui/material';

const EducationPreview = ({ education }) => {
    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}} gutterBottom>
                Education
            </Typography>
            <hr/>
            {education.map((edu, index) => (
                <Box key={index} sx={{mb: 2}}>
                    <Typography variant="h6" component="div">
                        {edu.degree}, {edu.schoolName}
                    </Typography>
                    <Typography variant="body1">
                        {edu.startYear} - {edu.endYear}
                    </Typography>
                    <Typography variant="body1">
                        {edu.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default EducationPreview;