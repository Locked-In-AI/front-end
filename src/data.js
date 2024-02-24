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
            city: 'Anytown',
            country: 'USA',
            startYear: '2018',
            endYear: '2022',
            description: 'Focused on software development and data structures.'
        }
    ],
    experience: [
        {
            jobTitle: 'Software Developer',
            companyName: 'Tech Company',
            startYear: '2022',
            endYear: 'Present',
            description: 'Working on developing and maintaining software applications.'
        },
        {
            jobTitle: 'Intern',
            companyName: 'Another Tech Company',
            startYear: '2021',
            endYear: '2022',
            description: 'Assisted in the development of several software applications.'
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
            description: 'This is a description of Project 1.',
            startYear: '2020',
            endYear: '2021',
        },
        {
            projectName: 'Project 2',
            description: 'This is a description of Project 2.',
            startYear: '2020',
            endYear: '2021',
        }
    ]
};

const dummyCVs = [
    {
        title: 'CV 1',
        created_at: '2022-01-01',
        description: 'This is a description for CV 1'
    },
    {
        title: 'CV 2',
        created_at: '2022-02-01',
        description: 'This is a description for CV 2'
    },
    {
        title: 'CV 3',
        created_at: '2022-03-01',
        description: 'This is a description for CV 3'
    }
];

export { dummyData, dummyCVs };