// src/App.tsx
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '70px', padding: '1rem' }}>
        <h1>Welcome to MyApp</h1>
        <p>This is the main content area.</p>
      </div>
    </>
  );
}

export default App;
