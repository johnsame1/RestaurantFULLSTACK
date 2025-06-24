import React, { useState, useContext } from 'react';
import './UsersDashboard.css';
import Loading from '../../Loading/Scrolltop';
import { UsersContext } from '../../context/AlluserContext';

function UsersDashboard() {
  const { users, loading } = useContext(UsersContext);
  const [selectedImage, setSelectedImage] = useState(null);
  console.log('🟩 users: ', users);

  return (
    <>
      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage} alt="User" />
          </div>
        </div>
      )}
      <div className="Online-Users">
        <h2>Online Users</h2>
        {loading ? (
          <Loading />
        ) : (
          <table className="Users-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>CreatedAt</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : 'no date'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default UsersDashboard;
