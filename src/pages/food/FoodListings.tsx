import React, { useState } from 'react';
import { Search, MapPin, Calendar, Clock, SlidersHorizontal, X } from 'lucide-react';
import FoodCard from '../../components/food/FoodCard';
import { mockFoodPosts } from '../../data/mockData';

const FoodListings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    maxDistance: '5',
    availableAfter: '',
    sortBy: 'newest'
  });

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  // Filter food posts based on search term
  const filteredPosts = mockFoodPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset filters
  const resetFilters = () => {
    setFilters({
      location: '',
      maxDistance: '5',
      availableAfter: '',
      sortBy: 'newest'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Available Food</h1>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search food items..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
          >
            <SlidersHorizontal className="h-5 w-5 text-gray-500 mr-2" />
            Filters
          </button>
        </div>

        {/* Expandable Filter Options */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    placeholder="Campus location"
                    className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="maxDistance" className="block text-sm font-medium text-gray-700 mb-1">
                  Max Distance (km)
                </label>
                <select
                  id="maxDistance"
                  name="maxDistance"
                  value={filters.maxDistance}
                  onChange={handleFilterChange}
                  className="block w-full pl-3 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="1">1 km</option>
                  <option value="2">2 km</option>
                  <option value="5">5 km</option>
                  <option value="10">10 km</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="availableAfter" className="block text-sm font-medium text-gray-700 mb-1">
                  Available After
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="time"
                    id="availableAfter"
                    name="availableAfter"
                    value={filters.availableAfter}
                    onChange={handleFilterChange}
                    className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
                  Sort By
                </label>
                <select
                  id="sortBy"
                  name="sortBy"
                  value={filters.sortBy}
                  onChange={handleFilterChange}
                  className="block w-full pl-3 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="newest">Newest</option>
                  <option value="nearest">Nearest</option>
                  <option value="expiringSoon">Expiring Soon</option>
                  <option value="mostServings">Most Servings</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button
                onClick={resetFilters}
                className="text-sm text-gray-500 hover:text-gray-700 mr-4 flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                Reset
              </button>
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-6">
        {filteredPosts.length} {filteredPosts.length === 1 ? 'item' : 'items'} found
      </p>

      {/* Food Listings Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <img 
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="No results"
            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 opacity-50"
          />
          <h3 className="text-xl font-medium text-gray-700 mb-2">No food items found</h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your search or filters to find available food.
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              resetFilters();
            }}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodListings;