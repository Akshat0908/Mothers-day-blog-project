import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-x01-primary text-white'
              : 'bg-gray-100 text-x03-dark hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
      {selectedCategory && (
        <button
          onClick={() => onSelectCategory('')}
          className="px-4 py-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
        >
          Clear Filter
        </button>
      )}
    </div>
  );
};