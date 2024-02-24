import React from 'react';
import {Box, Stack} from '@mui/material';
import PersonalInfoPreview from './PersonalInfoPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import SkillsPreview from './SkillsPreview';
import ProjectsPreview from './ProjectsPreview';
import {dummyData} from "../../data";

const Preview = () => {
    const data = dummyData;
    const personalInfo = data.personalInfo;
    const education = data.education;
    const experience = data.experience;
    const skills = data.skills;
    const projects = data.projects;

    return (
        <Box className="preview"
             sx={{width: '100%', maxWidth: 800, mx: 'auto', my: 2, p: 2, border: '1px solid grey', borderRadius: 1}}>
            <Stack spacing={2}>
                <PersonalInfoPreview personalInfo={personalInfo} />
                <EducationPreview education={education} />
                <ExperiencePreview experience={experience} />
                <SkillsPreview skills={skills} />
                <ProjectsPreview projects={projects} />
            </Stack>
        </Box>
    );
};

export default Preview;