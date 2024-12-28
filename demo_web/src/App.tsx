// src/App.tsx
import './App.css';
import Navbar from './components/navbar/Navbar.tsx';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '64px' }}>
        <h1>Welcome to MyApp</h1>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
}

export default App;
