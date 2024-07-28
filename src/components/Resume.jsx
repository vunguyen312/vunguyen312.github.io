import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import resume from "../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function Resume(){
    const [scale, setScale] = useState(0.04 * Math.sqrt(window.innerWidth) - 0.1);

    useEffect(() => {
        window.addEventListener("resize", () => setScale(0.04 * Math.sqrt(window.innerWidth) - 0.1));
        return () => 
            window.removeEventListener("resize", () => setScale(0.04 * Math.sqrt(window.innerWidth) - 0.1));
    }, []);

    return(
        <div>
            <Container fluid className="resume-section">
                <Button 
                className="download-button" 
                href={resume} 
                download="VuNguyen_Resume.pdf"
                >
                    DOWNLOAD PDF
                </Button>
                <Row className="resume">
                    <Document 
                        file={resume}
                        className="resume-pdf"
                        onLoadError={(error) =>
                            alert(`ERROR: Document failed to load ${error.message}`)
                        }
                    >
                        <Page pageNumber={1} scale={scale} />
                    </Document>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;