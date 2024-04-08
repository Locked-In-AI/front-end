const validatePersonalInfo = (personalInfo) => {
   if( personalInfo.name && (personalInfo.name.length < 3 || personalInfo.name.length > 50)){
       throw new Error('Name must be between 3 and 50 characters');
   }
    if(personalInfo.email &&  (personalInfo.email.length < 3 || personalInfo.email.length > 50)){
        throw new Error('Email must be between 3 and 50 characters');
    }
    if(personalInfo.phone && (!personalInfo.phone.startsWith('+') || personalInfo.phone.length !== 12)){
        throw new Error('Phone must be in the format +1XXXXXXXXXX');
    }
    return true;
};

const validateEducation = (education) => {
    // Add your validation logic for education here
    // Return false if invalid, true otherwise
};

const validateExperience = (experience) => {
    // Add your validation logic for experience here
    // Return false if invalid, true otherwise
};

const validateSkills = (skills) => {
    // Add your validation logic for skills here
    // Return false if invalid, true otherwise
};

const validateProjects = (projects) => {
    // Add your validation logic for projects here
    // Return false if invalid, true otherwise
};

const validateCvForm = (personalInfo, education, experience, skills, projects) => {
    if (validatePersonalInfo(personalInfo) ||
        validateEducation(education) ||
        validateExperience(experience) ||
        validateSkills(skills) ||
        validateProjects(projects)) {
        return false;
    }
    return true;
};

export default validateCvForm;