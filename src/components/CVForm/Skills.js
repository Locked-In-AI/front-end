import { Stack, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { toCamelCase } from '../../utils/strOpr';

const fields = ['Skill Name', 'Skill Level'];

const Skills = ({ skills, setSkills }) => {
  const initialSkill = fields.reduce((obj, field) => ({ ...obj, [field]: '' }), {});
  const [entries, setEntries] = useState(Array.isArray(skills) && skills.length > 0 ? skills : [initialSkill]);

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
    setEntries([...entries, initialSkill]);
  };

  const handleRemoveEntry = (entryIndex) => () => {
    const newEntries = [...entries];
    newEntries.splice(entryIndex, 1);
    setEntries(newEntries);
  };

  useEffect(() => {
    setSkills(entries);
  }, [entries, setSkills]);

  return (
    <>
      {entries.map((entry, entryIndex) => (
        <div key={entryIndex}>
          {fields.map((field) => (
            <Stack key={field} spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField label={field} value={entry[field]} onChange={handleChange(entryIndex, field)} />
            </Stack>
          ))}
          <Button onClick={handleRemoveEntry(entryIndex)}>Remove</Button>
        </div>
      ))}
      <Button onClick={handleAddEntry}>Add Skill</Button>
    </>
  );
};

export default Skills;