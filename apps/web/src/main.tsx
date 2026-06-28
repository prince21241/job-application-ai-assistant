import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">AI Portfolio Project</p>
        <h1>Job Application AI Agent</h1>
        <p className="subtitle">
          Find jobs, match them to your resume, generate tailored application materials,
          and track your progress with human approval at every step.
        </p>
        <div className="cards">
          <div className="card"><h2>Job Matching</h2><p>Score roles against your skills and projects.</p></div>
          <div className="card"><h2>Resume Tailoring</h2><p>Generate stronger bullets based on the job description.</p></div>
          <div className="card"><h2>Tracker</h2><p>Manage saved, applied, interview, and offer stages.</p></div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
