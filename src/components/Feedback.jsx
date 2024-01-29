import React, { useState } from 'react';

const FeedbackSurvey = () => {
  const [rating, setRating] = useState(5); // Default rating
  const [comments, setComments] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted:", { rating, comments });
    // You can send the feedback data to a server or perform additional actions
    setRating(5); // Reset the rating after submission
    setComments('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md bg-gradient-to-r from-cyan-500 to-blue-500">
      <h2 className="text-2xl font-semibold mb-4">Feedback Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rate your experience:
          </label>
          <div className="flex items-center ml-12">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleRatingChange(value)}
                className={`${
                  value <= rating ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...' : 'bg-gray-300'
                } text-white py-2 px-4 mx-1 rounded-md`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Additional comments:
          </label>
          <textarea
            className="w-full p-2 border rounded-md"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackSurvey;
