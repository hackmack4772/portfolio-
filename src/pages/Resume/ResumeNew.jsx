import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
<<<<<<< HEAD:src/pages/Resume/ResumeNew.jsx
import { useLoading } from "../../Context/LoadingContext";
=======
import { useLoading } from "../../LoadingContext";

>>>>>>> 0a572b633cd7c1a7f70a15220ae41eaeceb168de:src/components/Resume/ResumeNew.jsx
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import "./resume.css"

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  const { handleLoading } = useLoading();

  useEffect(() => {
    handleLoading(false);

    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Adjust scale based on screen width
  const getScale = () => {
    if (width > 1200) return 1.5; // Large screens
    if (width > 768) return 1.2; // Tablets
    return 0.8; // Mobile
  };

  return (
    <div>
<<<<<<< HEAD:src/pages/Resume/ResumeNew.jsx
      <Container fluid className="resume-section">
=======
      <Container fluid className="resume-section" style={{ overflowX: "hidden" }}>
        <Particle />
>>>>>>> 0a572b633cd7c1a7f70a15220ae41eaeceb168de:src/components/Resume/ResumeNew.jsx

        {/* Scrollable Resume Viewer (No horizontal overflow) */}
        <div
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Document
            file={pdf}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            className="d-flex flex-column align-items-center"
          >
            {Array.from({ length: numPages }, (_, index) => (
              <Page key={index} pageNumber={index + 1} scale={getScale()} />
            ))}
          </Document>
        </div>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
