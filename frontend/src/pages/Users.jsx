import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users") // Update the API endpoint for users
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Users
      </h1>
      {users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {user.username}
              </h2>
              <p className="text-gray-600">User ID: {user.username}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No users available.</p>
      )}
    </div>
  );
};

export default Users;
