/**
 * Utility for handling Cloudinary image uploads
 */

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET'; // Set this to your unsigned upload preset

/**
 * Uploads an image to Cloudinary
 * @param {File} imageFile - The image file to upload
 * @param {Function} progressCallback - Optional callback function for upload progress
 * @returns {Promise<string>} - URL of the uploaded image
 */
export const uploadToCloudinary = async (imageFile, progressCallback = null) => {
  try {
    // Create form data for the upload
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    
    // Use XMLHttpRequest for progress tracking
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      // Set up progress tracking
      if (progressCallback) {
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            progressCallback(progress);
          }
        };
      }
      
      // Handle completion
      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response.secure_url);
        } else {
          reject(new Error('Upload failed'));
        }
      };
      
      // Handle errors
      xhr.onerror = () => {
        reject(new Error('Network error occurred during upload'));
      };
      
      // Open and send the request
      xhr.open('POST', CLOUDINARY_UPLOAD_URL, true);
      xhr.send(formData);
    });
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

/**
 * Deletes an image from Cloudinary using a Firebase Function
 * @param {string} imageUrl - The URL of the image to delete
 * @returns {Promise<void>}
 */
export const deleteFromCloudinary = async (imageUrl) => {
  try {
    // Extract the public_id from the URL
    const urlParts = imageUrl.split('/');
    const filenameWithExtension = urlParts[urlParts.length - 1];
    const publicId = filenameWithExtension.split('.')[0];
    
    // Call the Firebase Function to delete the image
    // This requires a Firebase Function to be set up (see functions/index.js)
    const response = await fetch('/api/deleteImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ publicId }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete image');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw error;
  }
};

/**
 * Gets image dimensions from a Cloudinary URL
 * @param {string} imageUrl - The URL of the image
 * @returns {Promise<Object>} - Object with width and height properties
 */
export const getImageDimensions = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      });
    };
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    img.src = imageUrl;
  });
};

export default {
  uploadToCloudinary,
  deleteFromCloudinary,
  getImageDimensions
}; 