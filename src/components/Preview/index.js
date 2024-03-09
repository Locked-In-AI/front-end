import React, {useRef, useState} from 'react';
import {Box, Button} from '@mui/material';
import PersonalInfoPreview from './PersonalInfoPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import SkillsPreview from './SkillsPreview';
import ProjectsPreview from './ProjectsPreview';
import generateCV from "../../utils/pdfGenerator";


const Preview = ({personalInfo, education = [], experience = [], skills = [], projects = []}) => {

    const [componentOrder, setComponentOrder] = useState(['Education', 'Experience', 'Skills', 'Projects']);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

    const components = {
        Education: <EducationPreview education={Array.isArray(education) ? education : []}/>,
        Experience: <ExperiencePreview experience={Array.isArray(experience) ? experience : []}/>,
        Skills: <SkillsPreview skills={Array.isArray(skills) ? skills : []}/>,
        Projects: <ProjectsPreview projects={Array.isArray(projects) ? projects : []}/>
    };

    const moveComponent = (component, direction) => {
        const index = componentOrder.indexOf(component);
        const newIndex = index + direction;

        if (newIndex < 0 || newIndex === componentOrder.length) return;

        const newComponentOrder = [...componentOrder];
        newComponentOrder[index] = newComponentOrder[newIndex];
        newComponentOrder[newIndex] = component;

        setComponentOrder(newComponentOrder);
    };

    const previewRef = useRef();

    const downloadPdf = () => {
        setIsGeneratingPdf(true);
        generateCV({
            personalInfo,
            education,
            experience,
            skills,
            projects
        });
    };

    return (
        <Box className="preview"
             sx={{my: 2, p: 2}}
             ref={previewRef}>
            <PersonalInfoPreview personalInfo={personalInfo}/>
            {componentOrder.map((component, index) => (
                <Box key={component} className="component-container" mb={4}>
                    {components[component]}
                    <div className="move-buttons">
                        <Button onClick={() => moveComponent(component, -1)}>Move Up</Button>
                        <Button onClick={() => moveComponent(component, 1)}>Move Down</Button>
                    </div>
                </Box>
            ))}
            {isGeneratingPdf ? null : <Button onClick={downloadPdf}>Download as PDF</Button>}
        </Box>
    );
};

export default Preview;