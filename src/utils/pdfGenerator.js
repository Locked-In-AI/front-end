import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
function generateCV(data) {
    var docDefinition = {
        content: [
            {
                text: data.personalInfo.name + '\n\n',
                style: 'header'
            },
            {
                text: data.personalInfo.address + '\n' + data.personalInfo.email + '\n' + data.personalInfo.phone + '\n\n',
                style: 'contactInfo'
            },
            {
                text: 'Education\n',
                style: 'sectionHeader'
            },
            {
                ul: data.education.map(edu => `${edu.degree}, ${edu.school_name}, ${edu.city}, ${edu.country} (${edu.startYear} - ${edu.endYear}) - ${edu.description}`),
                style: 'body'
            },
            {
                text: 'Experience\n',
                style: 'sectionHeader'
            },
            {
                ul: data.experience.map(exp => `${exp.jobTitle} at ${exp.company_name} (${exp.start_year} - ${exp.end_year}) - ${exp.description}`),
                style: 'body'
            },
            {
                text: 'Skills\n',
                style: 'sectionHeader'
            },
            {
                ul: data.skills.map(skill => `${skill.skill_name} - ${skill.skill_level}`),
                style: 'body'
            },
            {
                text: 'Projects\n',
                style: 'sectionHeader'
            },
            {
                ul: data.projects.map(proj => `${proj.project_name} (${proj.start_year} - ${proj.end_year}) - ${proj.description}`),
                style: 'body'
            }
        ],
        styles: {
            header: {
                fontSize: 24,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 20]
            },
            contactInfo: {
                alignment: 'center'
            },
            sectionHeader: {
                fontSize: 18,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            body: {
                margin: [0, 0, 0, 10]
            }
        }
    };

    pdfMake.createPdf(docDefinition).download(`${data.personalInfo.name}'s Resume.pdf`);
}

export default generateCV;