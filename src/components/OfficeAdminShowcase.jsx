import React, { useState } from 'react';
import './OfficeAdminShowcase.css';

export default function OfficeAdminShowcase({ accent = '#006738' }) {
  const [activeTab, setActiveTab] = useState('excel'); // 'excel' | 'docs' | 'planner'

  return (
    <div className="oas-root" style={{ '--accent-color': accent }}>
      {/* Top Console Bar */}
      <div className="oas-console-header">
        <div className="oas-badge-group">
          <span className="oas-status-pill">
            <span className="oas-pulse-dot"></span>
            EXECUTIVE SUITE
          </span>
          <span className="oas-spec-pill">MS Office &amp; Workspace</span>
        </div>

        {/* Workspace Switcher Tabs */}
        <div className="oas-tab-buttons" role="tablist">
          <button
            type="button"
            className={`oas-tab-btn ${activeTab === 'excel' ? 'active' : ''}`}
            onClick={() => setActiveTab('excel')}
          >
            📊 Excel Analytics
          </button>
          <button
            type="button"
            className={`oas-tab-btn ${activeTab === 'docs' ? 'active' : ''}`}
            onClick={() => setActiveTab('docs')}
          >
            ✉️ Corporate Docs
          </button>
          <button
            type="button"
            className={`oas-tab-btn ${activeTab === 'planner' ? 'active' : ''}`}
            onClick={() => setActiveTab('planner')}
          >
            ⏱️ Board Planner
          </button>
        </div>
      </div>

      {/* Main Showcase Chassis */}
      <div className="oas-chassis">
        {activeTab === 'excel' && (
          <div className="oas-screen excel-mode">
            {/* Ribbon Bar */}
            <div className="oas-app-ribbon excel">
              <div className="oas-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="oas-formula-bar">
                <span className="fx">fx</span>
                <code>=XLOOKUP(Emp_ID, Staff_Database!A:F, 4, &quot;Verified&quot;)</code>
              </div>
              <span className="oas-app-tag">MS Excel 365</span>
            </div>

            {/* Dashboard Content */}
            <div className="oas-content-panel">
              <div className="oas-kpi-row">
                <div className="oas-kpi-card">
                  <span className="kpi-title">Monthly Payroll &amp; MIS</span>
                  <b className="kpi-num">₹14.8 L</b>
                  <span className="kpi-badge positive">✓ 100% Reconciled</span>
                </div>
                <div className="oas-kpi-card">
                  <span className="kpi-title">Pivot Table Analytics</span>
                  <b className="kpi-num">48 Depts</b>
                  <span className="kpi-badge positive">Automated VLOOKUP</span>
                </div>
              </div>

              {/* Data Table */}
              <div className="oas-mini-table">
                <div className="table-header">
                  <span>REF NO</span>
                  <span>DEPARTMENT</span>
                  <span>WORKFLOW STATUS</span>
                  <span>APPROVAL</span>
                </div>
                <div className="table-row">
                  <code>#ADM-804</code>
                  <span>Executive Operations</span>
                  <span className="status-done">Completed</span>
                  <b>Approved</b>
                </div>
                <div className="table-row">
                  <code>#FIN-291</code>
                  <span>Budget Reallocation</span>
                  <span className="status-progress">In Review</span>
                  <b>Director Sign-off</b>
                </div>
                <div className="table-row">
                  <code>#HR-512</code>
                  <span>Corporate Onboarding</span>
                  <span className="status-done">Scheduled</span>
                  <b>HR Head</b>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="oas-screen docs-mode">
            {/* Word Ribbon */}
            <div className="oas-app-ribbon word">
              <div className="oas-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="oas-doc-title">Executive_Board_Minutes_Q4.docx</span>
              <span className="oas-app-tag word-tag">MS Word Pro</span>
            </div>

            <div className="oas-content-panel">
              <div className="oas-letterhead">
                <div className="lh-header">
                  <b>OSFORH GROUP OF INSTITUTIONS</b>
                  <small>Executive Office Administration &amp; Secretarial Desk</small>
                </div>
                <div className="lh-meta">
                  <span>To: Department Heads</span>
                  <span>Date: 28 October 2026</span>
                </div>
                <div className="lh-body">
                  <p>
                    <strong>Subject: Protocol for Digital Documentation &amp; Google Workspace Filing</strong>
                  </p>
                  <p>
                    All official executive correspondence, meeting agendas, and institutional records must follow ISO 9001 documentation standards. Cloud archiving enabled via encrypted Workspace directories.
                  </p>
                </div>
                <div className="lh-footer-chips">
                  <span>✉️ Email Etiquette</span>
                  <span>📑 Minutes of Meeting</span>
                  <span>🤝 Client Protocol</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'planner' && (
          <div className="oas-screen planner-mode">
            {/* Planner Ribbon */}
            <div className="oas-app-ribbon outlook">
              <div className="oas-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="oas-doc-title">Executive Calendar &amp; Board Scheduler</span>
              <span className="oas-app-tag outlook-tag">Outlook 365</span>
            </div>

            <div className="oas-content-panel">
              <div className="oas-schedule-list">
                <div className="schedule-item priority-high">
                  <div className="sch-time">09:30 AM</div>
                  <div className="sch-detail">
                    <b>Board of Directors Quarterly Review</b>
                    <span>Conference Hall A • Presentation &amp; Financial Dossier Prepared</span>
                  </div>
                  <span className="sch-badge">VIP Confirmed</span>
                </div>

                <div className="schedule-item">
                  <div className="sch-time">11:45 AM</div>
                  <div className="sch-detail">
                    <b>Corporate Vendor Contract Renewals</b>
                    <span>Executive Suite • Digital Filing &amp; Signatures</span>
                  </div>
                  <span className="sch-badge pending">In Progress</span>
                </div>

                <div className="schedule-item">
                  <div className="sch-time">03:00 PM</div>
                  <div className="sch-detail">
                    <b>Front-Office Protocol &amp; Guest Reception</b>
                    <span>Reception Desk • Visitor Log Verification</span>
                  </div>
                  <span className="sch-badge done">Active</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tools Supported Footer Pills */}
        <div className="oas-footer-chips">
          <span className="oas-chip">MS Excel Advanced</span>
          <span className="oas-chip">MS Word &amp; Docs</span>
          <span className="oas-chip">Executive PPT</span>
          <span className="oas-chip">Corporate Etiquette</span>
          <span className="oas-chip highlight">Google Workspace</span>
        </div>
      </div>
    </div>
  );
}

