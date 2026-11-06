 
import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download } from 'lucide-react';
import '../styles/ProfitCalculator.css'; // Reusing basic styling

const QrGenerator = () => {
  const [url, setUrl] = useState('https://oteyosolutions.com');
  const [fgColor, setFgColor] = useState('#6B21A8'); // Default Purple
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const qrRef = useRef();

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "oteyo-qr-code.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="calc-page container">
      <div className="calc-card" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h2>QR Code Generator</h2>
        <p>Generate a custom QR code for your website or business.</p>

        <div className="form-group" style={{ textAlign: 'left' }}>
          <label>Enter URL or Text</label>
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="https://example.com"
          />
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', textAlign: 'left' }}>
          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
            <label>Color</label>
            <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} style={{ width: '100%', height: '40px', padding: '4px', cursor: 'pointer' }} />
          </div>
          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
            <label>Background</label>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} style={{ width: '100%', height: '40px', padding: '4px', cursor: 'pointer' }} />
          </div>
        </div>

        <div ref={qrRef} style={{ padding: '30px', background: bgColor, display: 'inline-block', borderRadius: '16px', marginBottom: '30px', border: '1px solid #f0f0f0' }}>
          <QRCodeCanvas 
            value={url || "https://oteyosolutions.com"} 
            size={200} 
            bgColor={bgColor}
            fgColor={fgColor}
            level={"H"}
            includeMargin={true}
          />
        </div>

        <button onClick={downloadQRCode} className="btn-primary" style={{ width: '100%', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <Download size={20} /> Download PNG
        </button>
      </div>
    </div>
  );
};

export default QrGenerator;