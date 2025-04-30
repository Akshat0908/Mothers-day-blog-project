import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { articles } from '../data/articles';

interface SearchBarProps {
  onSearch: (results: typeof articles) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term.trim()) {
      onSearch(articles);
      return;
    }

    const results = articles.filter((article) => 
      article.title.toLowerCase().includes(term) ||
      article.excerpt.toLowerCase().includes(term) ||
      article.content.toLowerCase().includes(term) ||
      article.category.toLowerCase().includes(term)
    );

    onSearch(results);
  };

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Search articles by title, content, or category..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-3 border-2 border-x03-dark pr-12 rounded-md focus:outline-none focus:border-gray-800 transition-colors"
      />
      <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-x04-gray" />
      {searchTerm && (
        <button
          onClick={() => {
            setSearchTerm('');
            onSearch(articles);
          }}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 text-x04-gray hover:text-x03-dark"
        >
          ×
        </button>
      )}
    </div>
  );
};