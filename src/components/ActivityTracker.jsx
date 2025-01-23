import React, { useEffect } from "react";
import { db, addDoc, collection } from "../config/firebase"; // Adjust the path to your firebase config file

// Function to fetch IP address and store it in localStorage
const getIPAddress = async () => {
  let getIp = localStorage.getItem("ip");
  let ipaddress = "";

  if (getIp) {
    ipaddress = getIp;
  } else {
    await fetch("https://api.ipify.org?format=json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        ipaddress = data?.ip ? data?.ip : "";
        localStorage.setItem("ip", ipaddress);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  return ipaddress;
};

const ActivityTracker = () => {
  useEffect(() => {
    const trackUserActivity = async () => {
      const userAgent = navigator.userAgent;
      const pageURL = window.location.href;
      const userIP = await getIPAddress();
      const activityData = {
        userAgent,
        ip: userIP,
        pageURL,
        timestamp: new Date().toISOString(),
      };
      try {
        await addDoc(collection(db, "userActivities"), activityData);
      } catch (error) {
        console.error("Error tracking user activity:", error);
      }
    };

    trackUserActivity();
  }, []); // Runs once when the component mounts

  return null; // The component doesn't render anything on the UI
};

export default ActivityTracker;
