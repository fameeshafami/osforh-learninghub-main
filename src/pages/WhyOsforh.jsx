import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Timeline from '../components/Timeline.jsx';
import ComparisonTable from '../components/ComparisonTable.jsx';
import CtaSection from '../components/CtaSection.jsx';
import WhyChooseSection from '../components/WhyChooseSection.jsx';

export default function WhyOsforh() {
  useEffect(() => {
    document.title = "Why Osforh | Osforh Learning Hub";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader
        className="why-osforh-page-header"
        badge="Why Osforh"
        title={
          <>
            Learn skills. Build confidence. <span className="gr">Move forward.</span>
          </>
        }
        description="We exist because traditional institutes keep students in slideshows and outdated notes. Here is exactly how Osforh is different, and what that means for you."
      />

      {/* Our Approach */}
      <section>
        <div className="wrap">
          <div className="hd rv on">
            <div className="eb">Our Approach</div>
            <h2>
              Learn by <span className="gr">doing</span>, not just listening
            </h2>
            <p>
              Every course starts from the basics and focuses on practical work, so you leave with projects you can show. Mentors guide you step by step, and we support you with internships and career preparation.
            </p>
          </div>
          <div className="w4">
            <div className="rv on">
              Project-based learning
              <small>Build real campaigns, designs and websites from week one.</small>
            </div>
            <div className="rv on">
              Practical training
              <small>Every concept is applied straight away on hands-on exercises.</small>
            </div>
            <div className="rv on">
              Mentor guidance
              <small>Working professionals who guide you step by step.</small>
            </div>
            <div className="rv on">
              Career preparation
              <small>Portfolio, mock interviews and placement assistance.</small>
            </div>
          </div>
        </div>
      </section>

      {/* Student Journey Timeline */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg), var(--s) 50%, var(--bg))' }}>
        <div className="wrap">
          <div className="hd rv on">
            <div className="eb">Your Journey</div>
            <h2>
              From curious beginner to <span className="gr">confident creator</span>
            </h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Institute Comparison */}
      <section>
        <div className="wrap">
          <div className="hd rv on">
            <div className="eb">The Difference</div>
            <h2>
              Osforh vs a <span className="gr">typical institute</span>
            </h2>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* Why Choose Osforh – Card section with marquee */}
      <WhyChooseSection />

      <CtaSection
        title={
          <>
            Ready to learn the <span className="gr">Osforh way?</span>
          </>
        }
        description="Visit the Tirur campus, sit in on a live sprint and get your portfolio assessed for free."
        buttonText="Book a free counseling"
        buttonLink="/contact"
      />
    </>
  );
}
