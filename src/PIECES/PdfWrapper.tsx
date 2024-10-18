import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';


export const PdfWrapper = ({ children, filename, orientation='portrait' }) => {
  const contentRef = useRef();

  const handleDownloadPdf = () => {
    const element = contentRef.current;

    html2pdf()
      .from(element)
      .set({
        margin: 0,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'letter', orientation: orientation, },
        // jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      })
      .save();
  };

  return (
    <div style={{
        display: "grid",
        flexDirection: 'column',
        width: '100%',
      }}>
      {/* Button to trigger PDF download */}
      <button onClick={handleDownloadPdf}>Download PDF</button>

      {/* The content to be wrapped and converted to PDF */}
      <div ref={contentRef} style={{ 
        // padding: '20px',
        // border: '1px solid #000',
        // display: 'flex',
        marginTop: '20px',
        
        }}>
        {children}
      </div>
    </div>
  );
};

