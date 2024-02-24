import { Stack, TextField, Button } from '@mui/material';
import { useState } from 'react';

const fields = ['Company Name', 'Job Title', 'Start Year', 'End Year', 'Description'];

const Experience = () => {
    const [entries, setEntries] = useState([Array(fields.length).fill('')]);

    const handleChange = (entryIndex, fieldIndex) => (event) => {
        const newEntries = [...entries];
        newEntries[entryIndex][fieldIndex] = event.target.value;
        setEntries(newEntries);
    };

    const handleAddEntry = () => {
        setEntries([...entries, Array(fields.length).fill('')]);
    };

    const handleRemoveEntry = (entryIndex) => () => {
        const newEntries = [...entries];
        newEntries.splice(entryIndex, 1);
        setEntries(newEntries);
    };

    return (
        <>
            {entries.map((entry, entryIndex) => (
                <div key={entryIndex}>
                    {fields.map((field, fieldIndex) => (
                        <Stack key={field} spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                            <TextField label={field} value={entry[fieldIndex]} onChange={handleChange(entryIndex, fieldIndex)} multiline={field === 'Description'} />
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