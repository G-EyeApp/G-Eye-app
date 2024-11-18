// EnvironmentalImpactVideo.js
import React from 'react';

const Video = () => {
  return (
    <section className="bg-green-50 py-10 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-6">
         Evidence of Galamsey's Impact
        </h2>
        <p className="text-green-700 mb-6">
          Witness the environmental degradation caused by illegal mining and the need for change.
        </p>
       
         <div className="video-container shadow-lg ">
                <video controls autoPlay loop muted width="100%" height="480">
                    <source src="video/galamsey.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h4 className='font-semibold text-slate-500'>Video Source: Joy News</h4>
      </div>
    </section>
  );
};

export default Video;
