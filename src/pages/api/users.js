export default function handler(req, res) {
  // WARNING: This leaks sensitive info — DO NOT expose publicly in production!
  const sensitiveInfo = {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      name: process.env.DB_NAME,
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'default_jwt_secret',
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    },
    apiKeys: {
      stripe: process.env.STRIPE_API_KEY || 'sk_test_...',
      sendgrid: process.env.SENDGRID_API_KEY || 'SG.xxxxxx',
      googleMaps: process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyxxxxxx',
    },
    app: {
      nodeEnv: process.env.NODE_ENV || 'development',
      secretKey: process.env.SECRET_KEY || 'default_secret',
      port: process.env.PORT || '3000',
    },
  };

  res.status(200).json(sensitiveInfo);
}
