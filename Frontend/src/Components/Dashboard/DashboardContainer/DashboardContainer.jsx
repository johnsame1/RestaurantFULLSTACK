import React, { useState, useEffect } from 'react';
import './DashboardContainer.css';
import axiosInstance from '../../../axiosInstance/axiosInstance';
import { CiApple, CiBurger } from 'react-icons/ci';
import { FaRegUser, FaUser, FaUtensils } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function DashboardContainer() {
  const [Data, setData] = useState({
    usersCount: 0,
    blogsCount: 0,
    menusCount: 0,
  });
  const [users, setUsers] = useState([]);
  const [tables, setTables] = useState([]);
  const TOKEN = localStorage.getItem('token');

  const getDashboardStats = async () => {
    try {
      const response = await axiosInstance.get('/api/dashboard/stats', {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      const { usersCount, blogsCount, menusCount, users } = response.data.data;
      setData({ usersCount, blogsCount, menusCount });
      setUsers(users);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  const getTable = async () => {
    try {
      const response = await axiosInstance.get('/api/Table', {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      const tableData =
        response.data?.data?.tables || response.data?.data || [];
      setTables(tableData);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  useEffect(() => {
    getDashboardStats();
    getTable();
  }, []);

  const icons = [
    <FaRegUser />,
    <FaUser />,
    <CiBurger />,
    <CiApple />,
    <FaUtensils />,
  ];
  const bgColors = ['#CBF6F4', '#FFEEDC', '#FFE0E4', '#D3ECB7', '#D9D5F1'];
  const iconColors = ['#39A2AB', '#E88B23', '#FF6A75', '#47970E', '#8C6EFF'];

  const stats = [
    { label: 'Users', value: Data.usersCount },
    { label: 'Blogs', value: Data.blogsCount },
    { label: 'Menus', value: Data.menusCount },
  ];

  return (
    <div className="Dashboard">
      <div className="Joined">
        {stats.map((item, idx) => (
          <div className="users-Join-This-week" key={idx}>
            <div className="icon-With-users">
              <div
                className="icon"
                style={{
                  backgroundColor: bgColors[idx % bgColors.length],
                  borderRadius: '50%',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <h3
                  style={{
                    color: iconColors[idx % iconColors.length],
                    margin: 0,
                    fontSize: '1.5rem',
                  }}
                >
                  {icons[idx % icons.length]}
                </h3>
              </div>
              <div className="textUsers">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* جدول المستخدمين */}
      <div className="AllUser">
        <div className="OnlineUsers">
          <div className="header">
            <h2>ALL Users</h2>
            <Link to={'/dashboardadmin/UsersDashboard'} className="menu-option">
              View All
            </Link>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>CreatedAt</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id || index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.createdAt?.split('T')[0]}</td>
                    <td>{user.phone || 'No phone'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center' }}>
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* جدول الحجزات */}
      <div className="AllUser">
        <div className="OnlineUsers">
          <div className="header">
            <h2>ALL Tables</h2>
            <Link to={'/dashboardadmin/UsersDashboard'} className="menu-option">
              View All
            </Link>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>No.</th>
                <th>Number of Persons</th>
                <th>Number of Table</th>
                <th>Status</th>
                <th>CreatedAt</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {tables && tables.length > 0 ? (
                tables.map((user, index) => (
                  <tr key={user._id || index}>
                    <td>{index + 1}</td>
                    <td>{user.Number_Of_Persons}</td>
                    <td>{user.Number_Of_Table}</td>
                    <td>{user.status}</td>
                    <td>{user.createdAt?.split('T')[0]}</td>
                    <td>{user.Phone_Number || 'no phone'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center' }}>
                    No table bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardContainer;
