import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Check, Clock, Users } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Start Sharing.<br />Stop Wasting.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Join the food revolution on your campus!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/signup" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-full transition flex items-center justify-center"
              >
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/food" 
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-8 rounded-full transition flex items-center justify-center"
              >
                Browse Food
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg" 
              alt="Fresh food sharing" 
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Coffee className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Post extra food</h3>
              <p className="text-gray-600">Easily share details about your surplus food and when it's available.</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl text-center">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nearby users get notified</h3>
              <p className="text-gray-600">Students in your campus can see your post and request to pick up food.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pickup & reduce waste</h3>
              <p className="text-gray-600">Coordinate easy pickup and track your contribution to reducing waste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">12,000+</div>
              <p className="text-lg text-gray-600">Meals shared</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">30+</div>
              <p className="text-lg text-gray-600">College campuses</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">15,000+</div>
              <p className="text-lg text-gray-600">Students impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Priya" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Priya S.</h4>
                  <p className="text-sm text-gray-500">Student at DU</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I've saved food and made new friends through Cap'nShare! It's so rewarding to know my extra food is going to someone who needs it."
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Raj" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Raj M.</h4>
                  <p className="text-sm text-gray-500">Student at IIT</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our hostel used to waste so much food. With Cap'nShare, we've reduced our waste by almost 70%. It's incredible!"
              </p>
            </div>
            
            <div className="hidden lg:block bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Sarah" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah K.</h4>
                  <p className="text-sm text-gray-500">Student at MU</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a student on a budget, Cap'nShare has helped me eat better while also helping reduce food waste on campus. Win-win!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to reduce food waste?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Cap'nShare today and be part of the movement to create a more sustainable campus!
          </p>
          <Link 
            to="/signup" 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-full inline-flex items-center transition"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;