import React from 'react';

const comparisonRows = [
  { label: "How you learn", typical: "Slides and outdated notes", osforh: "Live labs and real briefs" },
  { label: "Projects", typical: "Simulated mock files", osforh: "Live ad budgets, real client work" },
  { label: "What you leave with", typical: "A paper certificate", osforh: "Portfolio link and client proof" },
  { label: "Help when stuck", typical: "Little or no guidance", osforh: "Mentors sit with you till it runs" },
  { label: "Schedule", typical: "Fixed weekday timings", osforh: "Weekday, weekend and hybrid batches" }
];

export default function ComparisonTable() {
  return (
    <div className="cmp rv on">
      <div>
        <span className="h">&nbsp;</span>
        <span className="h">Typical institute</span>
        <span className="h">Osforh</span>
      </div>
      {comparisonRows.map((row, index) => (
        <div key={index}>
          <span>{row.label}</span>
          <span>{row.typical}</span>
          <span>{row.osforh}</span>
        </div>
      ))}
    </div>
  );
}
