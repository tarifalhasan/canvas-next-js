import React, { useState } from 'react';

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');

  const handleCategoryChange = event => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);

    // Clear the custom Category input if it was previously filled
    if (selectedValue !== 'custom') {
      setCustomCategory('');
    }
  };

  const handleCustomCategoryChange = event => {
    setCustomCategory(event.target.value);
  };
  const handleCustomCategoryDoubleClick = () => {
    setSelectedCategory(''); // Reset the selectedCategory state to display the select input field
  };

  // Function to render the content based on the selected option
  const renderContent = () => {
    if (selectedCategory === 'custom') {
      return (
        <input
          type="text"
          value={customCategory}
          onChange={handleCustomCategoryChange}
          placeholder="Enter custom Category"
          onDoubleClick={handleCustomCategoryDoubleClick}
          className="input w-full py-3 "
        />
      );
    } else {
      return (
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mt-1 block w-full p-3 rounded-md border-gray-300 bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="">Select a Category</option>
          <option value="Tesla">Tesla</option>
          <option value="BMW">BMW</option>
          <option value="Samsung">Samsung</option>
          <option value="AMD">AMD</option>
          <option value="custom" className="  text-primary">
            + Add New Category
          </option>
        </select>
      );
    }
  };

  return (
    <div className="select-container">
      <label htmlFor="Category" className="block py-2 label">
        Category
      </label>
      {renderContent()}
    </div>
  );
}
