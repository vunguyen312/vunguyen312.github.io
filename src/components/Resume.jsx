import { Container, Row } from "react-bootstrap";
import resume from "../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function Resume(){
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
                        <Page pageNumber={1} scale={1.7} />
                    </Document>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;