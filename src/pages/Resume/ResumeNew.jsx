import React, { useEffect, useState } from "react";
import { Download, FileText, ExternalLink } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import pdfFallback from "../../Assets/resume.pdf";
import { useLoading } from "../../Context/LoadingContext";
import HelmetWrapper from "../../components/HelmetWrapper";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import ActionButton from "../../components/ui/ActionButton";

function ResumeNew() {
  const { handleLoading } = useLoading();
  const [isMobile, setIsMobile] = useState(false);
  const [resumeUrl, setResumeUrl] = useState(pdfFallback);

  useEffect(() => {
    handleLoading(false);

    // Simple check to detect if screen is mobile-sized
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [handleLoading]);

  useEffect(() => {
    const fetchResumeUrl = async () => {
      try {
        const contactSnap = await getDoc(doc(db, "content", "contact"));
        if (contactSnap.exists()) {
          const cData = contactSnap.data();
          if (cData.resumeURL && cData.resumeURL.trim().startsWith("http")) {
            setResumeUrl(cData.resumeURL.trim());
          }
        }
      } catch (err) {
        console.error("Error fetching resume URL from Firestore:", err);
      }
    };
    fetchResumeUrl();
  }, []);

  return (
    <SectionWrapper id="resume-section" className="pt-28 pb-16 md:pb-24" spacing="none">
      <HelmetWrapper>
        <title>Curriculum Vitae | Portfolio</title>
        <meta name="description" content="View or download my resume outlining my engineering skills and work history." />
      </HelmetWrapper>

      {/* Background soft glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-8">
        
        {/* Page Heading */}
        <SectionTitle 
          subtitle="Curriculum Vitae" 
          title="My" 
          highlight="Resume" 
          description="View or download my resume outlining my engineering skills and work history."
        />

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ActionButton
            href={resumeUrl}
            download="Aamir_Saleem_Lone_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            <Download className="w-4.5 h-4.5" />
            <span>Download CV</span>
          </ActionButton>
          
          <ActionButton
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <ExternalLink className="w-4.5 h-4.5 text-primary" />
            <span>View Fullscreen</span>
          </ActionButton>
        </div>

        {/* PDF Viewer Frame */}
        <div className="w-full glass-panel p-2.5 md:p-4 rounded-3xl border border-border-base/50 shadow-2xl relative overflow-hidden max-h-[85vh]">
          {isMobile ? (
            /* Mobile Fallback: Direct visual card */
            <div className="flex flex-col items-center justify-center py-20 text-center gap-4 px-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <FileText className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold">Resume Preview</h3>
                <p className="text-xs text-text-muted max-w-xs leading-relaxed">
                  For the best viewing experience on mobile devices, please open the PDF in fullscreen or download it directly using the buttons above.
                </p>
              </div>
              <ActionButton
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-2"
              >
                <span>Open Preview Link</span>
              </ActionButton>
            </div>
          ) : (
            /* Desktop/Tablet: Native Embed */
            <iframe
              src={resumeUrl.endsWith(".pdf") ? `${resumeUrl}#toolbar=0` : resumeUrl}
              className="w-full h-[650px] md:h-[750px] rounded-2xl border border-border-base/30 bg-bg-sub/10"
              title="Aamir Lone Resume Document Viewer"
            />
          )}
        </div>

      </div>
    </SectionWrapper>
  );
}

export default ResumeNew;
