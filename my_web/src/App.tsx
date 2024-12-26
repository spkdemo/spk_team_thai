// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound/NotFound'; // คอมโพเนนต์ NotFound

interface MenuItem {
  id: number;
  name: string;
  program?: string; // เปลี่ยนเป็น program
  url: string;
}

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // ดึงข้อมูลเมนูจากฐานข้อมูล (API)
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/menu'); // URL ของ API ที่ดึงข้อมูลเมนู
        const data = await response.json();
        setMenuItems(data); // เซ็ตข้อมูลเมนู
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };
    fetchMenuItems();
  }, []);

  const handleMenuItemSelect = (menuItem: MenuItem) => {
    console.log('Selected menu item:', menuItem);
  };

  // สร้างคอมโพเนนต์ dynamic ด้วย React.lazy()
  const getComponent = (programName: string) => {
    if (!programName) {
      return NotFound; // ถ้าไม่มีชื่อคอมโพเนนต์ ให้โหลด NotFound แทน
    }
    return React.lazy(() => import(`./components/${programName}/${programName}`).catch(() => import('./components/NotFound/NotFound')));
  };

  return (
    <Router>
      <Navbar menuItems={menuItems} onMenuItemSelect={handleMenuItemSelect} />
      <div style={{ marginTop: '70px', padding: '1rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* ใช้ map() เพื่อสร้าง Route จากเมนูที่ดึงมาจากฐานข้อมูล */}
            {menuItems.map((item) => {
              const Component = getComponent(item.program || ""); // รับชื่อโปรแกรมจากฐานข้อมูล
              return (
                <Route
                  key={item.id}
                  path={item.url}
                  element={<Component />} // เปลี่ยนหน้าเพจตามเมนูที่เลือก
                />
              );
            })}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
