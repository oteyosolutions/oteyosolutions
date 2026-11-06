 
import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import '../styles/ProfitCalculator.css'; 

const AiBioGenerator = () => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [skills, setSkills] = useState('');
  const [platform, setPlatform] = useState('LinkedIn');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setResult('');

    // SIMULATION: In the future, this will call your Django API
    setTimeout(() => {
      let generatedBio = '';
      
      if (platform === 'LinkedIn') {
        generatedBio = `I am ${name}, a passionate ${profession}. I specialize in ${skills}. I am dedicated to delivering high-quality results and continuously learning new technologies to solve real-world problems. Open to new opportunities and collaborations.`;
      } else if (platform === 'Twitter / X') {
        generatedBio = `🚀 ${profession} | ${name} | Skilled in ${skills}. Building the future one line at a time. 💻✨`;
      } else if (platform === 'Website') {
        generatedBio = `Welcome! I'm ${name}. As a professional ${profession}, I bring expertise in ${skills} to every project. My goal is to help businesses grow by leveraging modern digital solutions.`;
      }

      setResult(generatedBio);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="calc-page container">
      <div className="calc-card" style={{ maxWidth: '600px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ background: '#f3e8ff', padding: '10px', borderRadius: '12px', color: 'var(--primary-purple)' }}>
            <Sparkles size={24} />
          </div>
          <div>
            <h2 style={{ margin: 0 }}>AI Bio Generator</h2>
            <p style={{ margin: 0, fontSize: '14px' }}>Generate a professional bio for your profile.</p>
          </div>
        </div>

        <form onSubmit={handleGenerate}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Kelvin Oteyo" required />
          </div>

          <div className="form-group">
            <label>Your Profession</label>
            <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="e.g. Full-Stack Software Developer" required />
          </div>

          <div className="form-group">
            <label>Key Skills (Separated by commas)</label>
            <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="e.g. React, Python, AI Integration" required />
          </div>

          <div className="form-group">
            <label>Target Platform</label>
            <select value={platform} onChange={(e) => setPlatform(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <option>LinkedIn</option>
              <option>Twitter / X</option>
              <option>Website</option>
            </select>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', marginTop: '10px' }} disabled={isGenerating}>
            {isGenerating ? 'Generating Magic...' : 'Generate Bio'}
          </button>
        </form>

        {result && (
          <div style={{ marginTop: '30px', background: '#f9fafb', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h4 style={{ margin: 0 }}>Your Generated Bio:</h4>
              <button onClick={copyToClipboard} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {copied ? <><Check size={16}/> Copied</> : <><Copy size={16}/> Copy</>}
              </button>
            </div>
            <p style={{ color: 'var(--text-dark)', lineHeight: '1.6', margin: 0 }}>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiBioGenerator;