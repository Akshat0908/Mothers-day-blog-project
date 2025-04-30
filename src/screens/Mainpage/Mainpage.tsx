import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { articles } from '../../data/articles';
import { SearchBar } from '../../components/SearchBar';
import { CategoryFilter } from '../../components/CategoryFilter';
import { Sidebar } from '../../components/Sidebar';

export const Mainpage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 6;

  const categories = useMemo(() => 
    Array.from(new Set(articles.map(article => article.category))),
    []
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setFilteredArticles(
      category ? articles.filter(article => article.category === category) : articles
    );
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageCount = Math.ceil(filteredArticles.length / articlesPerPage);
  const offset = currentPage * articlesPerPage;
  const currentArticles = filteredArticles.slice(offset, offset + articlesPerPage);

  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center">
          <div className="w-8 h-8">
            <img src="/shape-5.svg" alt="Logo" className="w-8 h-[25px] mt-[3px]" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] font-bold text-black text-[32px] text-center">
            Mother's Day Blog
          </h1>
          <div className="w-8 h-8 bg-[url(/shape-7.svg)] bg-[100%_100%]" />
        </div>
      </header>
      
      <main className="container mx-auto px-4">
        <SearchBar onSearch={setFilteredArticles} />

        {/* Hero Section */}
        <section className="mb-16 relative">
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <img 
              src={articles[currentSlide].image}
              alt={articles[currentSlide].title}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-12">
              <span className="font-paragraph text-white">{articles[currentSlide].category}</span>
              <h2 className="font-heading-1 text-5xl mt-4 mb-6 text-white">{articles[currentSlide].title}</h2>
              <p className="font-subtitle-1 text-gray-200 mb-8">{articles[currentSlide].excerpt}</p>
              <Link 
                to={`/article/${articles[currentSlide].id}`}
                className="bg-white text-black font-button px-8 py-4 inline-block hover:bg-gray-100 transition-colors"
              >
                Read more
              </Link>
            </div>
            <div className="absolute top-0 right-0 flex">
              <button 
                onClick={prevSlide}
                className="w-16 h-16 bg-black/50 flex items-center justify-center hover:bg-black transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-16 h-16 bg-white/50 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-black" />
              </button>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            {/* Categories Section */}
            <section className="mb-16">
              <h2 className="font-heading-2 text-3xl mb-8">Explore by Category</h2>
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
              />
            </section>

            {/* Recent Articles Section */}
            <section className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-heading-2 text-3xl">
                  {selectedCategory ? `Articles in ${selectedCategory}` : 'Recent Articles'}
                </h2>
              </div>
              
              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-x04-gray text-lg">No articles found. Try adjusting your search or filters.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentArticles.map((article) => (
                      <article key={article.id} className="flex flex-col group">
                        <div className="relative overflow-hidden">
                          <img 
                            src={article.image}
                            alt={article.title}
                            className="h-64 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        </div>
                        <div className="flex items-center gap-2 mt-4 mb-2">
                          <span className="text-x04-gray font-paragraph">#{article.category}</span>
                          <span className="w-1 h-1 bg-x05-gray-light rounded-full"></span>
                          <span className="text-x04-gray font-paragraph">{article.readingTime}</span>
                        </div>
                        <h3 className="font-heading-3 text-2xl mb-2 group-hover:text-gray-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="font-subtitle-2 text-x04-gray mb-4">
                          {article.excerpt}
                        </p>
                        <Link 
                          to={`/article/${article.id}`}
                          className="bg-x01-primary text-x06-white font-button py-4 px-8 self-start hover:bg-gray-800 transition-colors"
                        >
                          Read more
                        </Link>
                      </article>
                    ))}
                  </div>

                  {pageCount > 1 && (
                    <ReactPaginate
                      previousLabel={'← Previous'}
                      nextLabel={'Next →'}
                      breakLabel={'...'}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageChange}
                      containerClassName={'flex justify-center gap-2 mt-12'}
                      pageClassName={'px-4 py-2 border rounded hover:bg-gray-100 transition-colors'}
                      activeClassName={'!bg-x01-primary text-white'}
                      previousClassName={'px-4 py-2 border rounded hover:bg-gray-100 transition-colors'}
                      nextClassName={'px-4 py-2 border rounded hover:bg-gray-100 transition-colors'}
                      disabledClassName={'opacity-50 cursor-not-allowed'}
                    />
                  )}
                </>
              )}
            </section>
          </div>

          <Sidebar />
        </div>
      </main>
    </div>
  );
};