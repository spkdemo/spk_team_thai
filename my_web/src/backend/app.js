import express from 'express';
import mysql from 'mysql2/promise'; // ใช้ 'promise' สำหรับ async/await
import cors from 'cors';

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

(async () => {
  try {
    // Create MySQL connection
    const db = await mysql.createConnection({
      host: 'localhost',
      user: 'root', // เปลี่ยนตามการตั้งค่า
      password: '', // เปลี่ยนตามการตั้งค่า
      database: 'my_web',
    });

    console.log('Connected to MySQL database');

    // API to get menu data
    app.get('/api/menu', async (req, res) => {
      try {
        const [results] = await db.execute('SELECT id, name, url, program FROM menu_items'); // ใช้ execute() แบบ async
        res.json(results);
      } catch (err) {
        console.error('Error fetching menu data:', err);
        res.status(500).json({ error: 'Failed to fetch menu data' });
      }
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
})();
