import React, { useEffect, useState } from "react";
import { db } from "../../src/config/firebase"; // Firebase setup
import { collection, onSnapshot } from "firebase/firestore";

// CSS object
const styles = {
  wrapper: {
    fontFamily: "'Prata', serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    height: "100vh",
    color: "#61dafb",
  },
  text: {
    width: "30vw",
  },
  notice: {
    fontSize: "2vw",
    marginBottom: "1vw",
  },
  number: {
    fontSize: "6vw",
  },
};

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorData = () => {
      // Firestore collection reference
      const userActivitiesCollection = collection(db, "userActivities");

      // Real-time snapshot listener
      const unsubscribe = onSnapshot(userActivitiesCollection, (snapshot) => {
        const visitorCount = snapshot.size; // Get the total number of documents
        setVisitorCount(visitorCount);
        animateValue("visitors", 0, visitorCount, 1000); // Animate the counter
      });

      return () => unsubscribe(); // Clean up listener
    };

    fetchVisitorData();
  }, []);

  // Function to animate the number
  const animateValue = (id, start, end, duration) => {
    const obj = document.getElementById(id);
    const range = end - start;
    const minTimer = 50;
    let stepTime = Math.max(Math.floor(duration / range), minTimer);

    let startTime = new Date().getTime();
    const endTime = startTime + duration;
    let timer;

    const run = () => {
      const now = new Date().getTime();
      const remaining = Math.max((endTime - now) / duration, 0);
      const value = Math.round(end - remaining * range);
      obj.innerHTML = Number(value).toLocaleString("en-US");
      if (value === end) {
        clearInterval(timer);
      }
    };

    timer = setInterval(run, stepTime);
    run();
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.text}>
        <div style={styles.notice}>Amount of visitors</div>
        <div id="visitors" style={styles.number}>
          {visitorCount.toLocaleString("en-US")}
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
