import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Sidebar } from '../components/Sidebar';

function ArticlePage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    if (article) {
      const related = articles
        .filter(a => a.category === article.category && a.id !== article.id)
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [article]);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto py-8 px-4">
        <Link to="/" className="font-heading-3 text-x03-dark hover:text-x04-gray">
          ← Back to Home
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <article className="flex-1">
            <img 
              src={article.image}
              alt={article.title}
              className="w-full h-[500px] object-cover mb-8"
            />
            
            <div className="flex items-center gap-2 mb-4">
              <span className="text-x04-gray font-paragraph">#{article.category}</span>
              <span className="w-1 h-1 bg-x05-gray-light rounded-full"></span>
              <span className="text-x04-gray font-paragraph">{article.readingTime}</span>
            </div>

            <h1 className="font-heading-1 text-5xl mb-6">{article.title}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
                alt={article.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-subtitle-2-bold">{article.author}</p>
                <p className="font-paragraph text-x04-gray">{article.date}</p>
              </div>
            </div>

            <div className="font-subtitle-1 text-x03-dark space-y-6">
              <p>{article.content}</p>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h2 className="font-heading-2 text-3xl mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Link 
                    key={related.id} 
                    to={`/article/${related.id}`}
                    className="group"
                  >
                    <div className="relative h-48 mb-4">
                      <img 
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                    <h3 className="font-heading-4 group-hover:text-x01-primary transition-colors duration-300">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default ArticlePage;