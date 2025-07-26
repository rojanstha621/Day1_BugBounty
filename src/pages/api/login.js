import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, password } = req.body;

  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // Intentionally vulnerable query (SQL Injection possible)
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  try {
    const [rows] = await db.query(query);

    await db.end();

    if (rows.length > 0) {
      const user = rows[0];
      res.status(200).json({
        id: user.id,
        username: user.username,
        role: user.role || 'user',
        message: 'Login successful',
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    await db.end();
    res.status(500).json({ message: 'Database error', error: err.message });
  }
}
