import React from 'react';
import { FAQS } from '../data/siteData.jsx';

export default function FaqAccordion() {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      {FAQS.map((faq, index) => (
        <details key={index} name="fq" defaultOpen={index === 0}>
          <summary>{faq.q}</summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
