import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtm9WpPn-WT0IFVKOW6Xs-dcX474oW16o",
  authDomain: "hackmack4772.firebaseapp.com",
  projectId: "hackmack4772",
  storageBucket: "hackmack4772.firebasestorage.app",
  messagingSenderId: "38931846023",
  appId: "1:38931846023:web:2ed96aa0b1912c0fa6b922",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkDatabase() {
  console.log("=== Checking content/about ===");
  try {
    const aboutSnap = await getDoc(doc(db, "content", "about"));
    if (aboutSnap.exists()) {
      console.log("content/about data:", JSON.stringify(aboutSnap.data(), null, 2));
    } else {
      console.log("content/about document does not exist!");
    }
  } catch (err) {
    console.error("Error fetching content/about:", err);
  }

  console.log("\n=== Checking content/contact ===");
  try {
    const contactSnap = await getDoc(doc(db, "content", "contact"));
    if (contactSnap.exists()) {
      console.log("content/contact data:", JSON.stringify(contactSnap.data(), null, 2));
    } else {
      console.log("content/contact document does not exist!");
    }
  } catch (err) {
    console.error("Error fetching content/contact:", err);
  }

  console.log("\n=== Checking skills collection ===");
  try {
    const skillsSnap = await getDocs(collection(db, "skills"));
    console.log(`Found ${skillsSnap.size} skills:`);
    skillsSnap.forEach(doc => {
      console.log(`- ${doc.id}:`, JSON.stringify(doc.data()));
    });
  } catch (err) {
    console.error("Error fetching skills:", err);
  }

  console.log("\n=== Checking educationData collection ===");
  try {
    const eduSnap = await getDocs(collection(db, "educationData"));
    console.log(`Found ${eduSnap.size} documents in educationData:`);
    eduSnap.forEach(doc => {
      console.log(`- ${doc.id}:`, JSON.stringify(doc.data()));
    });
  } catch (err) {
    console.error("Error fetching educationData:", err);
  }

  console.log("\n=== Checking hackmack/user_projects/projectsData ===");
  try {
    const hackDoc = doc(db, "hackmack", "user_projects");
    const projSnap = await getDocs(collection(hackDoc, "projectsData"));
    console.log(`Found ${projSnap.size} projects:`);
  } catch (err) {
    console.error("Error fetching projectsData:", err);
  }
}

checkDatabase().then(() => process.exit(0));
