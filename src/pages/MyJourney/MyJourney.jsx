import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { db } from "../../config/firebase";
import SectionTitle from "../../components/ui/SectionTitle";

function TiltContainer({ children }) {
  const x = useMotionValue(150);
  const y = useMotionValue(150);

  const rotateX = useTransform(y, [0, 300], [15, -15]);
  const rotateY = useTransform(x, [0, 300], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const normalizedX = (mouseX / rect.width) * 300;
    const normalizedY = (mouseY / rect.height) * 300;
    
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(150);
    y.set(150);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative flex w-full cursor-pointer justify-center"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}

function MyJourney() {
  const [home2Data, setHome2Data] = useState({
    heading: "My Journey",
    introduction: "Loading journey details...",
    skills: "",
    hobbies: "",
    imageUrl: "",
  });

  const home2Ref = doc(db, "home", "home2");

  const fetchHome2Data = async () => {
    try {
      const docSnap = await getDoc(home2Ref);
      if (docSnap.exists()) {
        setHome2Data(docSnap.data());
      } else {
        console.log("No such home2 document!");
      }
    } catch (error) {
      console.error("Error fetching Home2 data: ", error);
    }
  };

  useEffect(() => {
    fetchHome2Data();
  }, []);

  const cleanIntroduction = (htmlString) => {
    if (!htmlString) return "";
    return htmlString.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, "").trim();
  };

  return (
    <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:gap-14">
      
      {/* Journey Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex min-w-0 flex-col"
      >
        <SectionTitle 
          subtitle="Biography" 
          title="Let me" 
          highlight="Introduce Myself" 
          description="A summary of my engineering background and technical expertise"
          align="left"
          className="mb-6 md:mb-8"
        />

        <div 
          className="my-journey-introduction flex max-w-4xl flex-col gap-4 text-left font-sans text-xs leading-relaxed text-text-muted md:text-sm"
          dangerouslySetInnerHTML={{ __html: cleanIntroduction(home2Data.introduction) }} 
        />
      </motion.div>

      {/* Journey Avatar 3D Tilt Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex w-full items-center justify-center lg:justify-end"
      >
        <TiltContainer>
          <div 
            style={{ transform: "translateZ(30px)" }}
            className="group relative h-64 w-64 overflow-hidden rounded-2xl bg-gradient-to-tr from-primary to-accent p-[1.5px] shadow-2xl md:h-72 md:w-72"
          >
            {/* Inner Image Frame */}
            <div className="absolute inset-0 bg-bg-base rounded-2xl overflow-hidden flex items-center justify-center">
              {home2Data.imageUrl ? (
                <img
                  src={home2Data.imageUrl}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Aamir Saleem Lone Avatar"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-card-base to-bg-sub flex items-center justify-center">
                  <span className="text-xs font-mono tracking-widest text-text-muted">AVATAR IMAGE</span>
                </div>
              )}
            </div>
            
            {/* Decorative border highlight */}
            <div className="absolute inset-0 border border-border-base/50 rounded-2xl pointer-events-none group-hover:border-accent/40 transition-colors duration-500" />
          </div>
        </TiltContainer>
      </motion.div>

    </div>
  );
}

export default MyJourney;
