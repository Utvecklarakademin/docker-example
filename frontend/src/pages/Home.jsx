import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-400 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to the FastAPI Demo</h1>
        <p className="text-lg">
          Explore the backend-powered application with a beautiful UI.
        </p>
      </div>
    </div>
  );
};

export default Home;
