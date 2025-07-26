export default function handler(req, res) {
    // WARNING: This is sensitive info leakage - DO NOT do in production!
    const sensitiveInfo = {
      db_host: process.env.DB_HOST,
      db_user: process.env.DB_USER,
      db_password: process.env.DB_PASSWORD,
      db_name: process.env.DB_NAME,
      secret_key: process.env.SECRET_KEY || 'default_secret',
    };
  
    res.status(200).json(sensitiveInfo);
  }
  