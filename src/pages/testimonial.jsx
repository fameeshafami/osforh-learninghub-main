import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import StatsSection from '../components/StatsSection.jsx';
import CtaSection from '../components/CtaSection.jsx';
import StudentReviewsSection from '../components/StudentReviewsSection.jsx';
import IndustryLeadersSection from '../components/IndustryLeadersSection.jsx';

export default function Testimonial() {
  useEffect(() => {
    document.title = "Testimonials | Osforh Learning Hub";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader
        className="testimonials-page-header"
        badge="Testimonials"
        title={
          <>
            Real students. <span className="gr">Real careers.</span>
          </>
        }
        description="Our alumni step into paid junior and senior roles with agencies across Tirur, Calicut, Kochi and the UAE. Meet some of them and see how we get you there."
      />

      {/* Student Reviews Wall */}
      <StudentReviewsSection />



      {/* How We Get You Placed */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg), var(--s) 50%, var(--bg))' }}>
        <div className="wrap">
          <div className="hd rv on">
            <div className="eb">How We Get You Placed</div>
            <h2>
              Four steps from classroom to <span className="gr">offer letter</span>
            </h2>
          </div>
          <div className="w4">
            <div className="rv on">
              Job-ready portfolio
              <small>Case studies on live domains and Behance that recruiters prioritise.</small>
            </div>
            <div className="rv on">
              Mock interview drills
              <small>Technical questions, salary negotiation and HR scenarios, practised first.</small>
            </div>
            <div className="rv on">
              Agency referrals
              <small>Direct introductions through our network of hiring partners.</small>
            </div>
            <div className="rv on">
              Live internship
              <small>A final month on real briefs with a work experience credential.</small>
            </div>
          </div>
        </div>
      </section>

      {/* See what learning at Osforh feels like – Video Stories */}
      <IndustryLeadersSection />

      <CtaSection
        title={
          <>
            Your name could be <span className="gr">next.</span>
          </>
        }
        description="Join the next batch and start building the portfolio that gets you hired."
        buttonText="Apply now"
        buttonLink="/contact"
      />
    </>
  );
}
