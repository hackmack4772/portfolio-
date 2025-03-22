# Portfolio Admin Panel

This admin panel provides a secure interface to manage your portfolio website content. It uses Firebase for authentication and data storage.

## Features

- 🔒 Secure login with Firebase Authentication
- 🎨 Color scheme management (CSS variables)
- 📝 Content management for different portfolio sections
- 🖼️ Image upload with Firebase Storage
- 📱 Responsive design for desktop and mobile
- 🔄 Real-time data synchronization
- 📊 Skills management with proficiency levels
- 📁 Project portfolio management

## Setup Instructions

1. Install required dependencies:
   ```
   npm install firebase react-router-dom
   ```

2. Set up a Firebase project:
   - Create a new project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firebase Authentication (Email/Password)
   - Create Firestore Database
   - Set up Firebase Storage

3. Add your Firebase configuration:
   - Update the `firebaseConfig` object in `src/admin/utils/firebase.js`

4. Run the initial data setup script:
   - Uncomment the `setupInitialData()` line in `src/admin/utils/setupInitialData.js`
   - Run the script once using:
     ```
     node -r esm src/admin/utils/setupInitialData.js
     ```
   - Comment the line again after successful execution

5. Create an admin user in Firebase Authentication

6. Add the admin panel to your application routes:
   - Update your main app routes to include the admin panel (see `src/admin/utils/integration.js` for examples)

## Usage

1. Navigate to `/admin` route in your application
2. Login with your admin credentials
3. Use the dashboard to manage your portfolio content
4. Changes are saved to Firebase and reflected on your portfolio website

## Structure

- `src/admin/App.jsx` - Main admin application with routing
- `src/admin/components/` - All admin panel components
- `src/admin/styles/` - CSS styles for the admin panel
- `src/admin/utils/` - Utility functions, Firebase setup, etc.

## Security

The admin panel is protected by Firebase Authentication. Make sure to:
- Keep your Firebase API keys private
- Set up proper Firebase Security Rules for Firestore and Storage
- Use environment variables for sensitive information in production 