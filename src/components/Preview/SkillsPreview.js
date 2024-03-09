import React from 'react';
import {Typography, Grid, Box} from '@mui/material';

const SkillsPreview = ({ skills=[] }) => {
    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
                Skills
            </Typography>
            <hr/>
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item xs={3} key={index}>
                        <Typography variant="body2">
                            {skill.skill_name}: {skill.skill_level}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SkillsPreview;