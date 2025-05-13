import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Clock, ShoppingBag, Award, BarChart2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import FoodCard from '../../components/food/FoodCard';
import { mockFoodPosts } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Filter food posts to show only recent ones
  const recentFoodPosts = mockFoodPosts.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Hi {user?.name?.split(' ')[0] || 'there'} 👋
        </h1>
        <p className="text-gray-600">Ready to make a difference today?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-green-800 mb-4">Your Activity</h2>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <ShoppingBag className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">12 meals shared</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">4 claims received</span>
                </div>
              </div>
            </div>
            <BarChart2 className="h-10 w-10 text-green-200" />
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-yellow-800 mb-4">Waste Reduction</h2>
              <p className="text-2xl font-bold text-yellow-600">7.5 kg</p>
              <p className="text-sm text-gray-600 mt-1">Food waste prevented</p>
            </div>
            <Award className="h-10 w-10 text-yellow-200" />
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-blue-800 mb-4">Campus Ranking</h2>
              <p className="text-2xl font-bold text-blue-600">#3</p>
              <p className="text-sm text-gray-600 mt-1">Top sharer this week</p>
            </div>
            <Award className="h-10 w-10 text-blue-200" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Food Posts Near You</h2>
        <Link 
          to="/food" 
          className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {recentFoodPosts.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Ready to share some food?</h2>
            <p className="text-green-100">Every meal shared counts towards a greener campus!</p>
          </div>
          <Link
            to="/post-food"
            className="bg-white text-green-600 hover:bg-green-50 px-5 py-2 rounded-full font-semibold transition-colors flex items-center"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Share Food
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;