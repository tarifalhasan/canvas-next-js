import React, { useState, ChangeEvent } from 'react';

export default function Brand() {
  const [selectedBrand, setSelectedBrand] = useState < string > '';
  const [customBrand, setCustomBrand] = useState < string > '';

  const handleBrandChange = event => {
    const selectedValue = event.target.value;
    setSelectedBrand(selectedValue);

    // Clear the custom brand input if it was previously filled
    if (selectedValue !== 'custom') {
      setCustomBrand('');
    }
  };

  const handleCustomBrandChange = event => {
    setCustomBrand(event.target.value);
  };
  const handleCustomBrandDoubleClick = () => {
    setSelectedBrand(''); // Reset the selectedBrand state to display the select input field
  };

  // Function to render the content based on the selected option
  const renderContent = () => {
    if (selectedBrand === 'custom') {
      return (
        <input
          type="text"
          value={customBrand}
          onChange={handleCustomBrandChange}
          placeholder="Enter custom brand"
          onDoubleClick={handleCustomBrandDoubleClick}
          className="input w-full py-3 "
        />
      );
    } else {
      return (
        <select
          value={selectedBrand}
          onChange={handleBrandChange}
          className="mt-1 block w-full p-3 rounded-md border-gray-300 bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="">Select a brand</option>
          <option value="Tesla">Tesla</option>
          <option value="BMW">BMW</option>
          <option value="Samsung">Samsung</option>
          <option value="AMD">AMD</option>
          <option value="custom" className="  text-primary">
            + Add New Brand
          </option>
        </select>
      );
    }
  };

  return (
    <div className="select-container">
      <label htmlFor="brand" className="block py-2 label">
        Brand
      </label>
      {renderContent()}
    </div>
  );
}
