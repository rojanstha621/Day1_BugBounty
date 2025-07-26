import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const { id } = req.query;

  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const [rows] = await db.execute('SELECT id, username, role FROM users WHERE id = ?', [id]);

  if (rows.length === 0) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(rows[0]);
}
