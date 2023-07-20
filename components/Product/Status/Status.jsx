import { useState, ChangeEvent } from 'react';
import { Select, Option, Chip } from '@material-tailwind/react';

export default function Status() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange2 = event => {
    setSelectedValue(event.target.value);
  };
  console.log(selectedValue);
  return (
    <div className="">
      <Select
        label="Status"
        className="input"
        value={selectedValue}
        onChange={() => handleChange2}
      >
        <Option value="Active">Active</Option>
        <Option value="Draft">Draft</Option>
        <Option value="Archived">Archived</Option>
      </Select>
    </div>
  );
}
