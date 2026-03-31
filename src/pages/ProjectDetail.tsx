import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const overviewText = project.longDescription ?? project.description

  return (
    <div className="page-detail">

      {/* ── HEADER ── */}
      <section className="detail-header">
        <div className="container">
          <Reveal variant="fade-in" delayMs={0}>
            <Link to="/projects" className="detail-back">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Projects
            </Link>
          </Reveal>

          <Reveal variant="slide-right" delayMs={40}>
            <div className="detail-chips">
              <span className="detail-chip-category">{project.category}</span>
              <span className="detail-chip-status">Status: {project.status}</span>
            </div>
          </Reveal>

          <Reveal variant="rise-blur" slow delayMs={80}>
            <div className="detail-title-row">
              <h1 className="detail-title">{project.title}</h1>
              <span className="material-symbols-outlined detail-title-icon">
                {iconForProject(project.icon)}
              </span>
            </div>
          </Reveal>

          <Reveal variant="slide-left" delayMs={160}>
            <div className="detail-tags">
              {project.tags.map(tag => (
                <span key={tag} className="detail-tag">{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BODY GRID ── */}
      <section className="detail-body">
        <div className="container">
          <div className="detail-grid">

            {/* ── MAIN COLUMN ── */}
            <div className="detail-main">

              {/* Hero image */}
              {project.imageUrl && (
                <Reveal variant="fade-up" delayMs={80}>
                  <div className="detail-hero-image">
                    <img src={project.imageUrl} alt={project.title} />
                    <div className="detail-hero-image__overlay" />
                    <div className="detail-hero-image__caption">
                      <div className="detail-hero-image__caption-label">Project Visual</div>
                      <div className="detail-hero-image__caption-text">{project.title} — {project.category}</div>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Overview */}
              <Reveal variant="fade-up" delayMs={120}>
                <div className="detail-section">
                  <h2 className="detail-section__title">Overview</h2>
                  <p className="detail-section__text">{overviewText}</p>
                </div>
              </Reveal>

              {/* Methodology */}
              {project.methodology && project.methodology.length > 0 && (
                <Reveal variant="slide-left" delayMs={160}>
                  <div className="detail-methodology">
                    <div className="detail-methodology__badge">
                      <span className="material-symbols-outlined">analytics</span>
                    </div>
                    <h2 className="detail-methodology__title">Methodology</h2>
                    {project.methodology.map((para, i) => (
                      <p key={i} className="detail-methodology__text">{para}</p>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* Outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <Reveal variant="fade-up" delayMs={200}>
                  <div className="detail-section">
                    <h2 className="detail-section__title">Outcomes &amp; Impact</h2>
                    <div className="detail-outcomes__grid">
                      {project.outcomes.map((outcome, i) => (
                        <div
                          key={i}
                          className={`detail-outcome-card ${i % 2 === 0 ? 'detail-outcome-card--yellow' : 'detail-outcome-card--blue'}`}
                        >
                          <div className="detail-outcome-card__value">{outcome.value}</div>
                          <div className="detail-outcome-card__label">{outcome.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <aside className="detail-sidebar">

              {/* Team */}
              {project.team && project.team.length > 0 && (
                <Reveal variant="slide-right" delayMs={80}>
                  <div className="detail-sidebar-card detail-sidebar-card--dotted">
                    <h3 className="detail-sidebar__title">Team</h3>
                    {project.team.map((member, i) => (
                      <div key={member.name} className="detail-team-member">
                        <div className={`detail-team-avatar detail-team-avatar--${i % 4}`} />
                        <div>
                          <div className="detail-team-name">{member.name}</div>
                          <div className="detail-team-role">{member.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* Tech Stack */}
              <Reveal variant="slide-right" delayMs={140}>
                <div className="detail-sidebar-card">
                  <h3 className="detail-sidebar__title">Tech Stack</h3>
                  <div className="detail-stack-list">
                    {project.tags.map(tag => (
                      <div key={tag} className="detail-stack-item">
                        <span className="detail-stack-dot" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Project Details */}
              <Reveal variant="slide-right" delayMs={200}>
                <div className="detail-sidebar-card detail-sidebar-card--details">
                  <h3 className="detail-sidebar__title">Project Details</h3>
                  <div className="detail-details-row">
                    <span className="detail-details-label">Category</span>
                    <span className="detail-details-value">{project.category}</span>
                  </div>
                  <div className="detail-details-row">
                    <span className="detail-details-label">Status</span>
                    <span className="detail-details-value">{project.status}</span>
                  </div>
                  {project.partner && (
                    <div className="detail-details-row">
                      <span className="detail-details-label">Partner</span>
                      <span className="detail-details-value">{project.partner}</span>
                    </div>
                  )}
                  {project.timeline && (
                    <div className="detail-details-row">
                      <span className="detail-details-label">Timeline</span>
                      <span className="detail-details-value">{project.timeline}</span>
                    </div>
                  )}
                </div>
              </Reveal>

              {/* CTA */}
              <Reveal variant="zoom-pop" delayMs={260}>
                <div className="detail-sidebar-card detail-sidebar-card--cta">
                  <h4 className="detail-cta__title">Ready to contribute?</h4>
                  <p className="detail-cta__text">
                    Join our next sprint and help drive meaningful data science impact.
                  </p>
                  <Link to="/join" className="detail-cta__btn">Apply to Team</Link>
                </div>
              </Reveal>

            </aside>
          </div>
        </div>
      </section>

      {/* ── BACK BUTTON FOOTER ── */}
      <Reveal variant="fade-up" delayMs={80}>
        <div className="detail-footer">
          <Link to="/projects" className="detail-back-btn">
            Back to All Projects
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </Reveal>

    </div>
  )
}

/**
 * Maps the emoji icon stored in project data to a Material Symbols icon name.
 * Falls back to "science" for unknown emojis.
 */
function iconForProject(emoji: string): string {
  const map: Record<string, string> = {
    '⚡': 'bolt',
    '🍽️': 'restaurant',
    '🎓': 'school',
    '💧': 'water_drop',
    '🏗️': 'construction',
  }
  return map[emoji] ?? 'science'
}
