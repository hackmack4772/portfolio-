# Portfolio Admin Panel Setup

This document provides complete instructions for setting up the portfolio admin panel with Firebase and Cloudinary.

## Prerequisites

- Node.js and npm installed
- Firebase account
- Cloudinary account

## Step 1: Firebase Setup

1. **Create a Firebase project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard

2. **Enable Firebase Authentication**:
   - In your Firebase project, go to "Authentication" in the left sidebar
   - Click "Get started"
   - Enable "Email/Password" provider
   - Create an admin user in the "Users" tab

3. **Set up Firestore Database**:
   - Go to "Firestore Database" in the left sidebar
   - Click "Create database"
   - Start in production mode
   - Choose a location close to your target audience

4. **Add Firebase to your web app**:
   - In the Firebase console, click the gear icon and select "Project settings"
   - In the "Your apps" section, click the web icon (</>) to register your app
   - Follow the setup instructions to get your Firebase config object
   - Update `src/admin/utils/firebase.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 2: Cloudinary Setup

1. **Create a Cloudinary account**:
   - Go to [Cloudinary](https://cloudinary.com/) and sign up
   - After signing in, you'll be taken to your dashboard

2. **Configure upload preset**:
   - Go to Settings > Upload
   - Scroll down to "Upload presets"
   - Click "Add upload preset"
   - Set "Signing Mode" to "Unsigned"
   - Configure any other upload options as needed
   - Save the preset name

3. **Update Cloudinary configuration**:
   - Open `src/admin/utils/cloudinary.js`
   - Replace `YOUR_CLOUD_NAME` with your Cloudinary cloud name
   - Replace `YOUR_UPLOAD_PRESET` with the preset name you created

```javascript
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET';
```

## Step 3: Firebase Functions Setup

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase Functions**:
   ```bash
   firebase init functions
   ```
   - Select your Firebase project
   - Choose JavaScript as the language
   - Select No for ESLint
   - Select Yes to install dependencies

4. **Set up Cloudinary config in Firebase Functions**:
   ```bash
   firebase functions:config:set cloudinary.cloud_name="YOUR_CLOUD_NAME" cloudinary.api_key="YOUR_API_KEY" cloudinary.api_secret="YOUR_API_SECRET"
   ```

5. **Deploy Firebase Functions**:
   ```bash
   firebase deploy --only functions
   ```

6. **Update API endpoint**:
   - After deployment, update the `API_BASE_URL` in `src/utils/portfolioData.js` with your Firebase Functions URL

## Step 4: Setup Initial Data

1. **Run the initial data setup script**:
   - Open `src/admin/utils/setupInitialData.js`
   - Uncomment the line: `// setupInitialData();`
   - Run the script once using Node.js
   - Comment the line again after successful execution

## Step 5: Integrate Admin Panel with Your Portfolio

1. **Update your main application's routing**:
   - In your main app component where you define routes, add the admin routes:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminApp from './admin/App';

const Root = () => {
  return (
    <Router>
      <Routes>
        {/* Main portfolio routes */}
        <Route path="/" element={<App />}>
          {/* Your existing routes */}
        </Route>
        
        {/* Admin panel routes */}
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </Router>
  );
};

export default Root;
```

2. **Connect your portfolio to Firebase data**:
   - In your main App component, import the utility functions:

```jsx
import { useEffect, useState } from 'react';
import { getAllPortfolioContent, applyColorScheme } from './utils/portfolioData';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPortfolioContent();
        setPortfolioData(data);
        
        // Apply color scheme from Firebase to CSS variables
        applyColorScheme(data.colors);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  
  return (
    // Your portfolio app using the data from Firebase
  );
}
```

## Security

1. **Set up Firestore Security Rules**:
   - Go to "Firestore Database" > "Rules" tab
   - Update the rules to secure your data:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write
    match /{document=**} {
      allow read;
      allow write: if request.auth != null;
    }
  }
}
```

2. **Configure CORS for Firebase Functions**:
   - The functions are already set up with CORS, but make sure to restrict origin in production

## Troubleshooting

- **Function deployment fails**: Make sure you have the right billing plan for Firebase
- **Cloudinary upload fails**: Check your upload preset and CORS settings in Cloudinary
- **Firebase Authentication issues**: Verify your Firebase config and authentication rules

## Next Steps

- Customize the admin panel UI to better match your portfolio's design
- Add more content management sections as needed
- Set up CI/CD to automatically deploy your portfolio when content changes 