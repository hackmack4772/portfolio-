import React, { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query, doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Star, FileCheck } from "lucide-react";
import { db } from "../../config/firebase";
import HelmetWrapper from "../../components/HelmetWrapper";
import { useLoading } from "../../Context/LoadingContext";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import TimelineItem from "../../components/ui/TimelineItem";
import GlowCard from "../../components/ui/GlowCard";
import FloatingBadge from "../../components/ui/FloatingBadge";

function Education() {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let list = [];
        
        // 1. Try to fetch from content/about
        const aboutRef = doc(db, "content", "about");
        const aboutSnap = await getDoc(aboutRef);
        if (aboutSnap.exists() && aboutSnap.data().education && aboutSnap.data().education.length > 0) {
          list = aboutSnap.data().education.map((edu, idx) => ({
            id: `about-edu-${idx}`,
            title: edu.degree,
            institution: edu.institution,
            year: edu.year,
            score: edu.degree.includes(",") ? edu.degree.split(",").pop().trim() : "Completed"
          }));
        }
        
        // 2. Fallback to educationData collection if list is empty
        if (list.length === 0) {
          const educationRef = collection(db, "educationData");
          const educationQuery = query(educationRef, orderBy("created", "desc"));
          const educationSnapshot = await getDocs(educationQuery);
          
          list = educationSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        }

        // 3. Fallback to hardcoded details if still empty
        if (list.length === 0) {
          list = [
            { id: "hardcoded-1", title: "Master of Computer Applications (MCA)", institution: "Swami Vivekanand Institute of Engineering & Technology", year: "2023 – 2025", score: "CGPA: 8.0" },
            { id: "hardcoded-2", title: "Bachelor of Computer Applications (BCA)", institution: "RIMT University, Punjab", year: "2019 – 2022", score: "CGPA: 9.08" },
            { id: "hardcoded-3", title: "Higher Secondary Education", institution: "JKBOSE, Jammu & Kashmir", year: "2017 – 2019", score: "80.4%" },
          ];
        }

        setEducationData(list);
        setLoading(false);
        handleLoading(false);
      } catch (error) {
        console.error("Error fetching education data: ", error);
        // Fallback on error
        setEducationData([
          { id: "hardcoded-1", title: "Master of Computer Applications (MCA)", institution: "Swami Vivekanand Institute of Engineering & Technology", year: "2023 – 2025", score: "CGPA: 8.0" },
          { id: "hardcoded-2", title: "Bachelor of Computer Applications (BCA)", institution: "RIMT University, Punjab", year: "2019 – 2022", score: "CGPA: 9.08" },
        ]);
        setLoading(false);
        handleLoading(false);
      }
    };

    fetchData();
  }, [handleLoading]);

  // Extract statistics for the summary card
  const peakCgpa = "9.08";
  const mcaInstitution = "SVIET";
  const bcaInstitution = "RIMT University";

  return (
    <SectionWrapper id="education-section" className="pt-28 pb-16 md:pb-24" spacing="none">
      <HelmetWrapper>
        <title>Education | My Portfolio</title>
        <meta name="description" content="Academic background and professional certifications" />
      </HelmetWrapper>

      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      {/* Section Heading */}
      <SectionTitle 
        subtitle="Academic Journey" 
        title="Education" 
        highlight="Timeline" 
        description="A chronology of my formal computer application degrees and secondary schooling achievements"
      />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest animate-pulse">Loading Academic Records...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Summary Stats Card */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32 w-full text-left">
            <GlowCard glowColor="secondary" hoverGlow={false}>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border-base/20 pb-3">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Academic Profile</span>
                  <FloatingBadge label="verified" color="secondary" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                      <Trophy className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-text-muted uppercase">Peak Performance</h4>
                      <p className="text-sm font-bold text-text-base">CGPA {peakCgpa} (BCA Degree)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                      <BookOpen className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-text-muted uppercase">Primary Domain</h4>
                      <p className="text-sm font-bold text-text-base">Computer Applications</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                      <FileCheck className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-text-muted uppercase">Degrees Awarded</h4>
                      <p className="text-xs text-text-muted leading-relaxed font-semibold">
                        MCA ({mcaInstitution}) & BCA ({bcaInstitution})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>

            {/* Einstein quote card inside summary column */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 p-5 rounded-2xl border border-border-base/30 bg-bg-sub/10 font-mono text-[10px] sm:text-xs text-text-muted select-none text-center"
            >
              <div className="flex justify-center text-secondary">
                <Award className="w-5 h-5 animate-pulse" />
              </div>
              <blockquote className="italic leading-relaxed text-text-base font-sans">
                "Education is not the learning of facts, but the training of the mind to think."
              </blockquote>
              <cite className="uppercase tracking-wider text-[9px]">
                — Albert Einstein
              </cite>
            </motion.div>
          </div>

          {/* Right Column: Timeline nodes */}
          <div className="lg:col-span-8 relative border-l border-border-base/50 ml-2 sm:ml-4 pl-4 sm:pl-6 space-y-8 w-full text-left">
            {/* Timeline center line graphic */}
            <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

            {educationData.map((item, index) => (
              <TimelineItem
                key={item.id}
                title={item.title}
                institution={item.institution}
                year={item.year}
                score={item.score}
                idx={index}
              />
            ))}
          </div>

        </div>
      )}

    </SectionWrapper>
  );
}

export default Education;
