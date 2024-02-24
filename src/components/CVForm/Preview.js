import {Typography, Box, Grid} from '@mui/material';
import React from 'react';

const dummyData = {
    personalInfo: {
        name: 'John Doe',
        address: '123 Main St, Anytown, USA',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
    },
    education: [
        {
            degree: 'Bachelor of Science in Computer Science',
            schoolName: 'University of Anytown',
            startYear: '2018',
            endYear: '2022',
            description: 'Focused on software development and data structures.'
        }
    ],
    skills: [
        {
            skillName: 'JavaScript',
            skillLevel: 'Expert'
        },
        {
            skillName: 'React',
            skillLevel: 'Intermediate'
        }
    ],
    projects: [
        {
            projectName: 'Project 1',
            description: 'This is a description of Project 1.'
        },
        {
            projectName: 'Project 2',
            description: 'This is a description of Project 2.'
        }
    ]
};

const Preview = () => {
    const personalInfo = dummyData.personalInfo;
    const education = dummyData.education;
    const skills = dummyData.skills;
    const projects = dummyData.projects;

    console.log(personalInfo);
    console.log(education);

    return (
        <Box className="preview"
             sx={{width: '100%', maxWidth: 800, mx: 'auto', my: 2, p: 2, border: '1px solid grey', borderRadius: 1}}>
            {personalInfo && (
                <>
                    <Typography variant="h4" component="div" gutterBottom>
                        {personalInfo.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {personalInfo.address}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {personalInfo.email}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {personalInfo.phone}
                    </Typography>
                </>
            )}

            {education && Array.isArray(education) && (
                <>
                    <Typography variant="h5" component="div" gutterBottom>
                        Education
                    </Typography>
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
                </>
            )}

            {skills && Array.isArray(skills) && (
                <>
                    <Typography variant="h5" component="div" gutterBottom>
                        Skills
                    </Typography>
                    <Grid container spacing={2}>
                        {skills.map((skill, index) => (
                            <Grid item xs={6} key={index}>
                                <Typography variant="body1">
                                    {skill.skillName}: {skill.skillLevel}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}

            {projects && Array.isArray(projects) && (
                <>
                    <Typography variant="h5" component="div" gutterBottom>
                        Projects
                    </Typography>
                    {projects.map((project, index) => (
                        <Box key={index} sx={{mb: 2}}>
                            <Typography variant="h6" component="div">
                                {project.projectName}
                            </Typography>
                            <Typography variant="body1">
                                {project.description}
                            </Typography>
                        </Box>
                    ))}
                </>
            )}
        </Box>
    );
};

export default Preview;