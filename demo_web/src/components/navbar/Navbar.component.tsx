// src/components/navbar/Navbar.component.tsx

export interface NavbarProps {
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebarOpen: boolean;
  }
  
  export interface MenuItem {
    label: string;
    path?: string;
    subMenu?: MenuItem[];
  }
  
  export const menuData: MenuItem[] = [
    { label: 'Home', path: '/Home' },
    {
      label: 'Demo',
      subMenu: [
        { label: 'Button', path: '/Demo/Button' },
        { label: 'Input', path: '/Demo/Input' },
        { label: 'Theme', path: '/Demo/Theme' },
      ],
    },
    {
      label: 'Setting',
      subMenu: [{ label: 'Menu', path: '/SettingMenu' }],
    },
  ];
  