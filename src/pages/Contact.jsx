import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import ContactForm from '../components/ContactForm.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Osforh Learning Hub";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader
        badge="Contact"
        title={
          <>
            Come visit our <span className="gr">Tirur campus</span>
          </>
        }
        description="Sit in on a live sprint, meet our mentors and get a free 1-on-1 counseling session. We reply within a day."
      />

      {/* Campus Info & Enquiry Form */}
      <section>
        <div className="wrap cl">
          <div>
            <div className="ci rv on">
              <i>⌖</i>
              <div>
                <b>Osforh Learning Hub Campus</b>
                <span>Near Bus Stand, Tirur, Malappuram, Kerala 676101</span>
                <a
                  href="https://maps.app.goo.gl/FmmqChiQ8mFGVXhx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'var(--lime)', marginTop: '6px', fontWeight: '600' }}
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            <div className="ci rv on">
              <i>✆</i>
              <div>
                <b>
                  <a href="tel:+91 9946227177">+91 9946227177</a>
                </b>
                <span>Phone &amp; WhatsApp · Mon to Sat, 9:00 AM to 6:30 PM</span>
              </div>
            </div>

            <div className="ci rv on">
              <i>✉</i>
              <div>
                <b>
                  <a href="mailto:info@osforhlearninghub.in">info@osforhlearninghub.in</a>
                </b>
                <span>Admissions enquiries</span>
              </div>
            </div>

            <div className="map rv on">
              <iframe
                src="https://maps.google.com/maps?q=10.9189375,75.9234375&hl=en&z=16&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Osforh Learning Hub Location"
              ></iframe>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Your First Visit Expectations */}
      <section>
        <div className="wrap">
          <div className="hd rv on">
            <div className="eb">Your First Visit</div>
            <h2>
              What happens when you <span className="gr">come to the campus</span>
            </h2>
            {/* <p>Everything on the first visit is free and carries no commitment.</p> */}
          </div>
          <div className="w4">
            <div className="rv on">
              Free counseling
              <small>Talk through your goals and find the course that fits your interest.</small>
            </div>
            <div className="rv on">
              Meet the mentors
              <small>Ask working professionals what the job looks like day to day.</small>
            </div>
            <div className="rv on">
              Sit in on a live sprint
              <small>See how classes and labs actually run before you decide.</small>
            </div>
            <div className="rv on">
              Choose your batch
              <small>Weekday, weekend or hybrid, with interest-free EMI if you need it.</small>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg), var(--s) 50%, var(--bg))' }}>
        <div className="wrap">
          <div className="hd rv on">
            <div className="eb">Got Questions?</div>
            <h2>
              Frequently asked <span className="gr">questions</span>
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
