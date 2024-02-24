import React from 'react';
import {Typography, Grid, Box} from '@mui/material';

const SkillsPreview = ({ skills }) => {
    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h5" component="div" sx={{fontWeight: 'bold'}} gutterBottom>
                Skills
            </Typography>
            <hr/>
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item xs={6} key={index}>
                        <Typography variant="body1">
                            {skill.skillName}: {skill.skillLevel}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SkillsPreview;