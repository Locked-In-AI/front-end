import {Button, Stack, TextField} from '@mui/material';
import {useEffect, useState} from 'react';
import {toCamelCase} from '../../util';

const fields = ['Company Name', 'Job Title', 'Start Year', 'End Year', 'Description'];

const Experience = ({experience, setExperience}) => {
    const initialExperience = fields.reduce((obj, field) => ({...obj, [field]: ''}), {});
    const [entries, setEntries] = useState(Array.isArray(experience) && experience.length > 0 ? experience : [initialExperience]);

    const handleChange = (entryIndex, field) => (event) => {
        const newEntries = [...entries];
        newEntries[entryIndex][field] = event.target.value;


        setEntries(newEntries.map(entry => {
            return Object.entries(entry).reduce((acc, [key, value]) => {
                acc[toCamelCase(key)] = value;
                return acc;
            }, {});
        }));
    };

    const handleAddEntry = () => {
        setEntries([...entries, initialExperience]);
    };

    const handleRemoveEntry = (entryIndex) => () => {
        const newEntries = [...entries];
        newEntries.splice(entryIndex, 1);
        setEntries(newEntries);
    };

    useEffect(() => {
        setExperience(entries);
    }, [entries, setExperience]);

    return (
        <>
            {entries.map((entry, entryIndex) => (
                <div key={entryIndex}>
                    {fields.map((field) => (
                        <Stack key={field} spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <TextField
                                label={field}
                                value={entry[field]}
                                onChange={handleChange(entryIndex, field)}
                                fullWidth
                                multiline={field === 'Description'}
                                rows={field === 'Description' ? 4 : 1}
                            />
                        </Stack>
                    ))}
                    <Button onClick={handleRemoveEntry(entryIndex)}>Remove</Button>
                </div>
            ))}
            <Button onClick={handleAddEntry}>Add Entry</Button>
        </>
    );
};

export default Experience;