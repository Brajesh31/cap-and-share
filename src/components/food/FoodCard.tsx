import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { FoodPost } from '../../types/food';

interface FoodCardProps {
  food: FoodPost;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  // Calculate time remaining until expiry
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

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md">
      <Link to={`/food/${food.id}`} className="block">
        <div className="h-48 bg-gray-200 relative">
          <img 
            src={food.imageUrl}
            alt={food.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {getTimeRemaining(food.expiryTime)}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/food/${food.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-green-600 transition">
            {food.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {food.description}
        </p>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{food.location}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span>
            Available until {new Date(food.expiryTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">
            {food.servings} servings
          </span>
          <Link
            to={`/food/${food.id}`}
            className="text-green-600 hover:text-green-700 text-sm font-medium"
          >
            Claim Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;