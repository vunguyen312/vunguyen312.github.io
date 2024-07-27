import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import resume from "../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function Resume(){
    const [scale, setScale] = useState(0.04 * Math.sqrt(window.innerWidth));

    useEffect(() => {
        window.addEventListener("resize", () => setScale(0.04 * Math.sqrt(window.innerWidth)));
        return () => 
            window.removeEventListener("resize", () => setScale(0.04 * Math.sqrt(window.innerWidth)));
    }, []);

    return(
        <div>
            <Container fluid className="resume-section">
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