import mysql from 'mysql2/promise';
import 'dotenv/config'; // if using .env

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'shortline.proxy.rlwy.net',
      port: 30346,
      user: 'root',
      password: 'gPUXMLcGrOoQhYMbsabxqfcMMvIhYPSb',
      database: 'railway',
    });

    const [rows] = await connection.query('SELECT 1 + 1 AS result');
    console.log('✅ Connected! Result:', rows[0].result);
    await connection.end();
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

testConnection();
