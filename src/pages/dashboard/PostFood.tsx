import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Camera, 
  Clock, 
  User, 
  MapPin, 
  Info, 
  Utensils, 
  AlertCircle,
  Loader
} from 'lucide-react';

const PostFood: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: '1',
    location: '',
    expiryDate: '',
    expiryTime: '',
    imageUrl: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  });
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    // Simple validation
    if (!formData.title || !formData.description || !formData.location || !formData.expiryDate || !formData.expiryTime) {
      setFormError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/dashboard');
    } catch (error) {
      setFormError('Failed to post food item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Sample food options for quick selection
  const foodSuggestions = [
    { name: 'Pizza', quantity: '4 slices' },
    { name: 'Pasta', quantity: '2 servings' },
    { name: 'Biryani', quantity: '3 servings' },
    { name: 'Sandwich', quantity: '2 pieces' },
    { name: 'Cake', quantity: '3 slices' }
  ];

  // Calculate the minimum date and time (now)
  const now = new Date();
  const minDate = now.toISOString().split('T')[0];
  const minTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Share Your Extra Food</h1>
        
        {formError && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{formError}</p>
          </div>
        )}

        <div className="bg-green-50 p-4 rounded-md mb-6 flex items-start">
          <Info className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-700">
            Please ensure all food items are properly stored and safe to consume. Include any allergy information in the description.
          </p>
        </div>

        <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
          <h2 className="font-medium text-gray-700 mb-3">Quick add popular items</h2>
          <div className="flex flex-wrap gap-2">
            {foodSuggestions.map((food, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setFormData({
                  ...formData,
                  title: food.name,
                  quantity: food.quantity.split(' ')[0]
                })}
                className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition"
              >
                {food.name} ({food.quantity})
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            {/* Food item image */}
            <div className="mb-6">
              <div className="rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center relative">
                {formData.imageUrl ? (
                  <img
                    src={formData.imageUrl}
                    alt="Food preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-4">
                    <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Add a photo of your food</p>
                  </div>
                )}
                <button
                  type="button"
                  className="absolute bottom-4 right-4 bg-white bg-opacity-90 text-green-600 hover:text-green-700 rounded-full p-2 shadow-sm hover:shadow transition"
                >
                  <Camera className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Adding a clear photo helps others identify your food.
              </p>
            </div>

            {/* Title and Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Food Title*
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Utensils className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="e.g., Homemade Pasta"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Servings/Quantity*
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description*
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Describe your food, include any allergy info or special instructions..."
                required
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Location*
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., Hostel Block A, Room 101"
                  required
                />
              </div>
            </div>

            {/* Expiry Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Available Until (Date)*
                </label>
                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  min={minDate}
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="expiryTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Available Until (Time)*
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="time"
                    id="expiryTime"
                    name="expiryTime"
                    min={formData.expiryDate === minDate ? minTime : undefined}
                    value={formData.expiryTime}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition flex justify-center items-center disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin -ml-1 mr-2 h-5 w-5" />
                    Posting...
                  </>
                ) : (
                  'Post Food'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostFood;