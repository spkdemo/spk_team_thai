import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // ใช้ useEffect เพื่อเพิ่ม/ลบ class ให้กับ body เมื่อ Sidebar เปิด/ปิด
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('body-with-sidebar');
    } else {
      document.body.classList.remove('body-with-sidebar');
    }
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="hamburger" onClick={toggleSidebar}>
            ☰
          </button>
          <a href="/" className="navbar-logo">MyApp</a>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
