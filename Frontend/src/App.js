import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import About from './Pages/About.jsx';
import Menue from './Pages/Menu.jsx';
import BookTable from './Components/BookTable/BookTable.jsx';
import AUTH from './Components/Login/AUTH.jsx';
import './App.css';
import Blogs from './Components/Blogs/Blogs.jsx';
import SingleBlogs from './Components/SingleBlogs/SingleBlogs.jsx';
import Contact from './Components/Contact/Contact.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './Components/Loading/Scrolltop.jsx';
import DashboardAdmin from './Components/Dashboard/DashboardAdmin/DashboardAdmin.jsx';
import DashboardContainer from './Components/Dashboard/DashboardContainer/DashboardContainer.jsx';
import UsersDashboard from './Components/Dashboard/UsersDashboard/UsersDashboard.jsx';
import BlogsDashboard from './Components/Dashboard/Blogs/Blogs.jsx';
import Table from './Components/Dashboard/Table/TableUser.jsx';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ScrollToTop />
        <ToastContainer />
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AUTH />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menue />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<SingleBlogs />} />

          <Route path="/dashboardadmin" element={<DashboardAdmin />}>
            <Route
              index
              element={<Navigate to="dashboardcontainer" replace />}
            />
            <Route path="dashboardcontainer" element={<DashboardContainer />} />
            <Route path="blogsdashboard" element={<BlogsDashboard />} />
            <Route path="UsersDashboard" element={<UsersDashboard />} />
            <Route path="menu" element={<Menue />} />

            <Route path="tableDashboard" element={<Table />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
