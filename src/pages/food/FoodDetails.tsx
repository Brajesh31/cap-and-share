import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  User, 
  Calendar, 
  Info, 
  Share2, 
  Flag, 
  ArrowLeft,
  Loader
} from 'lucide-react';
import { mockFoodPosts } from '../../data/mockData';

const FoodDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [claimServings, setClaimServings] = useState(1);
  const [pickupTime, setPickupTime] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  // Find the food post by ID
  const foodPost = mockFoodPosts.find(post => post.id === id);

  // Get date and time from expiry
  const formatExpiryDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatExpiryTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  // Calculate time remaining
  const getTimeRemaining = (dateString: string) => {
    const expiryTime = new Date(dateString).getTime();
    const currentTime = new Date().getTime();
    const timeDiff = expiryTime - currentTime;
    
    if (timeDiff <= 0) return 'Expired';
    
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days} day${days > 1 ? 's' : ''} left`;
    }
    
    if (hours < 1) {
      return `${minutes} min left`;
    }
    
    return `${hours} hr ${minutes} min left`;
  };

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowClaimForm(false);
      setClaimed(true);
    }, 1500);
  };

  if (!foodPost) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Food item not found</h2>
        <p className="text-gray-600 mb-8">
          The food item you're looking for might have been claimed or removed.
        </p>
        <Link 
          to="/food" 
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back to food listings
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/food" 
        className="inline-flex items-center text-gray-600 hover:text-green-600 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        Back to food listings
      </Link>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="md:flex">
          {/* Food image */}
          <div className="md:w-1/2">
            <div className="h-64 md:h-full bg-gray-200 relative">
              <img 
                src={foodPost.imageUrl}
                alt={foodPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {getTimeRemaining(foodPost.expiryTime)}
                </span>
              </div>
            </div>
          </div>

          {/* Food details */}
          <div className="md:w-1/2 p-6">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{foodPost.title}</h1>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-red-500">
                  <Flag className="h-5 w-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-600 mb-6">{foodPost.description}</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <span>{formatExpiryDate(foodPost.expiryTime)}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <span>Available until {formatExpiryTime(foodPost.expiryTime)}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                <span>{foodPost.location}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <User className="h-5 w-5 text-gray-500 mr-2" />
                <span>Shared by {foodPost.postedBy}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-lg font-bold text-gray-900">{foodPost.servings} servings</span>
                <span className="text-sm text-gray-500 ml-2">remaining</span>
              </div>
              
              {claimed ? (
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-md flex items-center">
                  <Info className="h-5 w-5 mr-2" />
                  <span>Request sent!</span>
                </div>
              ) : (
                <button
                  onClick={() => setShowClaimForm(true)}
                  disabled={showClaimForm}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition disabled:opacity-50"
                >
                  Request to Claim
                </button>
              )}
            </div>

            {/* Claim form */}
            {showClaimForm && (
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Claim Request</h3>
                
                <form onSubmit={handleClaimSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="claimServings" className="block text-sm font-medium text-gray-700 mb-1">
                      How many servings?
                    </label>
                    <select
                      id="claimServings"
                      value={claimServings}
                      onChange={(e) => setClaimServings(parseInt(e.target.value))}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      {[...Array(foodPost.servings)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'serving' : 'servings'}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred pickup time
                    </label>
                    <input
                      type="time"
                      id="pickupTime"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact number (optional)
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="For easier coordination"
                    />
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowClaimForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition flex justify-center items-center disabled:opacity-75"
                    >
                      {loading ? (
                        <>
                          <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
                          Sending Request...
                        </>
                      ) : (
                        'Send Request'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Similar food items */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Similar Food Nearby</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockFoodPosts
            .filter(post => post.id !== id)
            .slice(0, 3)
            .map(food => (
              <div key={food.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Link to={`/food/${food.id}`}>
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src={food.imageUrl}
                      alt={food.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {getTimeRemaining(food.expiryTime)}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/food/${food.id}`}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-green-600 transition">
                      {food.title}
                    </h3>
                  </Link>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{food.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      {food.servings} servings
                    </span>
                    <Link
                      to={`/food/${food.id}`}
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;