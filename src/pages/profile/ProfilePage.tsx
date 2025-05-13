import React, { useState } from 'react';
import { User, Mail, Building, Edit, LogOut, Award } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    campus: user?.campus || '',
    bio: 'Food enthusiast trying to reduce waste on campus!'
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save profile changes logic would go here
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 h-32 relative">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full text-green-600 hover:text-green-700 transition"
            >
              <Edit className="h-5 w-5" />
            </button>
          </div>
          
          <div className="px-6 pb-6">
            <div className="flex flex-col items-center -mt-16 mb-6">
              <div className="relative">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-green-100 rounded-full p-1 border-2 border-white">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold mt-4 text-gray-800">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    className="text-center border-b border-gray-300 focus:border-green-500 focus:ring-0 px-2"
                  />
                ) : (
                  profileData.name
                )}
              </h1>
              
              <p className="text-gray-600 mt-1">
                Level 2 Food Saver
              </p>
            </div>
            
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative rounded-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="campus" className="block text-sm font-medium text-gray-700 mb-1">
                    Campus/University
                  </label>
                  <div className="relative rounded-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="campus"
                      name="campus"
                      value={profileData.campus}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    value={profileData.bio}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center text-gray-800">
                      <Mail className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p>{profileData.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center text-gray-800">
                      <Building className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Campus</p>
                        <p>{profileData.campus}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-2">About</h3>
                  <p className="text-gray-700">{profileData.bio}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-4">Statistics</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-700">12</p>
                      <p className="text-sm text-gray-600">Meals Shared</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-yellow-700">8</p>
                      <p className="text-sm text-gray-600">Meals Claimed</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-700">3.5 kg</p>
                      <p className="text-sm text-gray-600">Waste Reduced</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 flex justify-center">
                  <button
                    onClick={handleLogout}
                    className="flex items-center text-red-600 hover:text-red-700 transition"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;