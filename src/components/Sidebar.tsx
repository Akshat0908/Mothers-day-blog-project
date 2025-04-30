import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

export const Sidebar = () => {
  const categories = [
    {
      name: 'Stories',
      image: 'https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg',
      description: 'Heartwarming tales of motherhood'
    },
    {
      name: 'Health',
      image: 'https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg',
      description: 'Wellness tips for mothers'
    },
    {
      name: 'Inspiration',
      image: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg',
      description: 'Motivational content'
    },
    {
      name: 'Tips',
      image: 'https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg',
      description: 'Practical parenting advice'
    }
  ];

  return (
    <div className="w-full lg:w-[380px] space-y-8">
      {/* Author Profile */}
      <div className="border-2 border-black p-7 relative">
        <img 
          src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
          alt="Author"
          className="w-[152px] h-[152px] rounded-full absolute -top-[76px] left-1/2 transform -translate-x-1/2 object-cover"
        />
        <div className="mt-20 text-center">
          <h3 className="font-heading-3 text-x03-dark mb-4">Jaspreet Bhamrai</h3>
          <p className="font-paragraph text-x04-gray mb-6">
            For as long as I can remember I've been obsessed with the idea of motherhood. 
            I was always that person who was forever daydreaming about raising children and 
            creating beautiful memories.
          </p>
          <h4 className="font-subtitle-2-bold text-black mb-4">Follow me</h4>
          <div className="flex gap-4 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="w-[62px] h-[62px] bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity">
              <FaFacebook size={24} className="text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="w-[62px] h-[62px] bg-[#1DA1F2] flex items-center justify-center hover:opacity-90 transition-opacity">
              <FaTwitter size={24} className="text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="w-[62px] h-[62px] bg-[#E4405F] flex items-center justify-center hover:opacity-90 transition-opacity">
              <FaInstagram size={24} className="text-white" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"
               className="w-[62px] h-[62px] bg-[#BD081C] flex items-center justify-center hover:opacity-90 transition-opacity">
              <FaPinterest size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div>
        <h2 className="font-bold text-black text-[28px] mb-6">Categories</h2>
        <div className="space-y-4">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="relative w-full h-[125px] overflow-hidden group cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-1 bg-x06-white mb-3"></div>
                  <span className="font-heading-4 text-x06-white">{category.name}</span>
                  <p className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-2 border-black p-7">
        <h3 className="font-heading-3 text-x03-dark text-center mb-4">Newsletter</h3>
        <p className="font-paragraph text-x04-gray text-center mb-8">
          Subscribe to receive exclusive content updates and motherhood tips!
        </p>
        <div>
          <label className="font-caption text-x03-dark">Email address</label>
          <input 
            type="email" 
            className="w-full border-b-2 border-x01-primary py-2 mt-2 mb-8 focus:outline-none focus:border-gray-800 transition-colors"
            placeholder="Your email"
          />
          <button className="w-full bg-x01-primary text-x06-white font-button py-4 hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};