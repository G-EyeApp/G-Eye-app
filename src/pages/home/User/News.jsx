const News = () => {
  const stories = [
    {
      title: "Illegal Mine Shutdown",
      description: "Through local reports, an illegal mining operation was shut down, improving water quality in the area.",
    },
    {
      title: "Community Health Improvement",
      description: "Several community health issues were resolved after illegal mining activities were halted.",
    },
    {
      title: "Environmental Restoration Efforts",
      description: "Forest and land restoration projects have been initiated in previously mined areas.",
    },
  ];

  return (
    <div className="bg-green-50 p-6 rounded-md shadow-md text-left">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">Impact Stories</h2>
      {stories.map((story, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold text-green-700">{story.title}</h3>
          <p className="text-gray-700">{story.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
