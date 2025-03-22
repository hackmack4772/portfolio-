const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const cloudinary = require('cloudinary').v2;

// Initialize Firebase Admin
admin.initializeApp();

// Configure Cloudinary
cloudinary.config({
  cloud_name: functions.config().cloudinary.cloud_name,
  api_key: functions.config().cloudinary.api_key,
  api_secret: functions.config().cloudinary.api_secret
});

// Get portfolio content
exports.getPortfolioContent = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      // Get all content from Firestore
      const db = admin.firestore();
      
      // Get About content
      const aboutDoc = await db.collection('content').doc('about').get();
      const about = aboutDoc.exists ? aboutDoc.data() : null;
      
      // Get Contact content
      const contactDoc = await db.collection('content').doc('contact').get();
      const contact = contactDoc.exists ? contactDoc.data() : null;
      
      // Get Color Scheme
      const colorsDoc = await db.collection('settings').doc('colors').get();
      const colors = colorsDoc.exists ? colorsDoc.data() : null;
      
      // Get Skills
      const skillsSnapshot = await db.collection('skills').orderBy('order').get();
      const skills = skillsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Group skills by category
      const skillsByCategory = skills.reduce((acc, skill) => {
        const category = skill.category || 'Other';
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
      }, {});
      
      // Get Projects
      const projectsSnapshot = await db.collection('projects').orderBy('order').get();
      const projects = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Return all data
      response.status(200).json({
        about,
        contact,
        colors,
        skillsByCategory,
        projects
      });
    } catch (error) {
      console.error('Error getting portfolio content:', error);
      response.status(500).json({ error: 'Error getting portfolio content' });
    }
  });
});

// Get specific content type
exports.getContent = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const contentType = request.query.type;
      if (!contentType) {
        return response.status(400).json({ error: 'Content type is required' });
      }
      
      const db = admin.firestore();
      let result;
      
      switch (contentType) {
        case 'about':
          const aboutDoc = await db.collection('content').doc('about').get();
          result = aboutDoc.exists ? aboutDoc.data() : null;
          break;
          
        case 'contact':
          const contactDoc = await db.collection('content').doc('contact').get();
          result = contactDoc.exists ? contactDoc.data() : null;
          break;
          
        case 'colors':
          const colorsDoc = await db.collection('settings').doc('colors').get();
          result = colorsDoc.exists ? colorsDoc.data() : null;
          break;
          
        case 'skills':
          const skillsSnapshot = await db.collection('skills').orderBy('order').get();
          const skills = skillsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          
          // Group skills by category
          result = skills.reduce((acc, skill) => {
            const category = skill.category || 'Other';
            if (!acc[category]) {
              acc[category] = [];
            }
            acc[category].push(skill);
            return acc;
          }, {});
          break;
          
        case 'projects':
          const projectsSnapshot = await db.collection('projects').orderBy('order').get();
          result = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          break;
          
        default:
          return response.status(400).json({ error: 'Invalid content type' });
      }
      
      response.status(200).json(result);
    } catch (error) {
      console.error(`Error getting ${request.query.type} content:`, error);
      response.status(500).json({ error: `Error getting ${request.query.type} content` });
    }
  });
});

// Delete an image from Cloudinary
exports.deleteImage = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      // Check if the request is a POST
      if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
      }
      
      // Get the public_id from the request body
      const { publicId } = request.body;
      if (!publicId) {
        return response.status(400).json({ error: 'publicId is required' });
      }
      
      // Delete the image from Cloudinary
      const result = await cloudinary.uploader.destroy(publicId);
      
      response.status(200).json(result);
    } catch (error) {
      console.error('Error deleting image from Cloudinary:', error);
      response.status(500).json({ error: 'Error deleting image from Cloudinary' });
    }
  });
});

// Webhook to update color scheme in the frontend
exports.updateColorScheme = functions.firestore
  .document('settings/colors')
  .onUpdate(async (change, context) => {
    // This function is triggered whenever the colors document is updated
    // You can add logic here to update your frontend, such as
    // sending a notification or triggering a rebuild of your site
    
    const newColors = change.after.data();
    console.log('Color scheme updated:', newColors);
    
    // Add any additional logic here
    
    return null;
  }); 