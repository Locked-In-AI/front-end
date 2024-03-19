import { useState } from 'react';
import {Stepper, Step, StepLabel, Button, Grid} from '@mui/material';
import PersonalInfo from "./components/PersonlInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Preview from "../Preview";
import { useLocation } from 'react-router-dom';

const steps = ['Personal Info', 'Education', 'Experience', 'Skills', 'Projects', 'Preview'];

const CVForm = ({data= {}}) => {
    const {state} = useLocation();
    const cv = state;

    const [activeStep, setActiveStep] = useState(0);
    const [personalInfo, setPersonalInfo] = useState(cv ? cv.personal_info : data.personalInfo || {});
    const [education, setEducation] = useState(cv ? cv.education : data.education || {});
    const [experience, setExperience] = useState(cv ? cv.experience : data.experience || {});
    const [skills, setSkills] = useState(cv ? cv.skills : data.skills || {});
    const [projects, setProjects] = useState(cv ? cv.projects : data.projects || {});
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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} onClick={() => setActiveStep(index)}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid>
            <Grid item xs={12}>
                {getStepContent(activeStep)}
            </Grid>
            <Grid item xs={12}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}>
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </Grid>
    );
};

export default CVForm;