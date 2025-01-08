// src/components/navbar/Navbar.tsx
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavbarProps, menuData, MenuItem } from './Navbar.component';

const Navbar = ({ setIsSidebarOpen, isSidebarOpen }: NavbarProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle Sidebar open/close
  };

  const toggleSubMenu = (menuLabel: string) => {
    setOpenSubMenu((prev) => (prev === menuLabel ? null : menuLabel));
  };

  const renderMenu = (menu: MenuItem) => (
    <Box key={menu.label} sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Main Menu */}
      <Button
        color="inherit"
        sx={{
          justifyContent: 'flex-start', // Align text to the left
          width: '100%', // Full width
          height: '48px', // Consistent height for buttons
          backgroundColor: openSubMenu === menu.label ? '#555' : 'transparent', // Change color when active
          color: openSubMenu === menu.label ? '#fff' : 'inherit', // Change text color when active
          '&:hover': {
            backgroundColor: '#444',
          },
          '&:focus': { outline: 'none' },
          '&:active': { backgroundColor: 'transparent' },
        }}
        onClick={() => menu.subMenu && toggleSubMenu(menu.label)}
      >
        {menu.label}
      </Button>
      {/* Sub Menu */}
      {menu.subMenu && openSubMenu === menu.label && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#444', // Slightly different color for SubMenu
          }}
        >
          {menu.subMenu.map((subMenu) => (
            <Button
              key={subMenu.label}
              color="inherit"
              sx={{
                justifyContent: 'flex-start', // Align text to the left
                width: '100%', // Full width
                height: '48px', // Consistent height
                '&:hover': { backgroundColor: '#555' },
                '&:focus': { outline: 'none' },
                '&:active': { backgroundColor: 'transparent' },
              }}
            >
              {subMenu.label}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" 
              color="primary"
              sx={{height: '64px',}}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        sx={{
          position: 'fixed',
          top: '64px',
          left: 0,
          width: 250,
          height: '100%',
          backgroundColor: '#333',
          color: 'white',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          zIndex: 1000,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {menuData.map((menu) => renderMenu(menu))}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
