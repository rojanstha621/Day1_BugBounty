import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method Not Allowed' });

  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Check if email already exists
    const [existing] = await db.execute('SELECT * FROM users WHERE email = ?', [
      email,
    ]);
    if (existing.length > 0) {
      await db.end();
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Insert user (password stored in plain text ⚠️)
    await db.execute(
      'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
      [email, username, password]
    );

    await db.end();

    res.status(200).json({ message: 'Signup successful' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
}
