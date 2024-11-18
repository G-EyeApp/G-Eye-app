import React from 'react';
import Navbar from '../../../components/Navbar';

const GetInvolved = () => {
  const successStories = [
    {
      image: '/path/to/image1.jpg',
      title: 'Empowering Local Leaders',
      story: 'Meet John, a community leader who successfully mobilized his village to report and stop illegal mining activities, ensuring a safer environment for future generations.'
    },
    {
      image: '/path/to/image2.jpg',
      title: 'Resilience in Action',
      story: 'Sarah, a volunteer, shares her experience of organizing awareness campaigns that reached hundreds of people and inspired change in her region.'
    },
    {
      image: '/path/to/image3.jpg',
      title: 'Hope Restored',
      story: 'Thanks to collaborative efforts, entire communities have reclaimed their lands and begun to heal. Read the story of how one village stood resilient in the face of adversity.'
    }
  ];

  return (
   <div>
    <Navbar />
     <section id="get-involved" className="py-12 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
        <p className="text-gray-600 mb-8">
          Join us in our mission to combat illegal mining and support affected communities. Your involvement can make a real difference!
        </p>

        {/* Ways to Contribute */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-green-700">Volunteer</h3>
            <p className="text-gray-600">
              Participate in community activities and events to help spread awareness and aid in our initiatives.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-green-700">Report an Incident</h3>
            <p className="text-gray-600">
              Use our platform to report illegal mining activities and environmental concerns in your area.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-green-700">Partner with Us</h3>
            <p className="text-gray-600">
              Collaborate with us to amplify our impact and work towards a sustainable future.
            </p>
          </div>
        </div>

        {/* Donation Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Support Our Work</h3>
          <p className="text-gray-600 mb-6">
            Your financial support helps us continue our efforts and reach more communities. Every contribution counts.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
            Donate Today
          </button>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
          <p className="text-gray-600 mb-6">
            Read inspiring stories from our volunteers and communities that have been positively impacted.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h4 className="text-xl font-bold mb-2">{story.title}</h4>
                <p className="text-gray-600">{story.story}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Sign Up to Get Involved</h3>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="How would you like to contribute?"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            ></textarea>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
   </div>
  );
};

export default GetInvolved;
