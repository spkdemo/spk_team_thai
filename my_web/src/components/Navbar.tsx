// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

interface MenuItem {
  id: number;
  name: string;
  url: string;
}

interface NavbarProps {
  menuItems: MenuItem[];
  onMenuItemSelect: (menuItem: MenuItem) => void;
}

function Navbar({ menuItems, onMenuItemSelect }: NavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link 
                to={item.url} 
                onClick={() => onMenuItemSelect(item)} // เมื่อคลิกให้ส่งข้อมูลไปที่ App.tsx
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
