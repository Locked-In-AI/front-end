import React from 'react';
import {Typography, Box} from '@mui/material';

const ProjectsPreview = ({ projects }) => {
    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}} gutterBottom>
                Projects
            </Typography>
            <hr/>
            {projects.map((project, index) => (
                <Box key={index} sx={{mb: 2}}>
                    <Typography variant="body1" component="div">
                        {project.projectName}
                    </Typography>
                    <Typography variant="body2">
                        {project.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default ProjectsPreview;