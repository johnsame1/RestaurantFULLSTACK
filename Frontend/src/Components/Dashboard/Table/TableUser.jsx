import React, { useState, useEffect } from 'react';
import './TableUser.css';
import { RiCheckLine } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import axiosInstance from '../../../axiosInstance/axiosInstance';
import { toast } from 'react-toastify';

function Requestsusers() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');
  const TOKEN = localStorage.getItem('token');

  const getRequests = async () => {
    try {
      let url = '/api/Table';
      if (filter === 'Accepted') url += '?status=Accepted';
      else if (filter === 'Rejected') url += '?status=Rejected';
      else if (filter === 'Pending') url += '?status=Pending';

      const response = await axiosInstance.get(url, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });

      setUsers(response.data.data.tables || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to load requests');
    }
  };

  useEffect(() => {
    getRequests();
  }, [filter]);

  const handleAccept = (_id, status) => {
    axiosInstance
      .patch(
        `/api/Table/updateStatus/${_id}`,
        { status },
        {
          headers: { Authorization: `Bearer ${TOKEN}` },
        }
      )
      .then((response) => {
        toast.success(response?.data?.message || 'Status updated!');
        getRequests();
      })
      .catch((error) => {
        console.error(error);
        toast.error(error?.response?.data?.message || 'Update failed');
      });
  };

  return (
    <>
      <div className="Online-Appoitment">
        <h2>Online Requests</h2>
        <div className="filter-buttons">
          {['all', 'Pending', 'Accepted', 'Rejected'].map((f) => (
            <button
              key={f}
              className={filter === f ? 'filters active' : 'filters'}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <table className="appointments-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Number of Persons</th>
              <th>Number of Table</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((req, index) => (
              <tr key={req._id || index}>
                <td>{index + 1}</td>
                <td>{req.Number_Of_Persons}</td>
                <td>{req.Number_Of_Table}</td>
                <td>{req.createdAt?.split('T')[0]}</td>
                <td>{req.status}</td>
                <td>{req.Phone_Number || 'no phone'}</td>
                <td className="action">
                  <span
                    className="Accept"
                    onClick={() => handleAccept(req._id, 'Accepted')}
                    title="Accept"
                  >
                    <RiCheckLine
                      size={24}
                      style={{ color: 'green', cursor: 'pointer' }}
                    />
                  </span>
                  <span
                    className="Cancel"
                    onClick={() => handleAccept(req._id, 'Rejected')}
                    title="Cancel"
                    style={{ marginLeft: '10px' }}
                  >
                    <MdCancel
                      size={24}
                      style={{ color: 'red', cursor: 'pointer' }}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Requestsusers;
