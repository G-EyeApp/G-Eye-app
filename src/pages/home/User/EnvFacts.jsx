import React, { useState, useEffect } from "react";

const environmentalFacts = [
  { 
    fact: "Illegal mining causes X% of river pollution in affected regions.",
    icon: "🌊" 
  },
  { 
    fact: "Deforestation from illegal mining threatens Y endangered species.",
    icon: "🌳" 
  },
  { 
    fact: "Mining-related emissions account for Z% of local air pollution.",
    icon: "🏭" 
  },
  { 
    fact: "Every year, illegal mining disrupts thousands of hectares of forest.",
    icon: "🌱" 
  },
];

const EnvFacts = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % environmentalFacts.length);
    }, 4000); // Change fact every 4 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center h-48 bg-green-900 rounded-lg shadow-lg p-6">
      <div className="text-center transition-opacity duration-500 ease-in-out">
        <div className="text-5xl mb-2">{environmentalFacts[currentFactIndex].icon}</div>
        <p className="text-lg text-green-100 font-semibold">
          {environmentalFacts[currentFactIndex].fact}
        </p>
      </div>
    </div>
  );
};

export default EnvFacts;
