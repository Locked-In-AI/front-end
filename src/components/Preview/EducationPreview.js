import React from 'react';
import {Typography, Box} from '@mui/material';

const EducationPreview = ({ education =[] }) => {
    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} >
                Education
            </Typography>
            <hr/>
            {education.map((edu, index) => (
                <Box key={index} sx={{mb: 2}}>
                    <Typography variant="body1" component="div">
                        {edu.degree}, {edu.school_name}
                    </Typography>
                    <Typography variant="body2">
                        {edu.startYear} - {edu.end_year}
                    </Typography>
                    <Typography variant="body2">
                        {edu.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default EducationPreview;