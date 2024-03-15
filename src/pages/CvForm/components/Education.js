import { Stack, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { toTitleCase } from '../../../utils/strOpr';

const fields = ['school_name', 'degree', 'field_of_study', 'city', 'country', 'start_year', 'end_year', 'description'];

const Education = ({ education, setEducation }) => {
  const initialEducation = fields.reduce((obj, field) => ({ ...obj, [field]: '' }), {});
  const [entries, setEntries] = useState(Array.isArray(education) && education.length > 0 ? education : [initialEducation]);

  const handleChange = (entryIndex, field) => (event) => {
    const newEntries = [...entries];
    newEntries[entryIndex][field] = event.target.value;

    setEntries(newEntries.map(entry => {
        return Object.entries(entry).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
    }));
  };

  const handleAddEntry = () => {
    setEntries([...entries, initialEducation]);
  };

  const handleRemoveEntry = (entryIndex) => () => {
    const newEntries = [...entries];
    newEntries.splice(entryIndex, 1);
    setEntries(newEntries);
  };

  useEffect(() => {
    setEducation(entries);
  }, [entries, setEducation]);

  return (
    <>
      {entries.map((entry, entryIndex) => (
        <div key={entryIndex}>
          {fields.map((field) => (
            <Stack key={field} spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField label={toTitleCase(field)} value={entry[field]} onChange={handleChange(entryIndex, field)} fullWidth />
            </Stack>
          ))}
          <Button onClick={handleRemoveEntry(entryIndex)}>Remove</Button>
        </div>
      ))}
      <Button onClick={handleAddEntry}>Add Entry</Button>
    </>
  );
};

export default Education;