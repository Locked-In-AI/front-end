import { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import PersonalInfo from "./PersonlInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Preview from "../Preview/index";

const steps = ['Personal Info', 'Education', 'Experience', 'Skills', 'Projects', 'Preview'];

const CVForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [personalInfo, setPersonalInfo] = useState({});
    const [education, setEducation] = useState({});
    const [experience, setExperience] = useState({});
    const [skills, setSkills] = useState({});
    const [projects, setProjects] = useState({});

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Form submitted');
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />;
            case 1:
                return <Education education={education} setEducation={setEducation} />;
            case 2:
               return <Experience experience={experience} setExperience={setExperience} />;
            case 3:
                return <Skills skills={skills} setSkills={setSkills} />;
            case 4:
               return <Projects projects={projects} setProjects={setProjects} />;
            case 5:
               return <Preview personalInfo={personalInfo} education={education} experience={experience} skills={skills} projects={projects} />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} onClick={() => setActiveStep(index)}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {getStepContent(activeStep)}
                <div>
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}>
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CVForm;