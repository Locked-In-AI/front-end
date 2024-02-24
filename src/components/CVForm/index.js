import { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import PersonalInfo from "./PersonlInfo";
import Education from "./Education";
// import other forms...

const steps = ['Personal Info', 'Education', 'Experience', 'Skills', 'Projects'];

const CVForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <PersonalInfo />;
            case 1:
                return <Education />;
            // case 2:
            //   return <Experience />;
            // case 3:
            //   return <Skills />;
            // case 4:
            //   return <Projects />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
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
                    <Button variant="contained" color="primary" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CVForm;