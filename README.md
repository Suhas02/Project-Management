## Project Management App

A full-stack project management application built with Node.js and MongoDB.

### Features

- User authentication with JWT tokens
- Project creation and management
- Real-time notifications
- Email notifications via Mailtrap
- CORS enabled for frontend integration

### Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (Access & Refresh tokens)
- **Email Service**: Mailtrap SMTP
- **Port**: 8000

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Setup Environment Variables**
   - Create a `.env` file in the project root
   - Copy the configuration from `.env.example` (if available)
   - Add your configuration:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=8000
     CORS_ORIGIN=*
     ACCESS_TOKEN_SECRET=your_secret_key
     ACCESS_TOKEN_EXPIRY=1d
     REFRESH_TOKEN_SECRET=your_secret_key
     REFRESH_TOKEN_EXPIRY=10d
     MAILTRAP_SMTP_HOST=sandbox.smtp.mailtrap.io
     MAILTRAP_SMTP_PORT=2525
     MAILTRAP_SMTP_USER=your_mailtrap_user
     MAILTRAP_SMTP_PASSWORD=your_mailtrap_password
     FORGOT_PASSWORD_REDIRECT_URL=http://localhost:3000/forgot-password
     ```

3. **Run the Application**
   ```bash
   npm run dev      # Development mode
   npm run build    # Build for production
   npm start        # Start production server
   ```

### Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes and commit with clear messages
3. Push to your branch and open a pull request

### Important Notes

- **Never commit `.env` file** - It contains sensitive credentials
- **`.env` is in `.gitignore`** - Make sure it stays that way
- **Each developer** should create their own `.env` file locally
